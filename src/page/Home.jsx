import './Home.css';
import bg_pattern_img from '../assets/home/bg-pattern-footer.svg'
import { Header } from "../component/header";
import { Card } from '../component/card';
import { Timer } from '../component/Timer';
import { Button } from '../component/Button';

export function Home(){
	
	return (
		<div className="container">
			<div className='bg-pattern'>
				<img src={bg_pattern_img} alt="" className='bg-pattern-img' />
			</div>
			<main>
			<Header>
			<h1>A simple solution to complex tasks is coming soon</h1>
            <p>
              Say goodbye to inefficient juggling of multiple apps, teams, and
              projects. Officelite is the new collaboration platform built with
              an intuitive interface to improve productivity.
            </p> 
			</Header>
			<div className="cardContainer">
				<Card title={"basic"} price={"Free"} />
				<Card title={"Pro"} price={"$9.99"} background={"#5175FF"} />
				<Card title={"Ultimate"} price={"$19.99"}  />
			</div>
			<div className='footer'>
			 <Timer/>
			 <Button Href={'/Sign_Up'} name={'Get Started'}/>
			</div>
			</main>
		</div>
	)
}