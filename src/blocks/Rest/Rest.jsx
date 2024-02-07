import { useState, useEffect } from 'react'
import './Rest.scss'
import '../../App.css'

function Rest() {
	const [count, setCount] = useState(0)
	const [widthDesc, setWidthDesc] = useState(
		typeof window !== 'undefined' ? window.innerWidth : 0
	)

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		setWidthDesc(window.innerWidth)
	// 	}

	// 	// Add event listener for window resize
	// 	window.addEventListener('resize', handleResize)

	// 	// Cleanup the event listener on component unmount
	// 	return () => {
	// 		window.removeEventListener('resize', handleResize)
	// 	}
	// }, []) // Empty dependency array ensures the effect runs only once, similar to componentDidMount

	// console.log(widthDesc)

	return (
		<>
			<div className='rest'>
				<div className='container'>
					<div className='rest__bg'>
						<svg
							width='1366'
							height='592'
							viewBox='0 0 1366 592'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M0 1.55592e-06C20.5 2.03275e-06 10.7452 1.55592e-06 24 1.55592e-06H1342C1355.25 1.55592e-06 1350 -5.96013e-06 1366 1.20463e-05V568C1366 581.255 1355.25 592 1342 592H853C839.745 592 829 581.255 829 568V497.5C829 484.245 818.255 473.5 805 473.5H418H24C10.7452 473.5 0 462.755 0 449.5V1.55592e-06Z'
								fill='#3B3B3B'
							/>
						</svg>
					</div>
					<div className='rest__wrapper'></div>
				</div>
			</div>
		</>
	)
}

export default Rest
