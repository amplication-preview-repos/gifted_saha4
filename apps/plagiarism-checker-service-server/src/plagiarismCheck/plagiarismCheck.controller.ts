import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlagiarismCheckService } from "./plagiarismCheck.service";
import { PlagiarismCheckControllerBase } from "./base/plagiarismCheck.controller.base";

@swagger.ApiTags("plagiarismChecks")
@common.Controller("plagiarismChecks")
export class PlagiarismCheckController extends PlagiarismCheckControllerBase {
  constructor(protected readonly service: PlagiarismCheckService) {
    super(service);
  }
}
