import { Injectable } from "@nestjs/common";
import { PlagiarismCheckResult } from "../copyleaksIntegration/PlagiarismCheckResult";
import { SubmitDocumentInput } from "../copyleaksIntegration/SubmitDocumentInput";

@Injectable()
export class CopyleaksIntegrationService {
  constructor() {}
  async RetrieveCheckResults(args: string): Promise<PlagiarismCheckResult> {
    throw new Error("Not implemented");
  }
  async SubmitDocument(args: SubmitDocumentInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
