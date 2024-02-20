export function Button({name, backgroundcolor, opacity, color , Href}){
	const style ={
		color: color ? color :" #fff",
		backgroundColor: backgroundcolor ? backgroundcolor :  '#5175FF',
		opacity: opacity ? opacity : '',
		
		
		
	}
	return (
		<>
		{Href ? 
		(
			<a 	
			style={style}
			href={Href}>{name}</a>
		)
		: (
			<button 
				style={style}
				type="button" >{name}
			</button> 
			)
			}
		</>
	)
}