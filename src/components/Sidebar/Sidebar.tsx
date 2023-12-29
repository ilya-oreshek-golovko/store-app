import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { ICategory } from '../../types/types';

export default function Sidebar() {

  const {list} = useAppSelector(({categories}) => categories);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        categories
      </h1>

      <nav className={styles.categories}>
        <ul>
          {
            list.map((category : ICategory) => (
              <li key={category.id}>
                <NavLink to={`/`} className={styles.category}>{category.name}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>

      <div className={styles.footer}>
        <a href="#" target='_blank'>Help</a>
        <a href="#" target='_blank' className=''>Terms & Conditions</a>
      </div>
    </div>
  )
}
