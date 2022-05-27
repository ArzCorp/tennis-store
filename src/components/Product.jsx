import ButtonArrow from './ButtonArrow'

export default function Product() {
	return (
		<section className="products">
			<div className="products__banner">
				<div className="products__description">
					<h2 className="subtitle">
						Nuestras <br /> <b className="bold">Raquetas</b>
					</h2>
					<p className="products__text">
						Conoce nuestras raquetas y aprende a jugar Tennis cómo un
						profesional.
					</p>
					<div className="products__sliders">
						<span className="dot dot--active"></span>
						<span className="dot"></span>
						<span className="dot"></span>
					</div>
					<div className="products__buttons">
						<ButtonArrow ghost left />
						<ButtonArrow />
					</div>
				</div>
			</div>
		</section>
	)
}
