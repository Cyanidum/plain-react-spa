import { Link } from "react-router-dom";
import cx from "classnames";
import app from "./img/support-app.png";
import './scss/graph.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';



const GraphQL = () => {
	gsap.registerPlugin(ScrollTrigger);
	const tl = useRef();
	const component = useRef(null);
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			tl.current = gsap
				.timeline(
					{
						scrollTrigger: {
							trigger: '.graph__container',
							start: 'top 40%'
						}
					}
				)
				.from('.graph__picture', { opacity: 0, duration: .8, scale: 1.4 })
				.from('.lable-style', { opacity: 0, duration: .5 })
				.from('.title-style', { opacity: 0, y: -10 + 'em', duration: .5 })
				.from('.graph__anim-stagger', { opacity: 0, x: -3 + 'em', stagger: .15 })
				.from('.graph__button', { opacity: 0, x: -3 + 'em', duration: 1 });
			tl.current = gsap
				.timeline(
					{
						scrollTrigger: {
							trigger: '.graph__container',
							start: 'top 40%'
						}
					}
				)
				.from('.graph__tips-workflow', { opacity: 0, x: -10 + 'em', duration: 0.6, delay: 1})
				.from('.graph__tips-ui',{opacity: 0, x: 10 + 'em', duration: 0.6})
				.from('.graph__tips-service',{opacity: 0, x: -10 + 'em', duration: 0.6})
		}, component)
		return () => ctx.revert();
	}, []);
		
	return (
		<section ref={ component } className="graph">
			<div className={cx("graph__container", "border-container")}>
				<div className="graph__info">
					<span className="lable-style">GraphQL APIs</span>
					<h1 className="title-style">Build with zero limitations</h1>
					<span className="subtitle-style">
						<span className='graph__anim-stagger'>Every</span>
						<span className='graph__anim-stagger'> company</span>
						<span className='graph__anim-stagger'> is</span>
						<span className='graph__anim-stagger'> unique,</span>
						<span className='graph__anim-stagger'> and</span>
						<span className='graph__anim-stagger'> so</span>
						<span className='graph__anim-stagger'> is</span>
						<span className='graph__anim-stagger'> how</span>
						<span className='graph__anim-stagger'> you</span>
						<span className='graph__anim-stagger'> support</span>
						<span className='graph__anim-stagger'> your</span>
						<span className='graph__anim-stagger'> customers.</span>
						<span className='graph__anim-stagger'> Plain</span>
						<span className='graph__anim-stagger'> is</span>
						<span className='graph__anim-stagger'> built</span>
						<span className='graph__anim-stagger'> API-first,</span>
						<span className='graph__anim-stagger'> so</span>
						<span className='graph__anim-stagger'> you</span>
						<span className='graph__anim-stagger'> can</span>
						<span className='graph__anim-stagger'> work</span>
						<span className='graph__anim-stagger'> with</span>
						<span className='graph__anim-stagger'> it</span>
						<span className='graph__anim-stagger'> however</span>
						<span className='graph__anim-stagger'> you</span>
						<span className='graph__anim-stagger'> need –</span>
						<span className='graph__anim-stagger'> zero restrictions.</span></span>
					<div className="graph__button">
						<Link to="/documents" className="graph__btn">Read our docs</Link>
					</div>
				</div>
				<div className="graph__tips">
					<div className="graph__picture">
						<img src={app} alt="" />
					</div>
					<div className="graph__tips-info">
						<div className="graph__tips-workflow">
							<h2>Build powerful workflows</h2>
							<span>Integrate your products and Plain for better self service, automated issue resolution and follow-up</span>
						</div>
						<div className="graph__tips-ui">
							<h2>Bring your own UI</h2>
							<span>Build support tooling in your own systems, on top of our powerful primitives.</span>
						</div>
						<div className="graph__tips-service">
							<h2>Deliver proactive customer service</h2>
							<span>Flag important events to your support team so they can reach out before customers do.</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default GraphQL;