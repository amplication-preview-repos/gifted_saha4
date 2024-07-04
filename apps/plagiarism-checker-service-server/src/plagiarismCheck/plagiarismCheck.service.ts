import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlagiarismCheckServiceBase } from "./base/plagiarismCheck.service.base";

@Injectable()
export class PlagiarismCheckService extends PlagiarismCheckServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
