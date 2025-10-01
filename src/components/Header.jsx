import { Link, NavLink } from 'react-router-dom';
import '../App.css'; // Ensure styles are applied
import Logo from '../assets/Logo.svg';


const navLinkClasses = ({ isActive }) =>
  `text-gray-700 hover:text-black transition ${isActive ? 'font-semibold text-black' : ''}`;

export default function Header() {
  const today = new Date();

  return (
    <header className="bg-white">
      <div className="container mx-auto px-6 py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Left: Logo + Name */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img src={Logo} alt="Gui Oba Logo" className="h-10 w-10" />
          <span className="relative inline-grid text-2xl font-bold leading-none text-gray-800">
            Gui&nbsp;Oba
          </span>
        </Link>

        {/* Middle: Navigation */}
        <nav className="flex items-center justify-center gap-10 text-base">
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/gallery" className={navLinkClasses}>
            Gallery
          </NavLink>
          <NavLink to="/writing" className={navLinkClasses}>
            Writing
          </NavLink>
        </nav>

        {/* Right: Date */}
        <div className="text-center md:text-right text-gray-600">
          <span>
            {today.getFullYear()} {today.getMonth() + 1} {today.getDate()}
          </span>
        </div>
      </div>
    </header>
  );
}
