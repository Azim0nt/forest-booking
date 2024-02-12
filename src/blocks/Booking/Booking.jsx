import { useForm } from 'react-hook-form'
import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import {
	addDays,
	differenceInDays,
	format,
	isSameDay,
	isWithinInterval,
} from 'date-fns'
import ru from 'date-fns/locale/ru'
import dynamic from 'next/dynamic'
import Overlay from '../../components/Overlay/Overlay'
import './Booking.scss'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from '../DatePicker/DatePicker'

const DynamicDatePicker = dynamic(() => import('react-datepicker'), {
	ssr: false,
})

const Booking = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const [openCalendar, setOpenCalendar] = useState(false)

	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(null)
	const onChange = dates => {
		const [start, end] = dates
		setStartDate(start)
		setEndDate(end)
	}

	const onSubmit = data => {}

	return (
		<div className='booking'>
			{openCalendar && <DatePicker />}
			{openCalendar && <Overlay onClick={() => setOpenCalendar(false)} />}
			<div className='container'>
				<div className='booking__wrapper'>
					<div className='booking__bg'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='1007'
							height='392'
							viewBox='0 0 1007 392'
							fill='none'
						>
							<path
								d='M0 24C0 10.7452 10.7452 0 24 0H983C996.255 0 1007 10.7452 1007 24V368C1007 381.255 996.255 392 983 392H659C645.745 392 635 381.255 635 368V258C635 244.745 624.255 234 611 234H210H24C10.7452 234 0 223.255 0 210V24Z'
								fill='#3B3B3B'
							/>
						</svg>
					</div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							onClick={() => setOpenCalendar(!openCalendar)}
							className='booking__input-date'
							type='text'
							placeholder='Выбор дат'
						/>
						<input type='submit' />
					</form>
				</div>
			</div>
		</div>
	)
}

export default Booking
