import { Link } from 'react-router-dom'
import Contact  from './../Contact'
const Footer = () => {
	return (
		<footer>
			<div className="footer__container">
				<div className="footer__menu">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/projects">Projects</Link></li>
					</ul>
				</div>
				<Contact />
			</div>
		</footer>
	)
}

export default Footer
