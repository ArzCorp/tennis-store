export default function ButtonArrow({ ghost, left }) {
	const buttonColor = ghost ? 'btn__arrow--ghost' : 'btn__arrow--default'
	const arrowDirection = left ? 'btn__arrow--left' : ''

	return (
		<button className={`btn__arrow ${buttonColor}`}>
			<img
				className={`btn__arrow_img ${arrowDirection}`}
				src="./src/assets/img/play.png"
				alt="Flecha"
			/>
		</button>
	)
}
