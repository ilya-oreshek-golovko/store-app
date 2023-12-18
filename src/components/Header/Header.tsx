import { Link } from 'react-router-dom'

import { routes } from '../../utils/routes';

import LOGO from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg";

export default function Header() {
  return (
    <div>
      <div>
        <Link to={routes.HOME}> 
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <div>
        <div>
          <img src={AVATAR} alt="avatar-image" />
          {/* <div style={{backgroundImage: `url(${AVATAR})`}}/> */}
          <p>Guest</p>
        </div>

        <form action="submit">
          <div>
            <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}/>
            </svg>
          </div>
          <div>
            <input type="search" name='search' placeholder='Search for anything...' autoComplete='off' />
          </div>
        </form>

        <div>
          <Link to={routes.HOME}>
            <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}/>
            </svg>
          </Link>

          <Link to={routes.CART}>
            <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
