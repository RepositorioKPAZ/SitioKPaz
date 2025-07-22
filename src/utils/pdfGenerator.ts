import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface TeamMember {
  id: string;
  role: string;
  seniority: string;
  quantity: number;
}

interface CalculationData {
  totalSavings: number;
  totalInternalCost: number;
  totalOutsourcingCost: number;
  savingsPercentage: number;
  projectDuration: number[];
  hiringDelay: number;
  teamMembers: TeamMember[];
}

interface DownloadFormData {
  name: string;
  company?: string;
  position?: string;
  email: string;
  phone?: string;
  projectStartDate?: string;
}

export const generateSavingsPDF = (
  calculationData: CalculationData,
  formData: DownloadFormData,
  perfilesData: any[] = [] // Agregar datos de perfiles de la base de datos
) => {
  console.log('📄 Generando PDF con datos:', {
    calculationData,
    formData,
    teamMembers: calculationData.teamMembers,
    teamMembersLength: calculationData.teamMembers?.length,
    projectDuration: calculationData.projectDuration,
    hiringDelay: calculationData.hiringDelay,
    perfilesData: perfilesData.length
  });

  // Validar y proporcionar valores por defecto
  const safeCalculationData = {
    totalSavings: calculationData.totalSavings || 0,
    totalInternalCost: calculationData.totalInternalCost || 0,
    totalOutsourcingCost: calculationData.totalOutsourcingCost || 0,
    savingsPercentage: calculationData.savingsPercentage || 27.8,
    projectDuration: calculationData.projectDuration || [12],
    hiringDelay: calculationData.hiringDelay || 3,
    teamMembers: calculationData.teamMembers || []
  };

  console.log('📄 Datos seguros para PDF:', safeCalculationData);

  // Crear PDF en orientación horizontal (landscape)
  const doc = new jsPDF('landscape', 'mm', 'a4');
  
  // Configuración de colores
  const blueColor: [number, number, number] = [30, 74, 206]; // #1e4ace
  const greyColor: [number, number, number] = [128, 128, 128];
  
  // Título principal
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('Cálculo de Ahorro con KPaz', 148, 20, { align: 'center' }); // 148 es el centro en landscape A4
  
  // Tabla de información del proyecto (3 columnas)
  const projectInfoData = [
    [formData.name || 'N/A', formData.company || 'N/A', formData.projectStartDate ? new Date(formData.projectStartDate).toLocaleDateString('es-CL') : 'N/A']
  ];
  
  const projectInfoHeaders = ['Responsable Proyecto', 'Compañía', 'Fecha Inicio Estimada'];
  
  autoTable(doc, {
    head: [projectInfoHeaders],
    body: projectInfoData,
    startY: 30,
    styles: {
      fillColor: blueColor,
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 10
    },
    bodyStyles: {
      fillColor: [255, 255, 255], // Fondo blanco para la fila de datos
      textColor: [0, 0, 0],      // Texto negro para la fila de datos
      fontSize: 9
    },
    tableWidth: 280,
    margin: { left: 15 },
    // Eliminar columnStyles para que el fondo de la fila de datos sea blanco
  });
  
  // Tabla de perfiles del equipo
  const teamData = safeCalculationData.teamMembers.map(member => {
    // Buscar el perfil correspondiente en la base de datos
    const perfil = perfilesData.find(p => 
      p.rol === member.role && p.seniority === member.seniority
    );
    
    // Usar datos reales de la base de datos o valores por defecto
    const sueldoLiquido = perfil && !isNaN(Number(perfil.sueldo_clp)) ? Number(perfil.sueldo_clp).toLocaleString('es-CL') : '2.100.000';
    const bonos = perfil && !isNaN(Number(perfil.bonos)) ? Number(perfil.bonos).toFixed(2) : '409,02';
    const aguinaldos = perfil && !isNaN(Number(perfil.aguinaldos)) ? Number(perfil.aguinaldos).toFixed(2) : '41,67';
    const otrosBen = perfil && !isNaN(Number(perfil.otros_ben)) ? Number(perfil.otros_ben).toFixed(2) : '290,48';
    const previsionales = perfil && !isNaN(Number(perfil.cotiz_prev)) ? Number(perfil.cotiz_prev).toFixed(2) : '736,23';
    const impuestos = perfil && !isNaN(Number(perfil.imptos)) ? Number(perfil.imptos).toFixed(2) : '255,62';
    const movilizacion = perfil && !isNaN(Number(perfil.moviliz)) ? Number(perfil.moviliz).toString() : '100';
    const colacion = perfil && !isNaN(Number(perfil.colacion)) ? Number(perfil.colacion).toString() : '100';
    const internet = perfil && !isNaN(Number(perfil.internet)) ? Number(perfil.internet).toString() : '30';
    const vacaciones = perfil && !isNaN(Number(perfil.prov_vac)) ? Number(perfil.prov_vac).toFixed(2) : '257,66';
    const indemnizacion = perfil && !isNaN(Number(perfil.prov_finiq)) ? Number(perfil.prov_finiq).toFixed(2) : '736,19';
    const costoAdm = perfil && !isNaN(Number(perfil.costo_adm)) ? Number(perfil.costo_adm).toFixed(2) : '162,33';
    const costoMes = perfil && !isNaN(Number(perfil.costo_mes)) ? Number(perfil.costo_mes).toFixed(2) : '5.573,29';
    
    return [
      member.role || 'N/A',
      member.seniority || 'N/A',
      sueldoLiquido,
      bonos,
      aguinaldos,
      otrosBen,
      previsionales,
      impuestos,
      movilizacion,
      colacion,
      internet,
      vacaciones,
      indemnizacion,
      costoAdm,
      costoMes,
      (member.quantity || 1).toString(),
      (parseFloat(costoMes.replace(',', '.')) * (member.quantity || 1)).toFixed(2) // Total Perfil
    ];
  });
  
  const teamHeaders = [
    'Perfil', 'Seniority', 'Sueldo Líquido', 'Bonos/Mes', 'Aguinaldos/Mes',
    'Otros Beneficios', 'Previsionales', 'Impuesto', 'Movilización', 'Colación',
    'Internet', 'Vacaciones', 'Indemnización', 'C. Administrativo', 'Costo Mes',
    'Cantidad', 'Total Perfil'
  ];
  
  autoTable(doc, {
    head: [teamHeaders],
    body: teamData,
    startY: (doc as any).lastAutoTable?.finalY + 10 || 60, // Posición después de la tabla de info del proyecto
    styles: {
      fillColor: blueColor,
      textColor: [255, 255, 255],
      fontStyle: 'normal', // Quitar negrita
      fontSize: 7, // Reducir tamaño de letra
      lineColor: [180, 180, 180],
      lineWidth: 0.3,
      halign: 'center',
      valign: 'middle',
    },
    bodyStyles: {
      fillColor: [255, 255, 255], // Fondo blanco para las filas
      textColor: [0, 0, 0],      // Texto negro para las filas
      fontStyle: 'normal', // Quitar negrita
      fontSize: 6, // Reducir tamaño de letra
      lineColor: [180, 180, 180],
      lineWidth: 0.3,
      halign: 'center',
      valign: 'middle',
    },
    alternateRowStyles: {
      fillColor: [245, 247, 250], // Gris muy claro para filas alternas
    },
    tableLineColor: [180, 180, 180],
    tableLineWidth: 0.3,
    tableWidth: 280, // Más ancho para landscape
    margin: { left: 15 }
  });
  
  // Tablas de resumen (3 tablas horizontales)
  const summaryY = (doc as any).lastAutoTable?.finalY + 10 || 150;
  
  // Calcular el costo total mensual con KPaz (costo_mes * cantidad para cada perfil)
  const totalMonthlyKpazCost = safeCalculationData.teamMembers.reduce((total, member) => {
    const perfil = perfilesData.find(p => p.rol === member.role && p.seniority === member.seniority);
    const costoMes = perfil && !isNaN(Number(perfil.costo_mes)) ? Number(perfil.costo_mes) : 0;
    return total + (costoMes * (member.quantity || 1));
  }, 0);

  // Calcular el costo de oportunidad (Costo Total Mensual * meses de demora en contratación)
  const costoOportunidad = Math.round(totalMonthlyKpazCost * safeCalculationData.hiringDelay);

  // Calcular el gasto de reclutamiento (0.8 * costo total mensual, sin decimales)
  const gastosReclutamiento = Math.round(0.8 * totalMonthlyKpazCost);
  // Calcular el costo equipos + software (1915 * suma de cantidades de perfiles seleccionados, sin decimales)
  const totalQuantity = safeCalculationData.teamMembers.reduce((sum, member) => sum + (member.quantity || 0), 0);
  const costoEquiposSoftware = Math.round(1915 * totalQuantity);

  // Calcular Onboarding y Bienvenida (250 * suma de cantidades de perfiles seleccionados)
  const onboarding = Math.round(250 * totalQuantity);
  // Calcular Costo de Activación Equipo (gastosReclutamiento + costoEquiposSoftware + onboarding)
  const costoActivacionEquipo = gastosReclutamiento + costoEquiposSoftware + onboarding;

  // Calcular Costo Interno: (meses de duración * costo total mensual) + costo oportunidad + costo activación equipo
  const costoInterno = (safeCalculationData.projectDuration[0] * totalMonthlyKpazCost) + costoOportunidad + costoActivacionEquipo;

  // Calcular Ahorro Total: costoInterno - Costo con KPaz (sin decimales)
  const ahorroTotal = Math.round(costoInterno - safeCalculationData.totalOutsourcingCost);

  // Calcular % de ahorro: (ahorroTotal / costoInterno) * 100, redondeado a 1 decimal
  const porcentajeAhorro = costoInterno > 0 ? ((ahorroTotal / costoInterno) * 100).toFixed(1) : '0.0';

  // Crear una tabla horizontal con todas las secciones
  const summaryData = [
    ['Duración del proyecto', { content: `${safeCalculationData.projectDuration[0]} meses`, styles: { fontStyle: 'bold', fillColor: [255,255,255], textColor: [0,0,0], halign: 'center' } }, 'Gastos de Reclutamiento', { content: `${gastosReclutamiento.toLocaleString('es-CL', { maximumFractionDigits: 0 })}`, styles: { fontStyle: 'bold', fillColor: [255,255,255], textColor: [0,0,0], halign: 'center' } }, 'Costo Interno', { content: `${costoInterno.toLocaleString('es-CL', { maximumFractionDigits: 0 })}`, styles: { fontStyle: 'bold', fillColor: [255,255,255], textColor: [0,0,0], halign: 'center' } }],
    ['Costo Total Mensual', { content: `${Math.round(totalMonthlyKpazCost).toLocaleString('es-CL', { maximumFractionDigits: 0 })}`, styles: { fontStyle: 'bold', fillColor: [255,255,255], textColor: [0,0,0], halign: 'center' } }, 'Costo Equipos + Software', { content: `${costoEquiposSoftware.toLocaleString('es-CL', { maximumFractionDigits: 0 })}`, styles: { fontStyle: 'bold', fillColor: [255,255,255], textColor: [0,0,0], halign: 'center' } }, 'Ahorro Total', { content: `${ahorroTotal.toLocaleString('es-CL', { maximumFractionDigits: 0 })}`, styles: { fontStyle: 'bold', fillColor: [255,255,255], textColor: [0,0,0], halign: 'center' } }],
    ['Demora contratación', { content: `${safeCalculationData.hiringDelay} meses`, styles: { fontStyle: 'bold', fillColor: [255,255,255], textColor: [0,0,0], halign: 'center' } }, 'Onboarding y Bienvenida', { content: `${onboarding.toLocaleString('es-CL', { maximumFractionDigits: 0 })}`, styles: { fontStyle: 'bold', fillColor: [255,255,255], textColor: [0,0,0], halign: 'center' } }, 'Costo con KPaz', { content: `${Math.round(safeCalculationData.totalOutsourcingCost).toLocaleString('es-CL', { maximumFractionDigits: 0 })}`, styles: { fontStyle: 'bold', fillColor: [255,255,255], textColor: [0,0,0], halign: 'center' } }],
    ['Costo Oportunidad', { content: `${costoOportunidad.toLocaleString('es-CL', { maximumFractionDigits: 0 })}`, styles: { fontStyle: 'bold', fillColor: [255,255,255], textColor: [0,0,0], halign: 'center' } }, 'Costos de Activación Equipo', { content: `${costoActivacionEquipo.toLocaleString('es-CL', { maximumFractionDigits: 0 })}`, styles: { fontStyle: 'bold', fillColor: [255,255,255], textColor: [0,0,0], halign: 'center' } }, '% de ahorro', { content: `${porcentajeAhorro}%`, styles: { fontStyle: 'bold', fillColor: [255,255,255], textColor: [0,0,0], halign: 'center' } }],
  ];
  
  // Encabezados de la tabla de resumen con 'Valor' sobre cada columna de valores
  const summaryHeaders = [
    'Duración del Proyecto', 'Valor', 'Gastos', 'Valor', 'Resumen', 'Valor'
  ];

  autoTable(doc, {
    head: [summaryHeaders],
    body: summaryData,
    startY: summaryY,
    styles: {
      fillColor: greyColor,
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 8,
      lineColor: [180, 180, 180],
      lineWidth: 0.3,
      halign: 'center',
      valign: 'middle',
    },
    bodyStyles: {
      fontSize: 7,
      lineColor: [180, 180, 180],
      lineWidth: 0.3,
      halign: 'center',
      valign: 'middle',
    },
    tableLineColor: [180, 180, 180],
    tableLineWidth: 0.3,
    tableWidth: 280, // Más ancho para landscape
    margin: { left: 15 },
    columnStyles: {
      0: { fillColor: greyColor, textColor: [255, 255, 255] },
      1: { fillColor: [255,255,255], textColor: [0,0,0], fontStyle: 'bold', halign: 'center' },
      2: { fillColor: greyColor, textColor: [255, 255, 255] },
      3: { fillColor: [255,255,255], textColor: [0,0,0], fontStyle: 'bold', halign: 'center' },
      4: { fillColor: greyColor, textColor: [255, 255, 255] },
      5: { fillColor: [255,255,255], textColor: [0,0,0], fontStyle: 'bold', halign: 'center' },
    }
  });
  
  // Disclaimer
  doc.setFontSize(8);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(128, 128, 128);
  doc.text('* Los cálculos son estimaciones basadas en promedios del mercado. Los ahorros reales pueden variar según el proyecto específico y las necesidades del cliente.', 15, doc.internal.pageSize.height - 20, { maxWidth: 280 });
  
  return doc;
};

export const downloadSavingsPDF = (
  calculationData: CalculationData,
  formData: DownloadFormData,
  perfilesData: any[] = []
) => {
  const doc = generateSavingsPDF(calculationData, formData, perfilesData);
  doc.save('calculo-ahorro-kpaz.pdf');
};

export const getSavingsPDFBlob = (
  calculationData: CalculationData,
  formData: DownloadFormData,
  perfilesData: any[] = []
): Promise<Blob> => {
  const doc = generateSavingsPDF(calculationData, formData, perfilesData);
  return new Promise((resolve) => {
    const pdfArrayBuffer = doc.output('arraybuffer');
    const blob = new Blob([pdfArrayBuffer], { type: 'application/pdf' });
    resolve(blob);
  });
}; 