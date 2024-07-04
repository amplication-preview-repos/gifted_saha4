import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CheckResultTitle } from "../checkResult/CheckResultTitle";
import { DocumentTitle } from "../document/DocumentTitle";

export const PlagiarismCheckEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="checkResult.id"
          reference="CheckResult"
          label="CheckResult"
        >
          <SelectInput optionText={CheckResultTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="document.id"
          reference="Document"
          label="Document"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
