import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { PlagiarismCheckTitle } from "../plagiarismCheck/PlagiarismCheckTitle";

export const CheckResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="plagiarismChecks"
          reference="PlagiarismCheck"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PlagiarismCheckTitle} />
        </ReferenceArrayInput>
        <NumberInput
          label="plagiarismPercentage"
          source="plagiarismPercentage"
        />
        <div />
      </SimpleForm>
    </Edit>
  );
};
