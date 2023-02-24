import { Link } from 'react-router-dom';
import './scss/header.scss';
import './fonts/fonts.scss';
import logo from './img/logo.png';
import cx from 'classnames';
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Popup from './Popup';
import Form from './Form';



const Header = () => {
	const [popupActive, setPopupActive] = useState(false);
	const tl = useRef();
	const component = useRef(null);
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			tl.current = gsap
				.timeline()
				.from('.one', { opacity: 0, duration: 0.5 })
				.from('.two', { opacity: 0, duration: 0.5 })
		}, component);
		return () => ctx.revert();
	},[]);
	
	return (
		<section className="header">
			<div ref={ component } className={cx("header__main","border-container")}>
				<div className={cx("header__logo", "one")}>
					<Link to='/'>
						<img src={ logo } alt="" />
					</Link>
				</div>
				<div className={cx("header__nav", "two")}>
					<ul className="header__links">
						<Link to='/documents'>Docs</Link>
						<Link to='/pricing'>Pricing</Link>
						<Link to='/jobs'>Jobs</Link>
						<Link to='/journal'>Journal</Link>
					</ul>
					<button className='header__sign' onClick={() => setPopupActive(true)}>Sign in</button>
					<Popup active={popupActive} setActive={setPopupActive}>
						<Form />
					</Popup>
				</div>
			</div>
		</section>
	);
}
export default Header;