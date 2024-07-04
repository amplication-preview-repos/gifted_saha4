/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CheckResult } from "../../checkResult/base/CheckResult";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Document } from "../../document/base/Document";
import { EnumPlagiarismCheckStatus } from "./EnumPlagiarismCheckStatus";

@ObjectType()
class PlagiarismCheck {
  @ApiProperty({
    required: false,
    type: () => CheckResult,
  })
  @ValidateNested()
  @Type(() => CheckResult)
  @IsOptional()
  checkResult?: CheckResult | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Document,
  })
  @ValidateNested()
  @Type(() => Document)
  @IsOptional()
  document?: Document | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumPlagiarismCheckStatus,
  })
  @IsEnum(EnumPlagiarismCheckStatus)
  @IsOptional()
  @Field(() => EnumPlagiarismCheckStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { PlagiarismCheck as PlagiarismCheck };