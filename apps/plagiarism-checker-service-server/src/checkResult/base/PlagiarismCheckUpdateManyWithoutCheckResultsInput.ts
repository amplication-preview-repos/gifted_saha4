/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PlagiarismCheckWhereUniqueInput } from "../../plagiarismCheck/base/PlagiarismCheckWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PlagiarismCheckUpdateManyWithoutCheckResultsInput {
  @Field(() => [PlagiarismCheckWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlagiarismCheckWhereUniqueInput],
  })
  connect?: Array<PlagiarismCheckWhereUniqueInput>;

  @Field(() => [PlagiarismCheckWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlagiarismCheckWhereUniqueInput],
  })
  disconnect?: Array<PlagiarismCheckWhereUniqueInput>;

  @Field(() => [PlagiarismCheckWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlagiarismCheckWhereUniqueInput],
  })
  set?: Array<PlagiarismCheckWhereUniqueInput>;
}

export { PlagiarismCheckUpdateManyWithoutCheckResultsInput as PlagiarismCheckUpdateManyWithoutCheckResultsInput };
