import '../scss/journal.scss'
import cx from 'classnames'
import pr1 from '../img/journal-preview-1.jpeg'
import pr2 from '../img/journal-preview-2.jpeg'
import pr3 from '../img/journal-preview-3.jpeg'
import pr4 from '../img/journal-preview-4.jpeg'
import pr5 from '../img/journal-preview-5.jpeg'
import pr6 from '../img/journal-preview-6.jpeg'


const Journal = () => {
	return (
		<section className="journal">
			<div className={cx("journal__container", "border-container")}>
				<a href='#' className="journal__article">
					<div className="journal__preview">
						<img src={pr1} alt="" />
					</div>
					<div className="journal__info">
						<div className="journal__tags">
							<span className="journal__tags-item">Lorem</span>
							<span className="journal__tags-item">Lorem ipsum</span>
							<span className="journal__tags-item">Lorem ipsum dolor </span>
							<span className="journal__tags-item">Lorem</span>
						</div>
					</div>
					<span className="journal__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
				</a>
				<a href='#' className="journal__article">
					<div className="journal__preview">
						<img src={pr2} alt="" />
					</div>
					<div className="journal__info">
						<div className="journal__tags">
							<span className="journal__tags-item">Lorem</span>
							<span className="journal__tags-item">Lorem ipsum</span>
						</div>
					</div>
					<span className="journal__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
				</a>
				<a href='#' className="journal__article">
					<div className="journal__preview">
						<img src={pr3} alt="" />
					</div>
					<div className="journal__info">
						<div className="journal__tags">
							<span className="journal__tags-item">Lorem</span>
							<span className="journal__tags-item">Lorem ipsum</span>
							<span className="journal__tags-item">Lorem ipsum dolor </span>
						</div>
					</div>
					<span className="journal__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
				</a>
				<a href='#' className="journal__article">
					<div className="journal__preview">
						<img src={pr4} alt="" />
					</div>
					<div className="journal__info">
						<div className="journal__tags">
							<span className="journal__tags-item">Lorem</span>
							<span className="journal__tags-item">Lorem ipsum</span>
							<span className="journal__tags-item">Lorem</span>
						</div>
					</div>
					<span className="journal__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
				</a>
				<a href='#' className="journal__article">
					<div className="journal__preview">
						<img src={pr5} alt="" />
					</div>
					<div className="journal__info">
						<div className="journal__tags">
							<span className="journal__tags-item">Lorem</span>
							<span className="journal__tags-item">Lorem ipsum</span>
							<span className="journal__tags-item">Lorem ipsum dolor </span>
							<span className="journal__tags-item">Lorem</span>
						</div>
					</div>
					<span className="journal__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
				</a>
				<a href='#' className="journal__article">
					<div className="journal__preview">
						<img src={pr6} alt="" />
					</div>
					<div className="journal__info">
						<div className="journal__tags">
							<span className="journal__tags-item">Lorem</span>
							<span className="journal__tags-item">Lorem ipsum dolor </span>
							<span className="journal__tags-item">Lorem</span>
						</div>
					</div>
					<span className="journal__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
				</a>
			</div>
		</section>
	);
}

export default Journal;