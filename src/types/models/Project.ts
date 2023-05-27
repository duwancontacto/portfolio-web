import {ReactElement} from "react";
export interface Project {
  name: string;
  description: string;
  githubUrl?: string;
  overview?: string;
  image: any;
  duration?: string;
  skills?: {label?: string; Icon: any; color: string}[];
}
