import PropTypes from 'prop-types';
import css from './FirendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendListItem}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img
        className={css.friendListAvatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friendListName}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
