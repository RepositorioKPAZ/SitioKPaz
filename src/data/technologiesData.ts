
import { 
  Code, 
  Database, 
  Cloud, 
  Server, 
  Smartphone, 
  Globe,
  Terminal,
  Layers,
  Box,
  Zap,
  Brain,
  BarChart3,
  GitBranch,
  Wrench
} from "lucide-react";

export const technologiesRow1 = [
  { name: "Java", icon: Code },
  { name: "Python", icon: Terminal },
  { name: "JavaScript", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "SQL", icon: Database },
  { name: "C#", icon: Code },
  { name: "HTML/CSS", icon: Globe },
  { name: "React", icon: Layers },
  { name: "Angular", icon: Layers },
  { name: "Node.js", icon: Server },
  { name: ".NET", icon: Box },
  { name: "Spring Boot", icon: Zap },
  { name: "Flutter", icon: Smartphone },
  { name: "Django", icon: Server }
];

export const technologiesRow2 = [
  { name: "Oracle", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "SQL Server", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "AWS", icon: Cloud },
  { name: "Azure", icon: Cloud },
  { name: "Google Cloud Platform", icon: Cloud },
  { name: "Docker", icon: Box },
  { name: "Kubernetes", icon: Box },
  { name: "GitHub", icon: GitBranch },
  { name: "Jenkins", icon: Wrench },
  { name: "UiPath", icon: Wrench },
  { name: "BluePrism", icon: Wrench },
  { name: "Automation Anywhere", icon: Wrench },
  { name: "Power Automate", icon: Zap },
  { name: "Rocketbot", icon: Wrench },
  { name: "OutSystems", icon: Layers },
  { name: "Genexus", icon: Layers },
  { name: "Salesforce Platform", icon: Cloud },
  { name: "TensorFlow", icon: Brain },
  { name: "Power BI", icon: BarChart3 },
  { name: "Tableau", icon: BarChart3 },
  { name: "Pandas", icon: BarChart3 },
  { name: "OpenAI API", icon: Brain },
  { name: "Android", icon: Smartphone },
  { name: "iOS", icon: Smartphone },
  { name: "Golang", icon: Code },
  { name: "PHP", icon: Code },
  { name: "Swift", icon: Code },
  { name: "Vue.js", icon: Layers }
];

export interface Technology {
  name: string;
  icon: any;
}
