import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Layout from './../layout/Layout'
import AboutMe from './../pages/AboutMe'
import Home from './../pages/Home'

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="projects" element={<Projects />} />
				<Route path="about" element={<AboutMe />} />
				<Route path="contact" element={<Contact />} />
			</Route>
		</Routes>
  </BrowserRouter>
)

export default Router
