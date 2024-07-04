import { Module } from "@nestjs/common";
import { PlagiarismCheckModuleBase } from "./base/plagiarismCheck.module.base";
import { PlagiarismCheckService } from "./plagiarismCheck.service";
import { PlagiarismCheckController } from "./plagiarismCheck.controller";
import { PlagiarismCheckResolver } from "./plagiarismCheck.resolver";

@Module({
  imports: [PlagiarismCheckModuleBase],
  controllers: [PlagiarismCheckController],
  providers: [PlagiarismCheckService, PlagiarismCheckResolver],
  exports: [PlagiarismCheckService],
})
export class PlagiarismCheckModule {}
