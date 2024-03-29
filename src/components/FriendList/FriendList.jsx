/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FriendListItem from './FriendListItem';

function FriendList(props) {
  const friends = props.friends;
  const view = friends.map(friend => (
    <FriendListItem
      key={friend.id}
      isOnline={friend.isOnline}
      avatar={friend.avatar}
      name={friend.name}
    />
  ));
  return (
    <ul
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
      `}
    >
      {view}
    </ul>
  );
}
export default FriendList;
