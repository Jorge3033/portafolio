import htmlIcon from "./../../assets/icon/html_icon.svg"
import cssIcon from "./../../assets/icon/css3_icon.svg"
import javascriptIcon from "./../../assets/icon/javascript_icon.svg"
import phpIcon from "./../../assets/icon/php_icon.svg"
import mysqlIcon from "./../../assets/icon/mysql_icon.svg"
import laravelIcon from "./../../assets/icon/laravel_icon.svg"
import vueIcon from "./../../assets/icon/vue_icon.svg"
import reactIcon from "./../../assets/icon/react_icon.svg"
import bootstrapIcon from "./../../assets/icon/bootstrap_icon.svg"
import gitIcon from "./../../assets/icon/git_icon.svg"
import gitHubIcon from "./../../assets/icon/gitHub_icon.svg"
import linuxIcon from "./../../assets/icon/linux_icon.svg"
import scrumIcon from "./../../assets/icon/scrum_icon.svg"
import javaIcon from "./../../assets/icon/java_icon.svg"

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
					src={ javascriptIcon }
					alt="Javascript icon"
				/>
				JavaScript
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src={ phpIcon }
					alt="PHP icon"
				/>
				PHP
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src={ mysqlIcon }
					alt="MySQL icon"
				/>
				MySQL
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src={ laravelIcon }
					alt="laravel icon"
				/>
				Laravel
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src={ vueIcon }
					alt="Vue icon"
				/>
				VueJS
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src={ reactIcon }
					alt="ReactJS icon"
				/>
				ReactJS
			</li>
				<li className="main__list__tecnologies__item">
				<img 
					src={ bootstrapIcon }
					alt="Bootstrap icon"
				/>
				Bootstrap
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src={ gitIcon }
					alt="Git icon"
				/>
				Git
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src={ gitHubIcon }
					alt="GitHub icon"
				/>
				GitHub
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src={ linuxIcon }
					alt="Linux icon"
				/>
				Linux
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src={ scrumIcon }
					alt="Scrum icon"
				/>
				Scrum
			</li>
			<li className="main__list__tecnologies__item">
				<img 
					src={ javaIcon }
					alt="java icon"
				/>
				Java
			</li>
		</ul>
	</section>
)
export default Tecnologies;
