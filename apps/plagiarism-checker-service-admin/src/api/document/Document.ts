import { PlagiarismCheck } from "../plagiarismCheck/PlagiarismCheck";
import { User } from "../user/User";

export type Document = {
  content: string | null;
  createdAt: Date;
  id: string;
  plagiarismChecks?: Array<PlagiarismCheck>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
