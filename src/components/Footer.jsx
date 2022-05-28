import { navbarTabs } from '../assets/data/navbar'
import { networks } from '../assets/data/socialMedia'

export default function Footer() {
	return (
		<footer className="footer">
			<div>
				<ul className="footer__navbar">
					{navbarTabs.map((tab) => (
						<li className="bold" key={tab.id}>
							{tab.name}
						</li>
					))}
				</ul>
				<ul className="footer__networks">
					{networks.map((network) => (
						<li className="networks__item" key={network.id}>
							<img className="img" src={network.img} />
						</li>
					))}
				</ul>
			</div>
			<figure className="footer__logo">
				<img
					className="img"
					src="./src/assets/img/logo.svg"
					alt="Pelota de tenis"
				/>
			</figure>
		</footer>
	)
}
