import { Link } from 'react-router-dom'

import { routes } from '../../utils/routes';

import LOGO from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg";

import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles["header-logo"]}>
        <Link to={routes.HOME}> 
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <div className={styles["header-info"]}>
        <div className={styles["info-user"]} >
          <img src={AVATAR} alt="avatar-image" className={styles["user-avatar"]} />
          {/* <div style={{backgroundImage: `url(${AVATAR})`}}/> */}
          <p className={styles["user-name"]}>Guest</p>
        </div>

        <form action="submit" className={styles["search-box"]}>
          <div className={styles["search-icon-box"]}>
            <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}/>
            </svg>
          </div>
          <div className={styles["search-input-box"]}>
            <input type="search" name='search' placeholder='Search for anything...' autoComplete='off' />
          </div>
        </form>

        <div className={styles["info-icons"]}>
          <Link to={routes.HOME}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}/>
            </svg>
          </Link>

          <Link to={routes.CART}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
