import user from './user.json';
import css from './profile.module.css';

const Profile = (props) => {
  return (
<div className={css.profiler}>
  <div className={css.discription}>
    <img
      src={user.avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.uname}>{user.username}</p>
    <p className={css.utag}>@{user.tag}</p>
    <p className={css.ulocation}>{user.location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.liuser}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{user.stats.followers}</span>
    </li>
    <li className={css.liuser}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{user.stats.views}</span>
    </li>
    <li className={css.liuser}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{user.stats.likes}</span> 
    </li>
  </ul>
</div>
  );
};

export default Profile;