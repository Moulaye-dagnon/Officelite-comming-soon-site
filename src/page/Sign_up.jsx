import './Sign_Up.css'
import { Timer } from "../component/Timer";
import { Header } from "../component/header";
import { FormComponent } from '../component/form';
import FooterImg from '../assets/home/bg-pattern-header.svg'
export function SignUp(){
	return( 
		<div className="SignUpContainer">
			<section className="sectionOne">
			<Header NotImg={true} BtnNOTExist={true}>
					<h1>Work smarter. Save time.</h1>
					<p>
						Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.
					</p>
			</Header>
			<Timer Color={'Blue'}/>
			<FormComponent/>
			</section>
			<section className="sectionTwo">
				{/* <div className='ImgFooter'>
					<img src={FooterImg} alt="" />
				</div> */}
			</section>

		</div>
	)
}