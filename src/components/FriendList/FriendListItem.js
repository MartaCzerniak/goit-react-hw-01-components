function FriendListItem(props) {
    return (
      <li>
        <span>{props.isOnline}</span>
        <img src={props.avatar} alt="User avatar" width={48} />
        <p>{props.name}</p>
      </li>
    );
  }
  
  export default FriendListItem;