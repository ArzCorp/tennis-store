import Button from './Button'

export default function History() {
	return (
		<section className="history">
			<p className="history__tab medium">TENNIS</p>
			<div className="history__description">
				<h2 className="history__title subtitle">
					Raquetas.Accesorios. <br /> Pelotas.
				</h2>
				<p className="history__text">
					Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.
				</p>
			</div>
			<div className="history__btn">
				<Button black>HISTORIA</Button>
			</div>
		</section>
	)
}
