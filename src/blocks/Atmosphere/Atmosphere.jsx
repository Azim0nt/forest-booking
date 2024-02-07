import Title from '../../components/Title/Title'
import './Atmosphere.scss'
import { useState } from 'react'
import atmosphereImage from '/images/swiper-promo/slide4.jpeg'

const Atmosphere = () => {
	return (
		<>
			<div className='atmosphere'>
				<div className='container'>
					<div className='atmosphere__wrapper'>
						<div className='atmosphere__bg'>
							<svg
								width='1366'
								height='799'
								viewBox='0 0 1366 799'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M0 24C0 10.7451 10.7452 0 24 0H839C852.255 0 863 10.7452 863 24V93.6965C863 106.951 873.745 117.696 887 117.696H1342C1355.25 117.696 1366 128.442 1366 141.696V523.767C1366 537.022 1355.25 547.767 1342 547.767H887C873.745 547.767 863 558.512 863 571.767V673.158C863 686.413 852.255 697.158 839 697.158H209C195.745 697.158 185 707.903 185 721.158V775C185 788.255 174.255 799 161 799H24C10.7452 799 0 788.255 0 775V24Z'
									fill='#F7FDFB'
								/>
							</svg>
						</div>

						<div className='atmosphere__block'>
							<div className='atmosphere__image'>
								<img src={atmosphereImage} alt='atmosphere' />
							</div>

							<div className='atmosphere__description'>
								<h3 className='atmosphere__subtitle subtitle subtitle_black'>
									Насладитесь особенной атмосферой в спальне на втором этаже,
									где ванная прямо в комнате!
								</h3>
								<p className='text text_black'>
									Это уникальное решение позволяет создавать запоминающиеся
									моменты и неповторимые фотосессии. Вы сможете наслаждаться
									комфортом и интимностью, оставаясь в уютной обстановке своего
									приватного уголка.
									<br />
									<br />
									Наш дом предлагает удивительные возможности для отдыха
									и проведения времени, обеспечивая комфорт и элегантность
									в каждой детали.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Atmosphere
