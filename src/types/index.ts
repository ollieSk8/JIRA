export interface User {
  id: number;
  name: string;
  token: string;
}
export interface projects {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}
export interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: Number;
  };
  setParam: (param: SearchPanelProps['param']) => void;
}
