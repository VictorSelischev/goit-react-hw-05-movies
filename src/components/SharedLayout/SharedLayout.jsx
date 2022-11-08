import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header>
              <nav>
                  <NavLink to={} />
                  <NavLink />
        </nav>
      </header>
      <Outlet />
    </div>
  );
};