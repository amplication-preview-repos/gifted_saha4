import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CHECKRESULT_TITLE_FIELD } from "./CheckResultTitle";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";

export const CheckResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="plagiarismPercentage" source="plagiarismPercentage" />
        <TextField label="report" source="report" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PlagiarismCheck"
          target="checkResultId"
          label="PlagiarismChecks"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CheckResult"
              source="checkresult.id"
              reference="CheckResult"
            >
              <TextField source={CHECKRESULT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Document"
              source="document.id"
              reference="Document"
            >
              <TextField source={DOCUMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
