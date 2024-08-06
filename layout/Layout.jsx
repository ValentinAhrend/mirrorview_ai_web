import { Outlet, useNavigate } from 'react-router-dom'
import LOGO from "../data/logo192.png";

function Layout(props) {
    const nav = useNavigate();
    return <div class={"layout"}>
        <div class={"topbar"}>

            <div class={"title"} onClick={()=>{
                nav("/")
            }}>
                <img src={LOGO}></img>
                <p>{"TrafficInspector"}</p>
            </div>

            <div class={"tools"}>
                <div class={"tool"} onClick={()=>{
                    nav("/features");
                }}>{"Features"}</div>
                <div class={"tool"} onClick={()=>{
                    nav("/performance")
                }}>{"Performance"}</div>
                <div class={"tool"} onClick={()=>{
                    nav("/product")
                }}>{"Produkt"}</div>
                <div onClick={()=>{
                    nav("/contact")
                }} class={"tool"}>{"Kontakt"}</div>
            </div>
        </div>
        <Outlet></Outlet>
    </div>
}
export default Layout;