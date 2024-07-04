import { Module } from "@nestjs/common";
import { CopyleaksIntegrationService } from "./copyleaksintegration.service";
import { CopyleaksIntegrationController } from "./copyleaksintegration.controller";
import { CopyleaksIntegrationResolver } from "./copyleaksintegration.resolver";

@Module({
  controllers: [CopyleaksIntegrationController],
  providers: [CopyleaksIntegrationService, CopyleaksIntegrationResolver],
  exports: [CopyleaksIntegrationService],
})
export class CopyleaksIntegrationModule {}
