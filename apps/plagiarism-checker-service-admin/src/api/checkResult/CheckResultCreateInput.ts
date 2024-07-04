import { PlagiarismCheckCreateNestedManyWithoutCheckResultsInput } from "./PlagiarismCheckCreateNestedManyWithoutCheckResultsInput";
import { InputJsonValue } from "../../types";

export type CheckResultCreateInput = {
  plagiarismChecks?: PlagiarismCheckCreateNestedManyWithoutCheckResultsInput;
  plagiarismPercentage?: number | null;
  report?: InputJsonValue;
};
