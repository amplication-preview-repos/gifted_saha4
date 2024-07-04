import { CheckResult } from "../checkResult/CheckResult";
import { Document } from "../document/Document";

export type PlagiarismCheck = {
  checkResult?: CheckResult | null;
  createdAt: Date;
  document?: Document | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
