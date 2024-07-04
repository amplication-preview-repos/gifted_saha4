/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CheckResultService } from "../checkResult.service";
import { CheckResultCreateInput } from "./CheckResultCreateInput";
import { CheckResult } from "./CheckResult";
import { CheckResultFindManyArgs } from "./CheckResultFindManyArgs";
import { CheckResultWhereUniqueInput } from "./CheckResultWhereUniqueInput";
import { CheckResultUpdateInput } from "./CheckResultUpdateInput";
import { PlagiarismCheckFindManyArgs } from "../../plagiarismCheck/base/PlagiarismCheckFindManyArgs";
import { PlagiarismCheck } from "../../plagiarismCheck/base/PlagiarismCheck";
import { PlagiarismCheckWhereUniqueInput } from "../../plagiarismCheck/base/PlagiarismCheckWhereUniqueInput";

export class CheckResultControllerBase {
  constructor(protected readonly service: CheckResultService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CheckResult })
  async createCheckResult(
    @common.Body() data: CheckResultCreateInput
  ): Promise<CheckResult> {
    return await this.service.createCheckResult({
      data: data,
      select: {
        createdAt: true,
        id: true,
        plagiarismPercentage: true,
        report: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CheckResult] })
  @ApiNestedQuery(CheckResultFindManyArgs)
  async checkResults(@common.Req() request: Request): Promise<CheckResult[]> {
    const args = plainToClass(CheckResultFindManyArgs, request.query);
    return this.service.checkResults({
      ...args,
      select: {
        createdAt: true,
        id: true,
        plagiarismPercentage: true,
        report: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CheckResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async checkResult(
    @common.Param() params: CheckResultWhereUniqueInput
  ): Promise<CheckResult | null> {
    const result = await this.service.checkResult({
      where: params,
      select: {
        createdAt: true,
        id: true,
        plagiarismPercentage: true,
        report: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CheckResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCheckResult(
    @common.Param() params: CheckResultWhereUniqueInput,
    @common.Body() data: CheckResultUpdateInput
  ): Promise<CheckResult | null> {
    try {
      return await this.service.updateCheckResult({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          plagiarismPercentage: true,
          report: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CheckResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCheckResult(
    @common.Param() params: CheckResultWhereUniqueInput
  ): Promise<CheckResult | null> {
    try {
      return await this.service.deleteCheckResult({
        where: params,
        select: {
          createdAt: true,
          id: true,
          plagiarismPercentage: true,
          report: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/plagiarismChecks")
  @ApiNestedQuery(PlagiarismCheckFindManyArgs)
  async findPlagiarismChecks(
    @common.Req() request: Request,
    @common.Param() params: CheckResultWhereUniqueInput
  ): Promise<PlagiarismCheck[]> {
    const query = plainToClass(PlagiarismCheckFindManyArgs, request.query);
    const results = await this.service.findPlagiarismChecks(params.id, {
      ...query,
      select: {
        checkResult: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        document: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/plagiarismChecks")
  async connectPlagiarismChecks(
    @common.Param() params: CheckResultWhereUniqueInput,
    @common.Body() body: PlagiarismCheckWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      plagiarismChecks: {
        connect: body,
      },
    };
    await this.service.updateCheckResult({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/plagiarismChecks")
  async updatePlagiarismChecks(
    @common.Param() params: CheckResultWhereUniqueInput,
    @common.Body() body: PlagiarismCheckWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      plagiarismChecks: {
        set: body,
      },
    };
    await this.service.updateCheckResult({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/plagiarismChecks")
  async disconnectPlagiarismChecks(
    @common.Param() params: CheckResultWhereUniqueInput,
    @common.Body() body: PlagiarismCheckWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      plagiarismChecks: {
        disconnect: body,
      },
    };
    await this.service.updateCheckResult({
      where: params,
      data,
      select: { id: true },
    });
  }
}