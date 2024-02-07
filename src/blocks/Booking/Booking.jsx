import { useForm, Controller } from 'react-hook-form'
import { DatePicker, Button } from 'antd'
import { useState } from 'react'
import ruRU from 'antd/lib/locale/ru_RU'
import moment from 'moment'
import 'moment/locale/ru'
import './Booking.scss'

const { RangePicker } = DatePicker

moment.locale('ru')

const Booking = () => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	// State for selected dates
	const [selectedDates, setSelectedDates] = useState(null)

	const onSubmit = data => {
		// Преобразуйте выбранные даты в формат YYYY-MM-DD перед отправкой
		const formattedDates =
			selectedDates && selectedDates.map(date => date.format('YYYY-MM-DD'))
		const formData = { ...data, selectedDates: formattedDates }
		console.log(formData)

		// Ваша текущая логика отправки формы
	}

	const disabledDate = current => {
		// Запрет выбора прошедших дат
		return current && current < moment().startOf('day')
	}

	const onCalendarChange = value => {
		// Обновляем выбранные даты при изменении календаря
		setSelectedDates(value)
	}

	const onOpenChange = open => {
		// Сбрасываем выбранные даты при открытии или закрытии календаря
		if (open) {
			setSelectedDates([null, null])
		}
	}

	const handleClearDates = () => {
		setSelectedDates([null, null])
	}

	return (
		<div className='booking'>
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
						<Controller
							name='selectedDates'
							control={control}
							defaultValue={null}
							render={({ field }) => (
								<RangePicker
									{...field}
									disabledDate={disabledDate}
									onCalendarChange={onCalendarChange}
									onOpenChange={onOpenChange}
									onChange={value => {
										field.onChange(value)
										onCalendarChange(value)
									}}
									value={selectedDates}
									allowClear
									format='YYYY-MM-DD'
									locale={ruRU}
									renderExtraFooter={() => (
										<Button type='link' onClick={handleClearDates}>
											Очистить даты
										</Button>
									)}
								/>
							)}
						/>
						<input
							{...register('firstName', { required: true })}
							aria-invalid={errors.firstName ? 'true' : 'false'}
						/>
						{errors.firstName?.type === 'required' && (
							<p role='alert'>Имя обязательно</p>
						)}

						<input
							{...register('mail', { required: 'Email обязателен' })}
							aria-invalid={errors.mail ? 'true' : 'false'}
						/>
						{errors.mail && <p role='alert'>{errors.mail?.message}</p>}

						<input type='submit' />
					</form>
				</div>
			</div>
		</div>
	)
}

export default Booking
