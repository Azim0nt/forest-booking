import { useState } from 'react'
import './Header.scss'
import '../../App.css'
import logo from '/icons/logo.svg'
import Icon from '../Icon/Icon'

function Header() {
	const [count, setCount] = useState(0)

	return (
		<>
			<header className='header'>
				<div className='container'>
					<div className='header__wrapper'>
						<a href='/' className='logo'>
							<img src={logo} alt='logo' />
						</a>
						<nav className='menu'>
							<ul>
								<li>
									<a href='#home'>О доме</a>
								</li>
								<li>
									<a href='#prices'>Цена</a>
								</li>
								<li>
									<a href='#location'>О локации</a>
								</li>
								<li>
									<a href='#location__found'>Как добраться</a>
								</li>
								<li>
									<a href='#exclusive'>Дополнительные услуги</a>
								</li>
								<li>
									<a href='#footer'>Контакты</a>
								</li>
							</ul>
						</nav>
						<div className='socials'>
							{Icon('phone')}
							{Icon('tg')}
							{Icon('wa')}
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
