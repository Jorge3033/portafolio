import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'
import navIcon from './../../assets/icon/menu_icon.svg'

const Nav = ({showMenu}) => {

	const [ handeNav, setHandleNav ] = useState( showMenu )

	const handleShowNav = () => {
		setHandleNav(!handeNav)
	}

	return (
		<nav className="nav">
			<div className="nav__container">
				<h1 className="nav__logo">
					<Link to="/">JorgeSr Dev</Link>
				</h1>

				<img
					className="nav__menu-icon"
					src= { navIcon }
					onClick={handleShowNav}
				/>

				<ul className={ `nav__menu ${ handeNav ? 'nav__handle_menu_checked' : null }` }>
					<NavItem
						to="/"
						text="Home"
						className="nav__item"
						handleShowNav={handleShowNav}
					/>
					<NavItem
						to="/projects"
						text="Projects"
						className="nav__item"
						handleShowNav={handleShowNav}
					/>
					<NavItem
						to="/about"
						text="About"
						className="nav__item"
						handleShowNav={handleShowNav}
					/>
				</ul>
			</div>
		</nav>
	)
}

Nav.defaultProps = {
	showMenu: false
}

export default Nav
