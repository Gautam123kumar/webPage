import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <h2>
          Loren <br /> lpsum
        </h2>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <span className="sidebatListItemText">About</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText">Services</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText">Cuisine</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText">Gallery</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText">Contact</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText">Book</span>
          </li>
        </ul>
        <button className="sidebarButton">Cart</button>
      </div>
    </div>
  );
};

export default Sidebar;
