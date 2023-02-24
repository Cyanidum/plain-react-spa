import './scss/data.scss';
import { useEffect, useState } from 'react';
import cx from 'classnames';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useLayoutEffect } from 'react';
import GraphQL from './GraphQL';
import Footer from './Footer';


const Data = () => {
	const [blogs, setBlogs] = useState(null);
	const tl = useRef();
	const component = useRef(null);
	useEffect(() => {
		fetch('http://localhost:8000/blogs')
			.then(res => {
				return res.json()
			})
			.then((data) => {
				console.log(data);
				setBlogs(data);
			})
	}, []);
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		let cxt = gsap.context(() => {
			tl.current = gsap
				.timeline(
					{
						scrollTrigger: {
							trigger: '.data__blogs',
							start: 'top 70%'
						}
					}
				)
				.from('.data__pic-anim', { opacity: 0, y: 5 + 'em' })
				.from('.data__title-anim', { opacity: 0, x: -5 + 'em' })
				.from('.data__subtitle-anim', { opacity: 0, x: 5 + 'em' });
		}, component);
		return () => cxt.revert();
	},[blogs])
	return (
		<section ref={ component } className="data">
			{blogs && <div className={cx("data__body", "border-container")}>
				{blogs.map((blog) => (
					<div className="data__blogs" key={blog.id}>
						<img src={blog.preview} className="data__pic-anim" alt="" />
						<h1 className="data__title-anim">{blog.title}</h1>
						<h2 className="data__subtitle-anim">{blog.subtitle}</h2>
					</div>
				))}
			</div>}
			{blogs && <div><GraphQL /></div>}
			{blogs && <div><Footer /></div>}
		</section>
	);
}

export default Data;