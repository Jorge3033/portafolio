import htmlIcon from "./../../assets/icon/html_icon.svg"
import cssIcon from "./../../assets/icon/css3_icon.svg"

const Tecnologies = () => (
	<section className="main__tecnologies__container">
		<h3>Tecnologies/Frameworks</h3>
		<ul className="main__list__tecnologies">
			<li className="main__list__tecnologies__item">
				<img 
					src={ htmlIcon } 
					alt="HTML icon" 
				/>
					HTML5
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src={ cssIcon }
					alt="CSS icon"
				/>
				CSS3
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src="/src/assets/icon/javascript_icon.svg" 
					alt="Javascript icon"
				/>
				JavaScript
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src="/src/assets/icon/php_icon.svg" 
					alt="PHP icon"
				/>
				PHP
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src="/src/assets/icon/mysql_icon.svg" 
					alt="MySQL icon"
				/>
				MySQL
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src="/src/assets/icon/laravel_icon.svg" 
					alt="laravel icon"
				/>
				Laravel
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src="/src/assets/icon/vue_icon.svg" 
					alt="Vue icon"
				/>
				VueJS
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src="/src/assets/icon/react_icon.svg" 
					alt="NodeJS icon"
				/>
				ReactJS
			</li>
				<li className="main__list__tecnologies__item">
				<img 
					src="/src/assets/icon/bootstrap_icon.svg" 
					alt="Bootstrap icon"
				/>
				Bootstrap
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src="/src/assets/icon/git_icon.svg" 
					alt="Git icon"
				/>
				Git
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src="/src/assets/icon/gitHub_icon.svg" 
					alt="GitHub icon"
				/>
				GitHub
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src="/src/assets/icon/linux_icon.svg" 
					alt="GitHub icon"
				/>
				Linux
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src="/src/assets/icon/scrum_icon.svg" 
					alt="GitHub icon"
				/>
				Scrum
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src="/src/assets/icon/java_icon.svg" 
					alt="Git icon"
				/>
				Java Basic
			</li>
		</ul>
	</section>
)
export default Tecnologies;
