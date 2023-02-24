import { Link } from "react-router-dom";
import './scss/tabs.scss';
import cx from 'classnames';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import Medium from './img/medium.png';
import Alex from './img/alex.png';
import Small from './img/small.png';

const Tabs = () => {

	gsap.registerPlugin(ScrollTrigger);
	const tl = useRef();
	const component = useRef(null);
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			tl.current = gsap
				.timeline(
					{
						scrollTrigger: {
							trigger: '.tabs__body',
							start: 'top center'
						}
					}
				)
				.from('.lable-style , .subtitle-style', { scale: 1.4, opacity: 0, duration: 1 })
				.from('.tabs__text-anim', { y: -4 + 'em', opacity: 0, duration: 0.5, stagger: 0.35 });
			tl.current = gsap.from('.tabs__button', {
				scrollTrigger: {
					trigger: '.tabs__button',
					start: 'top 80%'
				},
				opacity: 0,
				duration: 1,
				y: -5 + 'em',
				ease: 'bounce'
			});
			tl.current = gsap
				.timeline(
					{
						scrollTrigger: {
							trigger: '.tabs__collage',
							start: 'top center'
						}
					}
				)
				.from('.tabs__medium-cards', { opacity: 0, y: -5 + 'em', duration: 0.5 })
				.from('.tabs__alex-cards', { opacity: 0, y: 5 + 'em', duration: 0.5 })
				.from('.tabs__small-cards', { opacity: 0, y: -5 + 'em', duration: 0.5 });
			tl.current = gsap.from('.tabs__anim-stagger', {
				scrollTrigger: {
					trigger: '.tabs__anim-stagger',
					start: 'top 90%'
				},
				opacity: 0, duration: 0.5, stagger: 0.15
			})

		},component)
		return () => ctx.revert();
	},[])
	return (
		<section ref={ component } className="tabs">
			<div className="tabs__body">
				<span className="lable-style">Live Cards</span>
				<h1 className="title-style">
					<span className="tabs__text-anim"> Never</span>
					<span className="tabs__text-anim"> switch</span>
					<span className="tabs__text-anim"> tabs</span>
					<span className="tabs__text-anim"> again</span></h1>
				<span className="subtitle-style">Get a live view of your customer data, from anywhere, in any format – without building complicated apps, syncing data between systems, or manually updating data.</span>
				<div className="tabs__button">
					<Link to='/documents'>Read our docs</Link>
				</div>
					
				
			</div>
			<div className={cx("tabs__collage", "border-container")}>
				<div className="tabs__medium-cards">
					<img src={Medium} alt="" />
				</div>
				<div className="tabs__alex-cards">
					<img src={Alex} alt="" />
				</div>
				<div className="tabs__small-cards">
					<img src={Small} alt="" />
				</div>
			</div>
			<h5 className="tabs__to-be-continued">
				<span className="tabs__anim-stagger">a</span>
				<span className="tabs__anim-stagger">n</span>
				<span className="tabs__anim-stagger">d</span>
				<span className="tabs__anim-stagger"> s</span>
				<span className="tabs__anim-stagger">o</span>
				<span className="tabs__anim-stagger"> m</span>
				<span className="tabs__anim-stagger">u</span>
				<span className="tabs__anim-stagger">c</span>
				<span className="tabs__anim-stagger">h</span>
				<span className="tabs__anim-stagger"> m</span>
				<span className="tabs__anim-stagger">o</span>
				<span className="tabs__anim-stagger">r</span>
				<span className="tabs__anim-stagger">e</span>
				<span className="tabs__anim-stagger">.</span>
				<span className="tabs__anim-stagger">.</span>
				<span className="tabs__anim-stagger">.</span>
			</h5>
		</section>
	);
}

export default Tabs;