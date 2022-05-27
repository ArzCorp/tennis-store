import { navbarTabs } from '../assets/data/navbar'

export default function Navbar() {
	const currentPath = '/'
	const isActive = (path) =>
		path === currentPath ? 'navbar__item--active bold' : ''

	return (
		<nav>
			<ul className="navbar">
				{navbarTabs.map((tab) => (
					<li className={`navbar__item ${isActive(tab.link)}`} key={tab.id}>
						{tab.name}
					</li>
				))}
			</ul>
		</nav>
	)
}
