import { Document } from "../document/Document";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  documents?: Array<Document>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
