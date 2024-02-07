import { useState } from 'react'
// import './Header.scss'
import '../../App.css'
import logo from '/icons/logo.svg'
import phone from '/icons/phone.svg'
import wa from '/icons/wa.svg'
import tg from '/icons/tg.svg'

import './Icon.scss'

function Icon(props) {
	return (
		<>
			{props === 'phone' && (
				<a href='tel:+79226152393' className='social social-phone'>
					<img src={phone} alt='phone' />
				</a>
			)}
			{props === 'tg' && (
				<a href='https://t.me/@MaryBoyarskikh' className='social social-tg'>
					<img src={tg} alt='telegram' />
				</a>
			)}
			{props === 'wa' && (
				<a href='https://wa.me/+79226152393' className='social social-wa'>
					<img src={wa} alt='whatsapp' />
				</a>
			)}
		</>
	)
}

export default Icon
