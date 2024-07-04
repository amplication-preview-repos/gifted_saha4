import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PlagiarismCheckList } from "./plagiarismCheck/PlagiarismCheckList";
import { PlagiarismCheckCreate } from "./plagiarismCheck/PlagiarismCheckCreate";
import { PlagiarismCheckEdit } from "./plagiarismCheck/PlagiarismCheckEdit";
import { PlagiarismCheckShow } from "./plagiarismCheck/PlagiarismCheckShow";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { CheckResultList } from "./checkResult/CheckResultList";
import { CheckResultCreate } from "./checkResult/CheckResultCreate";
import { CheckResultEdit } from "./checkResult/CheckResultEdit";
import { CheckResultShow } from "./checkResult/CheckResultShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PlagiarismCheckerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PlagiarismCheck"
          list={PlagiarismCheckList}
          edit={PlagiarismCheckEdit}
          create={PlagiarismCheckCreate}
          show={PlagiarismCheckShow}
        />
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="CheckResult"
          list={CheckResultList}
          edit={CheckResultEdit}
          create={CheckResultCreate}
          show={CheckResultShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
