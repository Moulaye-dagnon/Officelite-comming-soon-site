import { Button } from './Button'
import './form.css'
export function FormComponent(){

	return (
		<form className='Form' action="" method="post">
			<div>
				<input type="text" placeholder='Name' />
			</div>
			<div>
				<input type="text" placeholder='Name' />
			</div>
			<div className='select_wrapper'>
				<select name="" id="">
				<option  value="">Basic Pack <span>Free</span></option>
				<option value="">Pro Pack <span>$9.99</span></option>
				<option value="">Ultimate Pack <span>$19.99</span></option>
				</select>
			</div>
			<div>
				<input type="text" placeholder='Phone number' />
			</div>
			<div>
				<input type="text" placeholder='Comany' />
			</div>
			<Button name={'Get on the list'}/>
		</form>
	)
}