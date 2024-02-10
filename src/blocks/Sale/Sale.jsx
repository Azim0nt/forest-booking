import Title from '../../components/Title/Title'
import './Sale.scss'

const Sale = () => {
	return (
		<div className='sale'>
			<div className='container'>
				<div className='sale__wrapper'>
					{/* Используем SVG прямо в коде в качестве маски */}
					<div className='sale__bg'>
						<svg
							className='mask-svg'
							width='1366'
							height='756'
							viewBox='0 0 1366 756'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<defs>
								<mask id='mask-1'>
									<path
										d='M0 159V24C0 10.7452 10.7452 0 24 0H765C778.255 0 789 10.7452 789 24V132C789 145.255 799.745 156 813 156H1342C1355.25 156 1366 166.745 1366 180V537V731.978C1366 745.241 1355.24 755.99 1341.98 755.978L846.978 755.522C833.732 755.51 823 744.768 823 731.522V561C823 547.745 812.255 537 799 537H24C10.7452 537 0 526.255 0 513V159Z'
										fill='#ffffff'
										fillOpacity='1'
									/>
								</mask>
							</defs>
							<image
								href='/images/coffee.jpg'
								width='100%'
								height='100%'
								// height='100%'
								mask='url(#mask-1)'
								preserveAspectRatio='xMidYMid slice'
							/>
						</svg>
					</div>

					{/* Вставляем изображение */}
					{/* <div className='mask-image'>
						<img src={forest} alt='Forest' className='forest-image' />
					</div> */}

					<Title>Скидка 30 %</Title>

					<h3 className='sale__subtitle'>
						<span>На второй и последующие дни</span> при бронировании
						от 2х и более суток с понедельника по пятницу
					</h3>
				</div>
			</div>
		</div>
	)
}

export default Sale
