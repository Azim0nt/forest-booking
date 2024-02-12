import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'
import { format } from 'date-fns'
import ru from 'date-fns/locale/ru'
import dynamic from 'next/dynamic'
import './DatePicker.scss'
import 'react-datepicker/dist/react-datepicker.css'

const DynamicDatePicker = dynamic(() => import('react-datepicker'), {
	ssr: false,
})

const DatePicker = () => {
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(null)

	const [startDateValid, setStartDateValid] = useState(false)
	const [endDateValid, setEndDateValid] = useState(false)

	const { register, handleSubmit, errors } = useForm()

	const onSubmit = data => {
		console.log(data)
	}

	const handleStartDateChange = e => {
		const inputValue = e.target.value
		const parsedDate = new Date(inputValue)
		if (!isNaN(parsedDate.getTime())) {
			setStartDate(parsedDate)
			setStartDateValid(true)
		} else {
			setStartDate(null)
			setStartDateValid(false)
		}
	}

	const handleEndDateChange = e => {
		const inputValue = e.target.value
		const parsedDate = new Date(inputValue)
		if (!isNaN(parsedDate.getTime())) {
			setEndDate(parsedDate)
			setEndDateValid(true)
		} else {
			setEndDate(null)
			setEndDateValid(false)
		}
	}

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
				<div className='date-picker__inputs'>
					<div className='date-picker__input-start'>
						<label>Прибытие</label>
						<input
							type='date'
							value={startDate ? format(startDate, 'yyyy-MM-dd') : ''}
							onChange={handleStartDateChange}
						/>
					</div>
					<div className='date-picker__input-end'>
						<label>Выезд</label>
						<input
							type='date'
							value={endDate ? format(endDate, 'yyyy-MM-dd') : ''}
							onChange={handleEndDateChange}
						/>
					</div>
				</div>
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
