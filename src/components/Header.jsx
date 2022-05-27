import Navbar from './Navbar'

export default function Header() {
	return (
		<header className="header">
			<figure className="header__logo">
				<img src="./src/assets/img/logo.svg" alt="Pelota de tenis" />
			</figure>
			<Navbar />
		</header>
	)
}
