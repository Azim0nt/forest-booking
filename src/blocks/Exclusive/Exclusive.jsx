import Title from '../../components/Title/Title'
import './Exclusive.scss'
import exclusiveImage1 from '/images/exclusive/1.jpeg'
import exclusiveImage2 from '/images/exclusive/2.jpeg'
import exclusiveImage3 from '/images/exclusive/3.jpeg'

const Exclusive = () => {
	return (
		<>
			<div className='exclusive' id='exclusive'>
				<div className='container'>
					<div className='exclusive__wrapper'>
						<Title>Эксклюзивные услуги для вашего удовольствия</Title>
						<h3 className='subtitle exclusive__subtitle'>
							Стоимость услуг обговаривается индивидуально
						</h3>
						<div className='exclusive__items'>
							<div className='exclusive__item'>
								<div className='exclusive__image'>
									<img src={exclusiveImage1} alt='exclusive' />
								</div>
								<div className='exclusive__title'>Оформление фуршета</div>
								<p className='exclusive__text'>
									Мы создаем атмосферу изысканности и элегантности благодаря
									нашему искусству оформления фуршета. <br></br>
									<br></br>
									Каждая деталь заботливо продумана, чтобы ваше мероприятие
									оставило незабываемые впечатления и вызвало восторг у гостей.
								</p>
							</div>
							<div className='exclusive__item'>
								<div className='exclusive__image'>
									<img src={exclusiveImage2} alt='exclusive' />
								</div>
								<div className='exclusive__title'>Декор для дома и участка</div>
								<p className='exclusive__text'>
									Мы создаём атмосферу уюта и эстетики на любую тематику
									мероприятий. <br></br> <br></br>Индивидуальный подход и
									внимание к деталям придают нашему дому и окружающей его
									территории уникальный характер и шарм.
								</p>
							</div>
							<div className='exclusive__item'>
								<div className='exclusive__image'>
									<img src={exclusiveImage3} alt='exclusive' />
								</div>
								<div className='exclusive__title'>десерты на заказ</div>
								<p className='exclusive__text'>
									Мы предлагаем эксклюзивные десерты, созданные с любовью и
									творчеством. <br></br> <br></br>Каждый десерт уникален и
									превосходен, придавая вашему мероприятию неповторимый штрих
									вкуса и наслаждения.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Exclusive
