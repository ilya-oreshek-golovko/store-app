import { Link } from "react-router-dom";
import LOGO from "../../images/logo.svg";
import { routes } from '../../utils/routes';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>

      <div className={styles.logo}>
        <Link to={routes.HOME}> 
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <div className={styles.rights}>
        Developed by
        <a href="#">Ilya Golovko</a>
      </div>

      <div className={styles.socials}>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
      </div>

    </div>
  )
}
