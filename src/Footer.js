import cx from 'classnames';
import { Link } from 'react-router-dom';
import './scss/footer.scss';
import logo from './img/footer-logo.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

const Footer = () => {
	gsap.registerPlugin(ScrollTrigger);
	const tl = useRef();
	const component = useRef(null);
	useLayoutEffect(() => {
		let mm = gsap.matchMedia(component)
		
		let ctx = gsap.context(() => {
			mm.add("(min-width: 1000px)", () => {
				tl.current = gsap
					.timeline(
						{
							scrollTrigger: {
								trigger: '.footer__content',
								start: 'top 90%'
							}
						}
					)
					.from('.footer__logo',{opacity: 0, scale: 1.4, duration: 0.6})
					.from('.footer__anchors',{opacity: 0, x: -5 + 'em', duration: 0.6})
					.from('.footer__reading',{opacity: 0, x: 5 + 'em', duration: 0.6})
					.from('.footer__copyright',{opacity: 0, y: 5 + 'em', duration: 0.6})
			})
		}, component)
		return () => ctx.revert()
	}, [])
	return (
		<section ref = {component} className="footer">
			<div className={cx("footer__content", "border-container")}>
				<div className="footer__logo">
					<img src={logo} alt="" />
				</div>
				<div className="footer__body">
					<div className="footer__anchors">
						<span>Interesting reading</span>
						<Link to="/documents">Docs</Link>
						<Link to="/pricing">Pricing</Link>
						<Link to="/jobs">Jobs</Link>
						<Link to="/journal">Journal</Link>
						<Link to="/press">Press</Link>
					</div>
					<div className="footer__reading">
						<span>Bedtime reading</span>
						<Link to="/policy">Privacy Policy</Link>
						<Link to="/service">Terms of Service</Link>
						<Link to="/website">Website Terms</Link>
						<Link to="/data-processing">Data Processing Addendum</Link>
						<Link to="/disclosure-policy">Vulnerability Disclosure Policy</Link>
					</div>
					<div className="footer__copyright">
						<span className='footer__copyright-email'>@plainsupport</span>
						<span>Plain and the Plain logo are trademarks and tradenames of Not Just Tickets Limited and may not be used or reproduced without consent.</span>
						<span>© 2022 Not Just Tickets Limited</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Footer;