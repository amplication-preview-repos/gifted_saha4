import { SortOrder } from "../../util/SortOrder";

export type CheckResultOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  plagiarismPercentage?: SortOrder;
  report?: SortOrder;
  updatedAt?: SortOrder;
};
