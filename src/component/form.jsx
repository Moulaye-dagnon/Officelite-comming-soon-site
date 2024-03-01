import { useState } from 'react'
import { Button } from './Button'
import './form.css'
import arrow_down from '../assets/sign-up/icon-arrow-down.svg'
import arrow_up from '../assets/sign-up/icon-arrow-up.svg'

export function FormComponent(){
	const [Option, setOption] = useState(['Basic Pack ','free'])
	const [Options, setOptions] = useState(false)
	

	return (
		<form className='Form' action="" method="post">
			<div>
				<input type="text" placeholder='Name' />
			</div>
			<div>
				<input type="text" placeholder='Name' />
			</div>
			<div className='select_wrapper'>
				<div className="ArrowImg">
				{Options ? 
					 	(<img src={arrow_up} alt="" />)
					 :(<img src={arrow_down} alt="" />)
					}
				</div>
				<div className='select'>
					
					<label htmlFor="select" onClick={()=>setOptions(c=>!c)}>{Option[0]} <span>{Option[1]}</span></label>
					<input type="text"  value={Option} />
				</div>
				{Options && <ul className='select-option'>
					<li className={Option[1]== 'free' ? 'CheckValues': ''}
					onClick={()=>{
						setOption([`Basic Pack `, 'free']) 
						}
					}
					>Basic Pack  <span> Free</span> </li>
					<li className={Option[1]== '$9.99' ? 'CheckValues': ''}
					 onClick={()=>{
						setOption(['Pro Pack','$9.99'])
						}
					}
					>Pro Pack <span>$9.99</span></li>
					<li className={Option[1]== '$19.99' ? 'CheckValues': ''}
					onClick={()=>{
						setOption(['Ultimate Pack','$19.99'])
						}
					}
					>Ultimate Pack <span>$19.99</span></li>
				</ul>}
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