import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlagiarismCheckListRelationFilter } from "../plagiarismCheck/PlagiarismCheckListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  plagiarismChecks?: PlagiarismCheckListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
