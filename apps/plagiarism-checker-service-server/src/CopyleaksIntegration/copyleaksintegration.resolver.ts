import * as graphql from "@nestjs/graphql";
import { PlagiarismCheckResult } from "../copyleaksIntegration/PlagiarismCheckResult";
import { SubmitDocumentInput } from "../copyleaksIntegration/SubmitDocumentInput";
import { CopyleaksIntegrationService } from "./copyleaksintegration.service";

export class CopyleaksIntegrationResolver {
  constructor(protected readonly service: CopyleaksIntegrationService) {}

  @graphql.Query(() => PlagiarismCheckResult)
  async RetrieveCheckResults(
    @graphql.Args()
    args: string
  ): Promise<PlagiarismCheckResult> {
    return this.service.RetrieveCheckResults(args);
  }

  @graphql.Mutation(() => String)
  async SubmitDocument(
    @graphql.Args()
    args: SubmitDocumentInput
  ): Promise<string> {
    return this.service.SubmitDocument(args);
  }
}
