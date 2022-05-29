import styled from "styled-components";
import { SearchInput } from "../atoms/molecules/SearchInput";
import { UserCard } from "../atoms/organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    key: val,
    name: `chino-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    mail: "test@jsl.co.jp",
    phone: "00-1111-2222",
    company: {
      name: "JSL"
    },
    website: "https://jsl.co.jp"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={users.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
