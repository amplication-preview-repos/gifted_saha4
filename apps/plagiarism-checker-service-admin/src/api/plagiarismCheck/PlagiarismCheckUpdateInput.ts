import { CheckResultWhereUniqueInput } from "../checkResult/CheckResultWhereUniqueInput";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type PlagiarismCheckUpdateInput = {
  checkResult?: CheckResultWhereUniqueInput | null;
  document?: DocumentWhereUniqueInput | null;
  status?: "Option1" | null;
};
