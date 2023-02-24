import cx from 'classnames';
import '../scss/jobs.scss';

const Jobs = () => {
	return (
		<section className="jobs">
			<div className={cx("jobs__container", "border-container")}>
				<div className="jobs__vacancy-card">
					<div className="jobs__main">
						<span className="jobs__role">Frontend Developer</span>
						<div className="jobs__info">
							<div className="jobs__type">
								<span>Type:</span>
								<span className='orange'>Office/Remote</span>
							</div>
							<div className="jobs__type">
								<span>Category:</span>
								<span className='orange'>Software Development</span>
							</div>
							<div className="jobs__type">
								<span>Project:</span>
								<span className='orange'>Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit amet consectetur</span>
							</div>
						</div>
						<div className="jobs__location">
							<span>London, UK</span>
						</div>
					</div>
					<div className="jobs__button">
						<a href="#" className="jobs__btn">refer</a>
					</div>
				</div>
				<div className="jobs__vacancy-card">
					<div className="jobs__main">
						<span className="jobs__role">Frontend Developer</span>
						<div className="jobs__info">
							<div className="jobs__type">
								<span>Type:</span>
								<span className='orange'>Office/Remote</span>
							</div>
							<div className="jobs__type">
								<span>Category:</span>
								<span className='orange'>Software Development</span>
							</div>
							<div className="jobs__type">
								<span>Project:</span>
								<span className='orange'>Lorem ipsum dolor </span>
							</div>
						</div>
						<div className="jobs__location">
							<span>London, UK</span>
						</div>
					</div>
					<div className="jobs__button">
						<a href="#" className="jobs__btn">refer</a>
					</div>
				</div>
				<div className="jobs__vacancy-card">
					<div className="jobs__main">
						<span className="jobs__role">Frontend Developer</span>
						<div className="jobs__info">
							<div className="jobs__type">
								<span>Type:</span>
								<span className='orange'>Office/Remote</span>
							</div>
							<div className="jobs__type">
								<span>Category:</span>
								<span className='orange'>Software Development</span>
							</div>
							<div className="jobs__type">
								<span>Project:</span>
								<span className='orange'>Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit amet consectetur</span>
							</div>
						</div>
						<div className="jobs__location">
							<span>London, UK</span>
						</div>
					</div>
					<div className="jobs__button">
						<a href="#" className="jobs__btn">refer</a>
					</div>
				</div>
				<div className="jobs__vacancy-card">
					<div className="jobs__main">
						<span className="jobs__role">Frontend Developer</span>
						<div className="jobs__info">
							<div className="jobs__type">
								<span>Type:</span>
								<span className='orange'>Office/Remote</span>
							</div>
							<div className="jobs__type">
								<span>Category:</span>
								<span className='orange'>Software Development</span>
							</div>
							<div className="jobs__type">
								<span>Project:</span>
								<span className='orange'>Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit amet consectetur</span>
							</div>
						</div>
						<div className="jobs__location">
							<span>London, UK</span>
						</div>
					</div>
					<div className="jobs__button">
						<a href="#" className="jobs__btn">refer</a>
					</div>
				</div>
				<div className="jobs__vacancy-card">
					<div className="jobs__main">
						<span className="jobs__role">Frontend Developer</span>
						<div className="jobs__info">
							<div className="jobs__type">
								<span>Type:</span>
								<span className='orange'>Office/Remote</span>
							</div>
							<div className="jobs__type">
								<span>Category:</span>
								<span className='orange'>Software Development</span>
							</div>
							<div className="jobs__type">
								<span>Project:</span>
								<span className='orange'>Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit amet consectetur</span>
							</div>
						</div>
						<div className="jobs__location">
							<span>London, UK</span>
						</div>
					</div>
					<div className="jobs__button">
						<a href="#" className="jobs__btn">refer</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Jobs;