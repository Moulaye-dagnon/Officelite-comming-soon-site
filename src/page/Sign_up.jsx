import './Sign_Up.css'
import { Timer } from "../component/Timer";
import { Header } from "../component/header";
import { FormComponent } from '../component/form';
import bg_pattern_img from '../assets/home/bg-pattern-footer.svg'
export function SignUp(){
	return( 
		<div className="SignUpContainer">
			<div className='bg-pattern'>
				<img src={bg_pattern_img} alt="" className='bg-pattern-img' />
			</div>
			<main>
			<Header NotImg={true} BtnNOTExist={true}>
					<h1>Work smarter. Save time.</h1>
					<p>
						Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.
					</p>
			</Header>
			<Timer Color={'Blue'}/>
			<FormComponent/>
			</main>			
		</div>
	)
}