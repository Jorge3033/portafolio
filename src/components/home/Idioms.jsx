import usIcon from '../../assets/icon/us_icon.png'

const Idioms = () => (
	<section className="main__idioms__container">
		<h3>Languages</h3>
		<ul className="main__idioms__list">
			<li className="main__idioms__list__item">
				<img
					src={ usIcon }
					alt="English icon"
				/>
				<span>English Basic</span>
			</li>
			<li className="main__idioms__list__item">
				<a href='https://emojitool.com/flag-for-mexico'>🇲🇽</a>
				<span>Spanish Native</span>
			</li>
		</ul>
	</section>
)
export default Idioms
