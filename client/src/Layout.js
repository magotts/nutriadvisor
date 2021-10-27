
import Routes from "./Routes";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

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