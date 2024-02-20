import './card.css'
import { Button } from "./Button";
import imgB from '../assets/home/bg-pattern-header.svg'

export function Card({ title,background, price }){
	const style = {		
		backgroundColor: background ? background : '#fff',
	 }
	 const className = `card ${background ? ' card_color':''}`
	return (
		<div className={className} style={style}>
			
			<div className='card_main'>
				<div className='card_title'>{title}</div>
				<h1 className='card_price'>{price}</h1>
				<p className='card_user_number'>Up to 5 users for free</p>
			</div>
			<div className='card_provider'>
				<p>Basic document collaboration</p>
				<p>2 GB storage</p>
				<p>Great security and support</p>
			</div>	
				<Button name={'Try for Free'} color={'#5175FF'} backgroundcolor={background? "#fff" :'#5174ff17'}  />
		</div>
	)
}