export default function Button({ children, props, black, type = 'button' }) {
	const buttonColor = black ? 'btn--black' : 'btn--white'
	return (
		<button className={`btn ${buttonColor}`} type={type} {...props}>
			{children}
			<img
				className="btn__icon"
				src="./src/assets/img/arrow.svg"
				alt="Flecha"
			/>
		</button>
	)
}
