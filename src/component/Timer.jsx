import { useEffect, useState } from 'react'
import './Timer.css'
export function Timer({Color}){
	const [days , setdays] = useState(0)
	const [hours , setHours] = useState(0)
	const [minutes , setMinutes] = useState(0)
	const [seconds , setSeconds] = useState(0)

		var timer;
		useEffect(()=>{
			const intervalId = setInterval(()=>{
				setSeconds(c =>c + 1);
				if(seconds === 59){
					setMinutes(c=> c + 1)
					setSeconds(0)
				}
				if(minutes == 59){
					setHours(c => c+1)
					setMinutes(0)
				}
				if(hours == 23){
					setdays(c => c +1)
					setHours(0)
				}
			},1000)
			return ()=> clearInterval(intervalId);
		},[seconds])
		
	
	let date = new Date()
	let datef = new Intl.DateTimeFormat('fr', {
		dateStyle: 'medium'
	}).format(date)	
	return (
		<div className='TimerContainer'> 
		<h1 >Comming <span style={{color: Color ? '#5175FF':''}}> { datef } </span> </h1>
		<div className={`compteur ${Color ? 'BackgroundColorBlue' :''}`} >
			<h1>{days}
				<span>days</span>
			</h1>
			<h1>{hours}
				<span>hours</span>
			</h1>
			<h1>{minutes}
				<span>minute</span>
			</h1>
			<h1>{seconds}
				<span>second</span>
			</h1>
		</div>
		</div>
	)

	

	
  
}
