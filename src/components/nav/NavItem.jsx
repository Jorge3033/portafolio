import { Link } from "react-router-dom";

const NavItem = ({ text, to, handleShowNav ,className }) => {

	return (
		<li className={className}>
			<Link to={to} onClick={handleShowNav}>
				{text}
			</Link>
		</li>
	)
}

export default NavItem
