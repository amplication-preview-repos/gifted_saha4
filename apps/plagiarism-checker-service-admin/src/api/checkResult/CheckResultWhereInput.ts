import { StringFilter } from "../../util/StringFilter";
import { PlagiarismCheckListRelationFilter } from "../plagiarismCheck/PlagiarismCheckListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CheckResultWhereInput = {
  id?: StringFilter;
  plagiarismChecks?: PlagiarismCheckListRelationFilter;
  plagiarismPercentage?: FloatNullableFilter;
  report?: JsonFilter;
};
