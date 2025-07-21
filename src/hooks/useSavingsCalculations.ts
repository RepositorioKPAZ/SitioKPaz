
import { useMemo, useState, useEffect } from "react";
import { TeamMember } from "./useTeamManagement";
import { perfilesService, Perfil } from "@/services/api";

// Multiplicadores de seniority basados en el mercado (fallback)
const seniorityMultipliers = {
  'junior': 0.7,
  'mid': 1.0,
  'senior': 1.5
};

export const useSavingsCalculations = (teamMembers: TeamMember[], projectDuration: number[], hiringDelay: number = 3) => {
  const [perfilesData, setPerfilesData] = useState<Perfil[]>([]);
  const [loading, setLoading] = useState(true);

  // Cargar datos de perfiles desde la API
  useEffect(() => {
    const fetchPerfiles = async () => {
      try {
        setLoading(true);
        const perfiles = await perfilesService.getAll();
        setPerfilesData(perfiles);
        console.log('📊 Perfiles cargados para cálculos:', perfiles.length);
      } catch (error) {
        console.error('Error cargando perfiles para cálculos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPerfiles();
  }, []);

  // Función para obtener tarifa por rol y seniority
  const getTarifaByRolAndSeniority = (rol: string, seniority: string): { tarifa: number, costoMes: number } => {
    console.log(`🔍 Buscando tarifa y costo_mes para: ${rol} | ${seniority}`);
    
    // Buscar perfil exacto que coincida con rol y seniority
    const perfil = perfilesData.find(p => 
      p.rol === rol && p.seniority === seniority
    );
    
    if (perfil) {
      console.log(`✅ Encontrado exacto: ${perfil.rol} | ${perfil.seniority} | tarifa: $${perfil.tarifa_usd} | costo_mes: $${perfil.costo_mes || 'N/A'}`);
      return { 
        tarifa: perfil.tarifa_usd || 0,
        costoMes: perfil.costo_mes || 0
      };
    }
    
    // Si no encuentra coincidencia exacta, buscar solo por rol y aplicar multiplicador
    const perfilPorRol = perfilesData.find(p => p.rol === rol);
    if (perfilPorRol) {
      console.log(`⚠️ No encontrado exacto, usando por rol: ${perfilPorRol.rol} | tarifa: $${perfilPorRol.tarifa_usd} | costo_mes: $${perfilPorRol.costo_mes || 'N/A'}`);
      const multiplicador = seniorityMultipliers[seniority as keyof typeof seniorityMultipliers] || 1.0;
      return { 
        tarifa: (perfilPorRol.tarifa_usd || 0) * multiplicador,
        costoMes: (perfilPorRol.costo_mes || 0) * multiplicador
      };
    }
    
    console.log(`❌ No encontrado perfil para: ${rol} | ${seniority}`);
    return { tarifa: 0, costoMes: 0 };
  };

  // Memoizar los cálculos principales para evitar re-cálculos innecesarios
  const calculations = useMemo(() => {
    if (loading || perfilesData.length === 0) {
      console.log('⏳ Cargando datos de perfiles...');
      return {
        totalInternalCost: 0,
        totalSavings: 0,
        totalOutsourcingCost: 0,
        savingsPercentage: 27.8
      };
    }

    console.log('🧮 Iniciando cálculos con perfiles:', perfilesData.length);
    console.log('📋 Datos de perfiles disponibles:', perfilesData.map(p => `${p.rol} | ${p.seniority} | $${p.tarifa_usd}`));

    // Calcular costo con KPaz (usando tarifas de la base de datos)
    const totalOutsourcingCost = teamMembers.reduce((total, member) => {
      console.log(`\n🔍 Procesando miembro: ${member.role} | ${member.seniority} | x${member.quantity}`);
      
      // Obtener tarifa base desde la base de datos
      const { tarifa, costoMes } = getTarifaByRolAndSeniority(member.role, member.seniority);
      console.log(`💰 Tarifa base obtenida: $${tarifa}`);
      
      // Si no hay tarifa en la base de datos, usar fallback
      const tarifaFinal = tarifa > 0 ? tarifa : (5000 * (seniorityMultipliers[member.seniority as keyof typeof seniorityMultipliers] || 1.0));
      console.log(`💵 Tarifa final a usar: $${tarifaFinal}`);
      
      // Calcular costo mensual por miembro
      const costoMensual = tarifaFinal * member.quantity;
      console.log(`📅 Costo mensual: $${tarifaFinal} x ${member.quantity} = $${costoMensual}`);
      
      // Calcular costo total para la duración del proyecto (multiplicar por meses)
      const duracionMeses = projectDuration[0];
      const costoTotal = costoMensual * duracionMeses;
      console.log(`⏱️ Duración: ${duracionMeses} meses → Costo total: $${costoTotal}`);
      
      console.log(`💰 ${member.role} (${member.seniority}) x${member.quantity}: $${tarifaFinal} → $${costoMensual}/mes → $${costoTotal} total`);
      
      return total + costoTotal;
    }, 0);

    console.log(`\n📊 Total costo con KPaz: $${totalOutsourcingCost}`);

    // Calcular costo interno de referencia (más alto)
    const totalInternalCost = teamMembers.reduce((total, member) => {
      // Obtener datos del perfil desde la base de datos
      const { tarifa: tarifaReferencia, costoMes: costoMesReferencia } = getTarifaByRolAndSeniority(member.role, member.seniority);
      
      // Usar costo_mes de la base de datos, o fallback si no está disponible
      const costoMesFinal = costoMesReferencia > 0 ? costoMesReferencia : (8000 * (seniorityMultipliers[member.seniority as keyof typeof seniorityMultipliers] || 1.0));
      
      const costoMensual = costoMesFinal * member.quantity;
      const duracionMeses = projectDuration[0] + hiringDelay; // Sumar meses de demora en contratación
      const costoTotal = costoMensual * duracionMeses;
      
      console.log(`🏢 Costo interno desde DB: ${member.role} (${member.seniority}) x${member.quantity}: $${costoMesFinal}/mes → $${costoTotal} total (${projectDuration[0]} + ${hiringDelay} meses)`);
      
      return total + costoTotal;
    }, 0);

    console.log(`📊 Total costo interno desde DB: $${totalInternalCost}`);

    const savingsPercentage = 27.8;
    const totalSavings = totalInternalCost - totalOutsourcingCost;

    console.log(`📊 Cálculo final: Interno $${totalInternalCost} → KPaz $${totalOutsourcingCost} (Ahorro $${totalSavings})`);

    return {
      totalInternalCost,
      totalSavings,
      totalOutsourcingCost,
      savingsPercentage
    };
  }, [teamMembers, projectDuration, hiringDelay, perfilesData, loading]);

  // Memoizar el resumen del equipo por separado
  const getTeamSummary = useMemo(() => {
    return teamMembers.map(member => {
      const { tarifa, costoMes } = getTarifaByRolAndSeniority(member.role, member.seniority);
      const tarifaFinal = tarifa > 0 ? tarifa : (5000 * (seniorityMultipliers[member.seniority as keyof typeof seniorityMultipliers] || 1.0));
      
      return {
        ...member,
        monthlySalary: tarifaFinal
      };
    });
  }, [teamMembers, perfilesData, loading]);

  return {
    ...calculations,
    getTeamSummary,
    loading,
    perfilesData // Exponer los datos de perfiles
  };
};