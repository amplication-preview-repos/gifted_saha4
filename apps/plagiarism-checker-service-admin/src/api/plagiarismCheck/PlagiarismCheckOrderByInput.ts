import { SortOrder } from "../../util/SortOrder";

export type PlagiarismCheckOrderByInput = {
  checkResultId?: SortOrder;
  createdAt?: SortOrder;
  documentId?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
