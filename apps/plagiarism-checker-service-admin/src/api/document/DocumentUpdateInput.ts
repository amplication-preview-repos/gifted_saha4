import { PlagiarismCheckUpdateManyWithoutDocumentsInput } from "./PlagiarismCheckUpdateManyWithoutDocumentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentUpdateInput = {
  content?: string | null;
  plagiarismChecks?: PlagiarismCheckUpdateManyWithoutDocumentsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
