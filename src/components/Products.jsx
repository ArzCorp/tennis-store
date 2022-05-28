import { products } from '../assets/data/products'

import ButtonArrow from './ButtonArrow'
import Product from './Product'

export default function Products() {
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
			<div className="products__list">
				{products.map((product) => (
					<Product number={product} />
				))}
			</div>
		</section>
	)
}
