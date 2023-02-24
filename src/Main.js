// import { Link } from 'react-router-dom';
import './scss/main.scss';
import './fonts/fonts.scss';
import cx from 'classnames';
import stedi from './img/stedi.png';
import sst from './img/sst.png';
import standarts from './img/standarts.png';
import bB from './img/backed-by.png';
import connect from './img/connect.png';
import banner from './img/main-banner.png';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useRef, useLayoutEffect, useState } from 'react';
import Popup from './Popup';
import Form from './Form';


const Main = () => {
	gsap.registerPlugin(ScrollTrigger);
	const tl = useRef();
	const component = useRef(null);
	useLayoutEffect(() => {
		
		let ctx = gsap.context(() => {
			tl.current = gsap.from('.main__index-and-connect', { scale: 1.4, opacity: 0, duration: 2, delay: 0.2 });
			tl.current = gsap.from('.first-line', { opacity: 0, duration: 2, delay: 0.4, stagger: 0.35 });
			tl.current = gsap.from('.main__subtitle', { scale: 1.4, opacity: 0, duration: 2, delay: 1 });
			tl.current = gsap.from('.main__tips-container', { x: -20 + 'em', opacity: 0, duration: 0.5, stagger: 0.35, delay: 1 });
			tl.current = gsap.from('.main__button-container', { y: -3 + 'em', opacity: 0, duration: 2, delay: 1, ease: 'bounce' });
			tl.current = gsap.from('.main__banner', {
				scrollTrigger: {
					trigger: '.main__banner',
					start: "top center"
				},
				opacity: 0,
				y: -5 + 'em'
			});
			tl.current = gsap
				.timeline(
					{
						scrollTrigger: {
							trigger: '.main__sponsors-stedi',
							start: 'top 90%'
						}
					}
				)
				.from('.main__sponsors-stedi', {
					opacity: 0,
					x: -5 + 'em',
					duration: 0.8,
					ease: 'bounce'
				})
				.from('.main__sponsors-sst', {
					opacity: 0,
					scale: 1.3,
					duration: 0.8,
					ease: 'elastic'
				})
				.from('.main__sponsors-standarts', {
					opacity: 0,
					x :5 + 'em',
					duration: 0.8,
					ease: 'elastic'
				})
				.from('.main__sponsors-b8, .main__sponsors-connect', {
					opacity: 0,
					y :5 + 'em',
					duration: 0.8,
					ease: 'bounce'
				})
				
		}, component);
		return () => ctx.revert();
	}, []);
	

	const [popupActive, setPopupActive] = useState(false);


	return (
		<section className="main">
			<div className={cx("main__content","border-container")} ref={component}>
				<div className="main__index-and-connect">
					<span className="main__announcing">Announcing our $6m Seed fundraise co-led by Index and <br></br>Connect</span>
				</div>
				<h1 className={cx("main__title", "title-style")}>
					<span className='first-line'> Customer</span>
					<span className='first-line'> support<br></br></span>
					<span className='first-line'> for</span>
					<span className='first-line'> modern</span>
					<span className='first-line'> tools</span></h1>
				<span className={cx("main__subtitle", "subtitle-style")}>Provide support that’s as polished as your product with Plain, <br></br>the customer support tool for the companies defining the next decade.</span>
				<div className="main__button-container">
					<button className="main__button" onClick={()=> setPopupActive(true)}>Join the open beta now</button>
				</div>
				<Popup active={popupActive} setActive={setPopupActive}>
					<Form />
				</Popup>
				<div className="main__tips">
					<div className="main__tips-container">
						<span className='main__set-up'>Set up in less than 5 mins</span>
					</div>
						
					<div className="main__tips-container">
						<span className='main__integration'>Built for seamless integration</span>
					</div>
					<div className="main__tips-container">
						<span className='main__priced'>Transparently priced</span>
					</div>
				</div>
				<div className="main__banner">
					<img src={banner} alt="" />
				</div>
				<span className="main__sponsors-title">Join the modern teams already using Plain.</span>
				<div className="main__sponsors">
					<div className="main__sponsors-stedi">
						<img src={stedi} alt="" />
					</div>
					<div className="main__sponsors-sst">
						<img src={sst} alt="" />
					</div>
					<div className="main__sponsors-standarts">
						<img src={standarts} alt="" />
					</div>
					<div className="main__sponsors-b8">
						<img src={bB} alt="" />
					</div>
					<div className="main__sponsors-connect">
						<img src={connect} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Main;