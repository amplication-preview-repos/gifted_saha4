/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PlagiarismCheckUpdateManyWithoutCheckResultsInput } from "./PlagiarismCheckUpdateManyWithoutCheckResultsInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class CheckResultUpdateInput {
  @ApiProperty({
    required: false,
    type: () => PlagiarismCheckUpdateManyWithoutCheckResultsInput,
  })
  @ValidateNested()
  @Type(() => PlagiarismCheckUpdateManyWithoutCheckResultsInput)
  @IsOptional()
  @Field(() => PlagiarismCheckUpdateManyWithoutCheckResultsInput, {
    nullable: true,
  })
  plagiarismChecks?: PlagiarismCheckUpdateManyWithoutCheckResultsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  plagiarismPercentage?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  report?: InputJsonValue;
}

export { CheckResultUpdateInput as CheckResultUpdateInput };