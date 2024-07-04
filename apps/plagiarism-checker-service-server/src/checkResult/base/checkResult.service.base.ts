/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  CheckResult as PrismaCheckResult,
  PlagiarismCheck as PrismaPlagiarismCheck,
} from "@prisma/client";

export class CheckResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CheckResultCountArgs, "select">
  ): Promise<number> {
    return this.prisma.checkResult.count(args);
  }

  async checkResults(
    args: Prisma.CheckResultFindManyArgs
  ): Promise<PrismaCheckResult[]> {
    return this.prisma.checkResult.findMany(args);
  }
  async checkResult(
    args: Prisma.CheckResultFindUniqueArgs
  ): Promise<PrismaCheckResult | null> {
    return this.prisma.checkResult.findUnique(args);
  }
  async createCheckResult(
    args: Prisma.CheckResultCreateArgs
  ): Promise<PrismaCheckResult> {
    return this.prisma.checkResult.create(args);
  }
  async updateCheckResult(
    args: Prisma.CheckResultUpdateArgs
  ): Promise<PrismaCheckResult> {
    return this.prisma.checkResult.update(args);
  }
  async deleteCheckResult(
    args: Prisma.CheckResultDeleteArgs
  ): Promise<PrismaCheckResult> {
    return this.prisma.checkResult.delete(args);
  }

  async findPlagiarismChecks(
    parentId: string,
    args: Prisma.PlagiarismCheckFindManyArgs
  ): Promise<PrismaPlagiarismCheck[]> {
    return this.prisma.checkResult
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .plagiarismChecks(args);
  }
}