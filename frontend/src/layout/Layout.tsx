import Header from "../components/Header";
import { Outlet } from "react-router";

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout;