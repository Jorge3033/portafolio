import emailIcon from "../assets/icon/email_icon.svg"
import gitHubIcon from "../assets/icon/gitHub_icon.svg"
import linkedInIcon from "../assets/icon/linkedin_icon.svg"

const Contact = () => (
	<section id="contact" className="main__contact__container">
		<h3>Contact Me</h3>
		<ul className="main__contact__list">
			<li className="main__contact__list__item">
				<img
					src={ emailIcon }
					alt="Email icon"
				/>
				<a
					href={ `mailto:${ import.meta.env.VITE_MAIL_CONTACT }` }
				>Correo</a>
			</li>
			<li
				className="main__contact__list__item"
			>
				<img
					src={ gitHubIcon }
					alt="GitHub icon"
				/>
				<a
					href={ import.meta.env.VITE_GITHUB_CONTACT }
					target="_blank"
				>GitHub</a>
			</li>
			<li className="main__contact__list__item">
				<img
					src={ linkedInIcon }
					alt="LinkedIn icon"
				/>
				LinkedIn:
			</li>
		</ul>
	</section>
)
export default Contact
