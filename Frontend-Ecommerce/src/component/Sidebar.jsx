import react from  'react';
import { NavLink} from 'react-router-dom';
import './Sidebar.css';

function Sidebar (){
    return (
        <div className='Sidebar'>
            <h2>pages</h2>
            <ul>
                <li><NavLink to = "/Dashboard">Dashboard <i className="fas fa-chart-bar"></i></NavLink></li>
                <li><NavLink to = "/Products">Products  <i className="fas fa-box-open"></i></NavLink></li>
                <li><NavLink to = "/Orders"> Orders      <i className="fas fa-truck-fast"></i></NavLink></li>
                <li><NavLink to = "/Users"> Users        <i className="fas fa-users"></i></NavLink></li>
            </ul>
        </div>
    );
}
export default Sidebar;