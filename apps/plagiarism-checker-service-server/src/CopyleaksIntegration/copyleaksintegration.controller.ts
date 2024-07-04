import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CopyleaksIntegrationService } from "./copyleaksintegration.service";
import { SubmitDocumentInput } from "../copyleaksIntegration/SubmitDocumentInput";
import { PlagiarismCheckResult } from "../copyleaksIntegration/PlagiarismCheckResult";

@swagger.ApiTags("copyleaksIntegrations")
@common.Controller("copyleaksIntegrations")
export class CopyleaksIntegrationController {
  constructor(protected readonly service: CopyleaksIntegrationService) {}

  @common.Get("/retrieve-check-results/:checkId")
  @swagger.ApiOkResponse({
    type: PlagiarismCheckResult
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrieveCheckResults(
    @common.Body()
    body: SubmitDocumentInput
  ): Promise<PlagiarismCheckResult> {
        return this.service.RetrieveCheckResults(body);
      }

  @common.Post("/submit-document")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubmitDocument(
    @common.Body()
    body: SubmitDocumentInput
  ): Promise<string> {
        return this.service.SubmitDocument(body);
      }
}
