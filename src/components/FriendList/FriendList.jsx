import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem.jsx';
import css from './FriendsList.module.css';
export const FriendList = ({ friends }) => {
  return (
    <ul class={css.friend_list}>
      {friends.map(el => {
        return (
          <FriendListItem
            key={el.id}
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        );
      })}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array,
};
