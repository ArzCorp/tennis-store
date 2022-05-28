export default function Product({ number }) {
	return (
		<article className="product">
			<span className="product__number">{number}</span>
			<figure className="product__img">
				<img src="./src/assets/img/racket.png" alt="Raqueta" />
			</figure>
		</article>
	)
}
