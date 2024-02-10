import { useState } from 'react'
import './Footer.scss'
import '../../App.css'
import logoFooter from '/icons/logo-footer.svg'
import Icon from '../Icon/Icon'

function Footer() {
	const [count, setCount] = useState(0)

	return (
		<>
			<footer className='footer'>
				<div className='container'>
					<div className='footer__wrapper'>
						<a href='/' className='logo'>
							<img src={logoFooter} alt='logo' />
						</a>

						<div className='socials'>
							{Icon('phone')}
							{Icon('tg')}
							{Icon('wa')}
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
