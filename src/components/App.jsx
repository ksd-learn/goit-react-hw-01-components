import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendList } from "./friendList/FriendList";
import {TransactionHistory} from "./transactionHistory/TransactionHistory"
import user from '../user.json';
import dataStats from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { GlobalStyle } from "./GlobalStyle"
import { PageStyled } from "./AppStyled";

export const App = () => {
  return (
    <PageStyled>
      <GlobalStyle />
      <Profile item={user} />
      <Statistics data={dataStats} />
      <FriendList friends={friends} />
      <TransactionHistory dataBase={transactions} />
    </PageStyled>
  );
};
