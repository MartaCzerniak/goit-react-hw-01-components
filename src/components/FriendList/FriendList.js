import styles from '../FriendList/FriendList.module.css';
import FriendListItem from './FriendListItem';

function FriendList(props) {
    const friends = props.friends;
    const view = friends.map(friend => (
        <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ));
    return (
        <ul>{view}</ul>
    );
};
export default FriendList;
