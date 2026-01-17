
import styles from './Profile.module.css'

interface ProfileProps {
    name: string;
    imageUrl: string;
    isNotifications?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ name, imageUrl, isNotifications }) => {
  return (
    <a href='/' className={styles.profile}>
        <p className={styles.profileText}>Holla, <b className={styles.profileName}>{name}</b></p>
        <div className={styles.profilePic}>
            <img className={styles.profileImage} src={imageUrl} alt="ProfileImage" />
            {isNotifications && <div className={styles.profileNotifications}></div>}
        </div>
    </a>
  )
}

export default Profile
