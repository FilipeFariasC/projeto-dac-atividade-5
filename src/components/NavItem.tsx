import { Link } from "react-router-dom";

interface NavItemProps{
  label: string;
  link: string;
}

export default function NavItem({label, link}: NavItemProps){
  return (
    <li className="nav-item">
      <Link
      className="nav-link"
      to={link} 
      >
        {label}
      </Link>
    </li>
  )
}