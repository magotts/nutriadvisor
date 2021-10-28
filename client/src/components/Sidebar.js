import { SidebarData } from "../components/SidebarData";
import "../styles/sidebar.css";


function Sidebar () {

  return (
      <div className="sidebar">
        <ul className="sidebarList">
         {SidebarData.map((val, key) => {
           
           return (
           <li className="row" id={window.location.pathname === val.link ? "active" : ""} key={key} onClick={() => {window.location.pathname = val.link}}>
             {""}
             <div id="icon">{val.icon}</div>{""}
             <div id="title">{val.title}</div>
             </li>

           )
         })}
         </ul>
      </div>

  )
}

export default Sidebar;