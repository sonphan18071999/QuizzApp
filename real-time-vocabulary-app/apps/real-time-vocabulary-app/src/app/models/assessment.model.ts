export interface Assessment {
  id: string;
  title: string;
  description: string;
  duration: string;
  attempt?: number;
  rule?: string;
}
