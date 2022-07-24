import { NavLink } from "react-router-dom";

function Header() {
  const style = {
    fontWeight: "bold",
    color: "hotpink",
  };
  return (
    <header>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={style}>
            MAIN
          </NavLink>
        </li>
        <li>
          <NavLink to="/youtube" activeStyle={style}>
            YOUTUBE
          </NavLink>
        </li>
        <li>
          <NavLink to="/flickr" activeStyle={style}>
            FLICKR
          </NavLink>
        </li>
        <li>
          <NavLink to="/members" activeStyle={style}>
            MEMBERS
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
