import { PlagiarismCheckCreateNestedManyWithoutDocumentsInput } from "./PlagiarismCheckCreateNestedManyWithoutDocumentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentCreateInput = {
  content?: string | null;
  plagiarismChecks?: PlagiarismCheckCreateNestedManyWithoutDocumentsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
