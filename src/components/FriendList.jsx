import friends from './friends.json';
import css from './frendlist.module.css';

const FriendList = ({friend}) => {
return (
        <div className={css.friendlistbox}>
    <ul className={css.friendlist}>
    {friends.map(frend =>{
        return (
           
<li className={css.item} key={frend.id}>
  <span className="status">{frend.isOnline ? <span className={css.onLine}>Online</span> : <span className={css.offLine}>Offline</span>}</span>
  <img className={css.avatar} src={frend.avatar} alt="User avatar" width="48" />
  <p className={css.name}>{frend.name}</p>
</li>
        ) 
        })}
        </ul>
        </div>
);
};

export default FriendList;