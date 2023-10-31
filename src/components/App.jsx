import FriendList from './FriendList.jsx';
import Profile from './Profile.jsx';
import Statistics from './Statistics.jsx';
import TransactionHistory from './TransactionHistory.jsx';
import css from './app.module.css';


export const App = () => {
  return (
    <div className ={css.appdiv}>
<Profile/>
<Statistics/>
<FriendList/>
<TransactionHistory/>

    </div>
  );
};
