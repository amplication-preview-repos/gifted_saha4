import { PlagiarismCheckUpdateManyWithoutCheckResultsInput } from "./PlagiarismCheckUpdateManyWithoutCheckResultsInput";
import { InputJsonValue } from "../../types";

export type CheckResultUpdateInput = {
  plagiarismChecks?: PlagiarismCheckUpdateManyWithoutCheckResultsInput;
  plagiarismPercentage?: number | null;
  report?: InputJsonValue;
};
