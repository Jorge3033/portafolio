const Contact = () => (
	<section id="contact" className="main__contact__container">
		<h3>Contact Me</h3>
		<ul className="main__contact__list">
			<li className="main__contact__list__item">
				<img
					src="/src/assets/icon/email_icon.svg"
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
					src="/src/assets/icon/github_icon.svg"
					alt="GitHub icon"
				/>
				<a 
					href={ import.meta.env.VITE_GITHUB_CONTACT }
					target="_blank"
				>GitHub</a>
			</li>
			<li className="main__contact__list__item">
				<img
					src="/src/assets/icon/linkedin_icon.svg"
					alt="LinkedIn icon"
				/>
				LinkedIn:
			</li>
		</ul>
	</section>
)
export default Contact
