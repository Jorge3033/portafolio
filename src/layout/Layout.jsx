import {Outlet} from "react-router-dom";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";

const Layout = () => (
	<>
		<header>
			<Nav />
		</header>
		<main className="main">
			<Outlet />
		</main>
		<Footer />
	</>
)

export default Layout;
