import React from 'react';
import '../fonts/fonts.scss';
import '../scss/pricing.scss';
import cx from 'classnames';
import left from '../img/arrow-left.png';
import right from '../img/arrow-right.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper";

const Pricing = () => {
	return (
		<section className="pricing">
			<Swiper
				effect={"coverflow"}
				loop={true}
				centeredSlides={true}
				slidesPerView={1}
				navigation={{
					prevEl: '.prev',
					nextEl: '.next',
				}}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: false,
				}}
				modules={[EffectCoverflow, Navigation]}
				
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="pricing__trader-1">
						<span className="pricing__title">trader 1</span>
						<span className="pricing__price">100 - 10 000 USDT</span>
						<div className="pricing__daily">
							<span className="pricing__text">Income per day</span>
							<span className="pricing__value">1%</span>
						</div>
						<div className="pricing__monthly">
							<span className="pricing__text">Income per month</span>
							<span className="pricing__value">30%</span>
						</div>
						<div className="pricing__referral">
							<span className="pricing__text">Referral programm</span>
							<span className="pricing__value">5 lines</span>
						</div>
						<a href="#" className="pricing__button">to buy</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="pricing__trader-2">
						<span className="pricing__title">trader 2</span>
						<span className="pricing__price">100 - 10 000 USDT</span>
						<div className="pricing__daily">
							<span className="pricing__text">Income per day</span>
							<span className="pricing__value">1%</span>
						</div>
						<div className="pricing__monthly">
							<span className="pricing__text">Income per month</span>
							<span className="pricing__value">30%</span>
						</div>
						<div className="pricing__referral">
							<span className="pricing__text">Referral programm</span>
							<span className="pricing__value">5 lines</span>
						</div>
						<a href="#" className="pricing__button">to buy</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="pricing__trader-3">
						<span className="pricing__title">trader 3</span>
						<span className="pricing__price">100 - 10 000 USDT</span>
						<div className="pricing__daily">
							<span className="pricing__text">Income per day</span>
							<span className="pricing__value">1%</span>
						</div>
						<div className="pricing__monthly">
							<span className="pricing__text">Income per month</span>
							<span className="pricing__value">30%</span>
						</div>
						<div className="pricing__referral">
							<span className="pricing__text">Referral programm</span>
							<span className="pricing__value">5 lines</span>
						</div>
						<a href="#" className="pricing__button">to buy</a>
					</div>
				</SwiperSlide>
				<div className="next">
					<img src={left} alt="" />
				</div>
				<div className={"prev"}>
					<img src={ right } alt="" />
				</div>
			</Swiper>
		</section>
	);
}

export default Pricing;


