import './header.css' 
import officelite from '../assets/shared/logo.svg'
import illustration from '../assets/home/illustration-charts.svg'
import { Button } from './Button'
import { Card } from './card'
import { Children } from 'react'
export function Header({NotImg ,BtnNOTExist, children}){
	return (
      <div className="header-container">
        <div className='officelite-img  '>
          <img src={officelite} alt="" />
        </div>
        <div className="info">
          <div className={`illustration-img ${NotImg ? 'delete_img': ''}`}>
            <img src={illustration} alt="" />
          </div>
          <div className="text">
            
			{Children.map(children, child =>{
				return  child
			})}
			{!BtnNOTExist ? <Button Href={'/Sign_Up'} name={"Get Started"} /> :''}
          </div>
        </div>
      </div>
  );
}