import user from '../utils/user.json';
import { Profile } from './Profile/Profile';
import data from '../utils/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from '../utils/friends.json';
import { FriendList } from './FriendList/FriendList.jsx';
import transactions from '../utils/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
