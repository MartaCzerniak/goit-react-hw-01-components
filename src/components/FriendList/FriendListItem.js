/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
function FriendListItem(props) {
    return (
      <li css={css`
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        background-color: white;
        width: 350px;
        padding: 10px;
        box-shadow: -1px, 3px, 20px, -11px, rgba(66, 68, 90, 1);
        border-radius: 5px;`}>
        <span css={css`
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: props.isOnline ? green : red;
        margin-right: 10px;`}>{props.isOnline}</span>
        <img css={css` 
        width: 80px;
        height: 80px;`} src={props.avatar} alt="User avatar" width={48} />
        <p css={css`
        font-size: 25px;
         font-weight: 600;
          padding-left: 15px;`}>{props.name}</p>
      </li>
    );
  }
  
  export default FriendListItem;