import { GraphService } from "../../../services/GraphService";
export interface IHelloWorldProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  graphService: GraphService;
}