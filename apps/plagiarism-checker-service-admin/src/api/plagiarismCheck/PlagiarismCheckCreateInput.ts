import { CheckResultWhereUniqueInput } from "../checkResult/CheckResultWhereUniqueInput";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type PlagiarismCheckCreateInput = {
  checkResult?: CheckResultWhereUniqueInput | null;
  document?: DocumentWhereUniqueInput | null;
  status?: "Option1" | null;
};
