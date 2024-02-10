import './SendOk.scss'
import React from 'react'
import logo from '/icons/logo.svg'
import Icon from '../Icon/Icon'

const SendOk = ({ send }) => {
	return (
		<>
			<div className='send-ok-overlay' />
			<div className='send-ok'>
				<a className='logo' href='/'>
					<img src={logo} alt='logo' />
				</a>

				<div className='send-ok__descriptions'>
					<h3 className='send-ok__descriptions-title'>
						{send
							? 'Мы свяжемся с вами в ближайшее время!'
							: 'Произошла ошибка, данные не отправлены'}
					</h3>
					<p className='send-ok__descriptions-text'>
						А пока Вы можете посетить наши социальные сети:
					</p>
					<div className='send-ok__descriptions-socials'>
						{Icon('inst')}
						{Icon('vk-send')}
					</div>
				</div>
			</div>
		</>
	)
}

export default SendOk
