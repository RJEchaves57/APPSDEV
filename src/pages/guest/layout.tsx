import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "../../components/common/header";

export default function Layout() {
    const location = useLocation();

    return (
        <>
            <Header />

            <main key={location.pathname} className="page">
                <Outlet />
            </main>

            <Footer />
        </>
    );
}