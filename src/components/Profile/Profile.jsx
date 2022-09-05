/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
const Profile = (props) => {
    return (
<div css={css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: -1px, 3px, 20px, -11px, rgba(66, 68, 90, 1);
    width: 300;
`}>
        <div>
            <img
            css={css`
                width: 100px;
                border-radius: 50%;
                margin-top: 30px;
            `}
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar" />
            <p css={css`
                text-align: center;
                font-size: 18px;
                font-weight: 800;
                margin-bottom: 10px;`}> 
            {props.username} </p>
            <p css={css`
                text-align: center;
                font-size: 15px;
                margin-bottom: 10px;
                color: grey;`}>
                @{props.tag} </p>
            <p css={css`
                text-align: center;
                font-size: 15px;
                margin-bottom: 30px;
                color: grey;`}> 
            {props.location} </p>
        </div>

        <ul css={css`
                list-style: none;
                display: flex;
                padding: 0;
                border-top: 1;
                border-style: solid;
                border-color: rgb(227, 227, 227);
                width: 100%;
                margin: 0;
                background-color: rgb(247, 246, 242);`}>
            <li css={css`
                display: flex;
                flex-direction: column;
                flex-grow:1;
                padding-top: 15px;
                padding-botton: 15px;`}>
            <span css={css`
                text-align: center;
                font-size: 13px`}>
            Followers</span>
            <span css={css`
                text-align: center;
                font-size: 16px
                font-weight: 800`}> 
            {props.stats.followers}</span>
            </li>
            <li css={css` 
                border-top: 0;
                border-bottom: 0;               
                border-right: 1px;
                border-left: 1px;
                border-style: solid;
                border-color: rgb(227, 227, 227);
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                padding-top: 15px;
                padding-bottom: 15px;`}>
            <span css={css`
                text-align: center;
                font-size: 13px`}>
            Views</span>
            <span css={css`
                text-align: center;
                font-size: 16px
                font-weight: 800`}> 
            {props.stats.views}</span>
            </li>
            <li css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                flex-grow: 1;
                padding-top: 15px;
                padding-bottom: 15px;`}>
            <span css={css`
                text-align: center;
                font-size: 13px`}>
            Likes</span>
            <span css={css`
                text-align: center;
                font-size: 16px
                font-weight: 800`}> 
            {props.stats.likes}</span>
            </li>
        </ul>
    </div>
);
};
export default  Profile;
