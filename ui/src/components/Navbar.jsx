import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center  px-6 py-4 text-xl">
      <div className="text-4xl font-bold">blOG</div>
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-blue-300 font-semibold' : 'hover:text-blue-200'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? 'text-blue-300 font-semibold' : 'hover:text-blue-200'
          }
        >
          Blogs
        </NavLink>
      </div>
    </nav>
  );
};

