import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
export const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home page
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/products'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
