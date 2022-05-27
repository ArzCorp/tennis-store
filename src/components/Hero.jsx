import Button from './Button'

export default function Hero({ children }) {
	return (
		<section className="hero">
			<div className="hero__container">
				<h1 className="hero__title">
					Las mejores raquetas para <br /> jugar
					<b className="hero__title--bold"> Tennis</b>
				</h1>
				<Button>ACERCA DE NOSOTROS</Button>
			</div>
			<div className="hero__children">{children}</div>
		</section>
	)
}
