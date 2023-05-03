import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendList } from "./friendList/FriendList";
import {TransactionHistory} from "./transactionHistory/TransactionHistory"
import user from '../data/user.json';
import dataStats from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { PageStyled } from "../styled/AppStyled";


export const App = () => {
  return (
    <PageStyled>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={dataStats} />
      <FriendList friends={friends} />
      <TransactionHistory dataBase={transactions} />
    </PageStyled>
  );
};
