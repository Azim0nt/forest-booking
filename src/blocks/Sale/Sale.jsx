import Title from '../../components/Title/Title'
import './Sale.scss'

const Sale = () => {
	return (
		<>
			<div className='sale'>
				<div className='container'>
					<div className='sale__wrapper'>
						<div className='sale__bg'>
							<svg
								width='1366'
								height='756'
								viewBox='0 0 1366 756'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M0 159V24C0 10.7452 10.7452 0 24 0H671C684.255 0 695 10.7452 695 24V144C695 157.255 705.745 168 719 168H1342C1355.25 168 1366 178.745 1366 192V537V731.978C1366 745.241 1355.24 755.99 1341.98 755.978L846.978 755.522C833.732 755.51 823 744.768 823 731.522V561C823 547.745 812.255 537 799 537H24C10.7452 537 0 526.255 0 513V159Z'
									fill='#404040'
								/>
							</svg>
						</div>
						<Title>Скидка 30 %</Title>
					</div>
				</div>
			</div>
		</>
	)
}

export default Sale
