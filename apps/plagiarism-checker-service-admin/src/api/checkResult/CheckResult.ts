import { PlagiarismCheck } from "../plagiarismCheck/PlagiarismCheck";
import { JsonValue } from "type-fest";

export type CheckResult = {
  createdAt: Date;
  id: string;
  plagiarismChecks?: Array<PlagiarismCheck>;
  plagiarismPercentage: number | null;
  report: JsonValue;
  updatedAt: Date;
};
