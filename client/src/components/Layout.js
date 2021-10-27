
import Routes from "../Routes";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout(props) {
    return (
        <div>
            <div style={{display: "flex"}}>
                <Sidebar history={props.history}/>
                <div style={{maxWidth: '800px'}}>
                    <Navbar/>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
export default Layout;