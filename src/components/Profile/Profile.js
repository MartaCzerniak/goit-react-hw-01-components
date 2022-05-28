import styles from '../Profile/Profile.module.css';

const Profile = (props) => {
    return (
<div className= {styles.profile} >
        <div classNameName={styles.description}>
            <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar" 
            className={styles.avatar}/>
            <p className={styles.name}> {props.username} </p>
            <p className={styles.tag}>@{props.tag} </p>
            <p className={styles.location}> {props.location} </p>
        </div>

        <ul classNameName={styles.stats}>
            <li>
            <span className= {styles.label} >Followers</span>
            <span className= {styles.quantity} > {props.stats.followers} </span>
            </li>
            <li>
            <span className= {styles.label} >View</span>
            <span className= {styles.quantity} > {props.stats.views} </span>
            </li>
            <li>
            <span className= {styles.label} >Likes</span>
            <span className= {styles.quantity} > {props.stats.likes} </span>
            </li>
        </ul>
        </div>
);
};
export default  Profile;
