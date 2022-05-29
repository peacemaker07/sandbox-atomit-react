import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/atoms/molecules/SearchInput";
import { UserCard } from "./components/atoms/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

export default function App() {
  const user = {
    name: "chino",
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    mail: "test@jsl.co.jp",
    phone: "00-1111-2222",
    company: {
      name: "JSL"
    },
    website: "https://jsl.co.jp"
  };

  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput></SearchInput>
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
