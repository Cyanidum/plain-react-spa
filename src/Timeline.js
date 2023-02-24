import './scss/timeline.scss';
import timel from './img/timeline.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
const Timeline = () => {

	gsap.registerPlugin(ScrollTrigger);
	const tl = useRef();
	const component = useRef(null);
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
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
				.from('.timeline__title-anim', { y: -4 + 'em', opacity: 0, duration: 0.5, stagger: 0.35 });
			tl.current = gsap.from('.timeline__img', {
				scrollTrigger: {
					trigger: '.timeline__img',
					start: 'top 90%'
				},
				opacity: 0,
				scale: 1.4,
				duration: 1
			})
		}, component);
		return () => ctx.revert();
	},[])
	

	return (
		<section ref={ component } className="timeline">
			<div className="timeline__body">
				<span className="lable-style">Timeline</span>
				<h1 className="title-style">
					<span className='timeline__title-anim'> Have</span>
					<span className='timeline__title-anim'> one</span>
					<span className='timeline__title-anim'> conversation,</span>
					<span className='timeline__title-anim'> not</span>
					<span className='timeline__title-anim'> countless</span>
					<span className='timeline__title-anim'> tickets</span></h1>
				<span className="subtitle-style">View your customers' product interactions and messages in a single timeline. No more copying and pasting ticket numbers, user IDs and emails between systems.</span>
				<div className="timeline__img">
					<img src={timel} alt="" />
				</div>
			</div>
		</section>
	);
}

export default Timeline;