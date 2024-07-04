import * as graphql from "@nestjs/graphql";
import { PlagiarismCheckResolverBase } from "./base/plagiarismCheck.resolver.base";
import { PlagiarismCheck } from "./base/PlagiarismCheck";
import { PlagiarismCheckService } from "./plagiarismCheck.service";

@graphql.Resolver(() => PlagiarismCheck)
export class PlagiarismCheckResolver extends PlagiarismCheckResolverBase {
  constructor(protected readonly service: PlagiarismCheckService) {
    super(service);
  }
}
