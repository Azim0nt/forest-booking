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
import './DatePicker.scss'
import 'react-datepicker/dist/react-datepicker.css'

const DynamicDatePicker = dynamic(() => import('react-datepicker'), {
	ssr: false,
})

const DatePicker = () => {
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(null)
	const onChange = dates => {
		const [start, end] = dates
		setStartDate(start)
		setEndDate(end)
	}

	return (
		<div className='date-picker__wrapper'>
			<div className='date-picker__top'>
				<h3 className='date-picker__title'>
					Выберите даты <br></br> планируемого отдыха
				</h3>
			</div>
			<div className='date-picker__calendar'>
				<DynamicDatePicker
					selected={startDate}
					onChange={onChange}
					startDate={startDate}
					endDate={endDate}
					selectsStart
					monthsShown={2}
					inline
					locale={ru}
					minDate={new Date()}
					selectsRange
				/>
			</div>
		</div>
	)
}

export default DatePicker
