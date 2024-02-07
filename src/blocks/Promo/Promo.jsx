import React, { useState } from 'react'
import copy from 'clipboard-copy'
import Subtitle from '../../components/Subtitle/Subtitle'
import './Promo.scss'
import './Swiper.scss'
import map from '/icons/map.svg'
import copyIcon from '/icons/copy.svg'
import arrow from '/icons/arrow-up-right.svg'
import { message } from 'antd'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css/bundle'

const Promo = () => {
	const [isCopied, setIsCopied] = useState(false)

	const copyToClipboard = text => {
		copy(text)
		setIsCopied(true)

		setTimeout(() => {
			setIsCopied(false)
		}, 2000)

		// Stop the event propagation
		event.stopPropagation()
	}

	const [messageApi, contextHolder] = message.useMessage()

	const success = () => {
		messageApi.open({
			type: 'success',
			content: 'Координаты скопированы',
		})
	}

	return (
		<>
			<div className='promo'>
				{/* {isCopied && <div className='overlay'></div>} */}
				<div className='container'>
					<div className='promo__wrapper'>
						<div className='promo__relaxation'>
							<h1 className='title'>Отдых в объятиях природы</h1>
							<Subtitle addClass='promo__subtitle'>
								уютный уголок для спокойного отдыха рядом с Екатеринбургом
							</Subtitle>
							<div className='promo__texts'>
								<p className='text promo__text'>
									Добро пожаловать в уникальное убежище комфорта и роскоши – наш
									загородный дом, где каждый момент наполнен удивительной
									гармонией.
								</p>
								<p className='text promo__text'>
									Наш уединённый дом расположен в тихом уголке рядом с озером
									Шитовское и окружен красивыми лесами.
								</p>
								<p className='text promo__text'>
									Забронируйте уже сегодня и сделайте ваш отдых незабываемым!
								</p>
							</div>
							<div className='promo__geo'>
								<a href='#' className='promo__geo-link'>
									<img src={map} alt='map' />
									<div className='promo__geo-coordinates'>
										57.122785 60.511281
									</div>
								</a>
								{contextHolder}
								<div
									className='promo__copy'
									onClick={event => {
										event.preventDefault()
										event.stopPropagation()
										copyToClipboard('57.122785 60.511281')
										success()
									}}
								>
									<img src={copyIcon} alt='copy' />
								</div>
							</div>
							{/* {isCopied && (
								<div className='promo__copied-message'>
									Координаты скопированы!
								</div>
							)} */}
						</div>
						<div className='promo__swiper'>
							<div className='promo__cutout'>
								<div className='promo__arrow'>
									<img src={arrow} alt='arrow' />
								</div>
							</div>
							<Swiper
								// install Swiper modules
								modules={[Navigation, Pagination, Scrollbar, A11y]}
								spaceBetween={50}
								slidesPerView={1}
								pagination={{
									clickable: true,
								}}
								scrollbar={false}
								onSwiper={swiper => console.log(swiper)}
								onSlideChange={() => console.log('slide change')}
								direction='vertical'
								navigation={{
									nextEl: '.custom-next-button',
									prevEl: '.custom-prev-button',
								}}
							>
								<SwiperSlide>
									<img src='/images/swiper-promo/slide1.jpeg' alt='slide1' />
								</SwiperSlide>
								<SwiperSlide>
									<img src='/images/swiper-promo/slide2.jpeg' alt='slide2' />
								</SwiperSlide>
								<SwiperSlide>
									<img src='/images/swiper-promo/slide3.jpeg' alt='slide3' />
								</SwiperSlide>
								<SwiperSlide>
									<img src='/images/swiper-promo/slide4.jpeg' alt='slide4' />
								</SwiperSlide>
							</Swiper>
							<div className='promo__navigation'>
								<button className='custom-prev-button'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='12'
										height='26'
										viewBox='0 0 12 26'
										fill='none'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M5.29289 0.292893C5.68342 -0.0976311 6.31658 -0.0976311 6.70711 0.292893L10.7071 4.29289C11.0976 4.68342 11.0976 5.31658 10.7071 5.70711C10.3166 6.09763 9.68342 6.09763 9.29289 5.70711L6 2.41421L2.70711 5.70711C2.31658 6.09763 1.68342 6.09763 1.29289 5.70711C0.902369 5.31658 0.902369 4.68342 1.29289 4.29289L5.29289 0.292893Z'
											fill='#F7FDFB'
										/>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M6 4C6.55228 4 7 4.44772 7 5L7 25C7 25.5523 6.55228 26 6 26C5.44772 26 5 25.5523 5 25L5 5C5 4.44772 5.44772 4 6 4Z'
											fill='#F7FDFB'
										/>
									</svg>
								</button>
								<button className='custom-next-button'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='12'
										height='26'
										viewBox='0 0 12 26'
										fill='none'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M5.29289 25.7071C5.68342 26.0976 6.31658 26.0976 6.70711 25.7071L10.7071 21.7071C11.0976 21.3166 11.0976 20.6834 10.7071 20.2929C10.3166 19.9024 9.68342 19.9024 9.29289 20.2929L6 23.5858L2.70711 20.2929C2.31658 19.9024 1.68342 19.9024 1.29289 20.2929C0.902369 20.6834 0.902369 21.3166 1.29289 21.7071L5.29289 25.7071Z'
											fill='#232221'
										/>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M6 22C6.55228 22 7 21.5523 7 21L7 1C7 0.447716 6.55228 0 6 0C5.44772 0 5 0.447716 5 1L5 21C5 21.5523 5.44772 22 6 22Z'
											fill='#232221'
										/>
									</svg>
								</button>
							</div>
							{/* <div id='containerForBullets'></div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Promo