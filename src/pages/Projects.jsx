const Projects = () => (
	<section className="main__projects">
		<h2 className="main__projects__title text-primary">Projects</h2>
		<div className="main__projects__container">
			<div className="main__projects__card__img main-mt-3rem">
				<img src="/src/assets/img/correspondencia/panel.png" alt="Correspondence Project"/>
				<div className="main__projects__card__body">
					<h3>About</h3>
					<p>
						A web application that allows users to create and manage correspondence and audits using digital signatures, statistical graphs and more.
					</p>
					<h3>Technologies</h3>
					<ul>
						<li>php</li>
						<li>Laravel v8</li>
						<li>Jquery</li>
						<li>Bootstrap</li>
						<li>MySql</li>
						<li>Ajax</li>
						<li>Javascript</li>
					</ul>
				</div>
			</div>
			<div className="main__projects__card__img main-mb-3rem">
				<img src="/src/assets/img/laboratory/home.png" alt="Labotatory Project"/>
				<div className="main__projects__card__body">
					<h3>About</h3>
					<p>
						A web application that allows users to create and manage laboratory, statistical graphs, laboratory equipment loans for students and teachers.
					</p>
					<h3>Technologies</h3>
					<ul>
						<li>php</li>
						<li>Laravel v6 API</li>
						<li>Vue JS</li>
						<li>Bootstrap</li>
						<li>MySql</li>
						<li>Ajax</li>
						<li>Javascript</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
);

export default Projects;
