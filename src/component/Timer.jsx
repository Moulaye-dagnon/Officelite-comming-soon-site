import { useEffect, useState } from 'react'
import './Timer.css'
export function Timer({Color}){
	const [days , setdays] = useState(29)
	const [hours , setHours] = useState(10)
	const [minutes , setMinutes] = useState(3)
	const [seconds , setSeconds] = useState(11)

		var timer;
		useEffect(()=>{
			const intervalId = setInterval(()=>{
				setSeconds(c =>c - 1);
				if(seconds === 0){
					setMinutes(c=> c - 1)
					setSeconds(59)
				}
				if(minutes == 0){
					setHours(c => c-1)
					setMinutes(59)
				}
				if(hours == 0){
					setdays(c => c -1)
					setHours(23)
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
		<h1 style={{color: Color ?'#333950':'#fff'}} >Comming <span style={{color: '#5175FF'}}> { datef } </span> </h1>
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
