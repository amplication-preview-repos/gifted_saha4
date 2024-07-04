import { PlagiarismCheck as TPlagiarismCheck } from "../api/plagiarismCheck/PlagiarismCheck";

export const PLAGIARISMCHECK_TITLE_FIELD = "id";

export const PlagiarismCheckTitle = (record: TPlagiarismCheck): string => {
  return record.id?.toString() || String(record.id);
};
