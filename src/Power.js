import { Link } from "react-router-dom";
import './scss/power.scss';
import './fonts/fonts.scss';
import cx from 'classnames';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
import Report from './img/report.png';
import Email from './img/email.png';
import Chat from './img/chat.png';
import Early from './img/early-access.png';
import Bug from './img/bug.png';
import Demo from './img/demo.png';
import Feedback from './img/feedback.png';
import Documentation from './img/documentation.png';
import Contact from './img/contact.png';


const Power = () => {
	gsap.registerPlugin(ScrollTrigger);
	const tl = useRef();
	const component = useRef(null);
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			
// images-animations
			
			tl.current = gsap
				.timeline(
					{
						scrollTrigger: {
							trigger: '.power__contact',
							start: 'top center'
						}
					}
				)
				.from('.power__contact', { opacity: 0, y: 5 + 'em', duration: 0.5 })
				.from('.power__docs', { opacity: 0, y: 5 + 'em', duration: 0.5 })
				.from('.power__feedback', { opacity: 0, y: 5 + 'em', duration: 0.5 })
				.from('.power__demo', { opacity: 0, y: 5 + 'em', duration: 0.5 });
			tl.current = gsap
				.timeline(
					{
						scrollTrigger: {
							trigger: '.power__bug',
							start: 'top 90%'
						}
					}
				)
				.from('.power__bug', { opacity: 0, y: -5 + 'em', duration: 0.5 })
				.from('.power__email', { opacity: 0, y: 5 + 'em', duration: 0.5 })
				.from('.power__early', { opacity: 0, y: 5 + 'em', duration: 0.5 })
				.from('.power__chat', { opacity: 0, y: 5 + 'em', duration: 0.5 });
			tl.current = gsap.from('.power__report', {
				scrollTrigger: {
					trigger: '.title-style',
					start: 'top center'
				},
				opacity: 0,
				x: -5 + 'em',
				duration: 0.5 
			})
			tl.current = gsap.from('.power__feedback-2', {
				scrollTrigger: {
					trigger: '.title-style',
					start: 'top center'
				},
				opacity: 0,
				x: 5 + 'em',
				duration: 0.5 
			})
			
// text-animations

			tl.current = gsap
				.timeline(
					{
						scrollTrigger: {
							trigger: '.lable-style',
							start: 'top center'
						}
					}
				)
				.from('.lable-style , .subtitle-style', { scale: 1.4, opacity: 0, duration: 1 })
				.from('.power__text-anim', { y: -4 + 'em', opacity: 0, duration: 0.3, stagger: 0.35 });
			tl.current = gsap.from('.power__button', {
				scrollTrigger: {
					trigger: '.power__button',
					start: 'top 80%'
				},
				y: -5 + 'em', opacity: 0, duration: 1, ease: "bounce"
			});
		}, component);
		return () => ctx.revert();
	}, [])

	return (
		<section ref={ component } className="power">
			<div className="power__container">
				<div className="power__body">
					<span className="lable-style">Structured Messaging</span>
					<h1 className="title-style">
						<span className="power__text-anim">Power</span>
						<span className="power__text-anim"> any</span>
						<span className="power__text-anim"> interaction</span> <br></br>
						<span className="power__text-anim"> in</span>
						<span className="power__text-anim"> your</span>
						<span className="power__text-anim"> product</span></h1>
					<span className="subtitle-style">Go beyond chat and email. Manage early access requests, build bug reporting forms, and collect product feedback. Any interaction, anywhere in your product, all in your own UI.</span>
					<div className="power__button">
						<Link to='/documents'>Read our docs</Link>
					</div>
					<div className={cx("power__report", "power-img")}>
						<img src={Report} alt="" />
					</div>	
					<div className={cx("power__email", "power-img")}>
						<img src={Email} alt="" />
					</div>	
					<div className={cx("power__chat", "power-img")}>
						<img src={Chat} alt="" />
					</div>	
					<div className={cx("power__early", "power-img")}>
						<img src={Early} alt="" />
					</div>	
					<div className={cx("power__bug", "power-img")}>
						<img src={Bug} alt="" />
					</div>
					<div className={cx("power__feedback-2", "power-img")}>
						<img src={Feedback} alt="" />
					</div>
				</div>
				
			</div>
			<div className={cx("power__contact", "power-img")}>
				<img src={Contact} alt="" />
			</div>
			<div className={cx("power__docs", "power-img")}>
				<img src={Documentation} alt="" />
			</div>
			<div className={cx("power__feedback", "power-img")}>
				<img src={Feedback} alt="" />
			</div>
			<div className={cx("power__demo", "power-img")}>
				<img src={Demo} alt="" />
			</div>
		</section>
		
	);
}

export default Power;