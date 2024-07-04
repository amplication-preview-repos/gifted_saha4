import { CheckResultWhereUniqueInput } from "../checkResult/CheckResultWhereUniqueInput";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type PlagiarismCheckWhereInput = {
  checkResult?: CheckResultWhereUniqueInput;
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
};
