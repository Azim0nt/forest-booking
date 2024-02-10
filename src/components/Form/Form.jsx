import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import Button from '../Button/Button'
import { useEffect, useState, useRef } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IMaskInput } from 'react-imask'
import { useId } from 'react'
import './Form.scss'
import errorImage from '/icons/error.svg'
import penOk from '/icons/pen.svg'

const Form = () => {
	const schema = yup
		.object()
		.shape({
			firstName: yup.string().required('Обязательно для ввода').max(20),
			phone: yup
				.string()
				.matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Неверно введен номер')
				.required('Обязательно для ввода'),
			select: yup.object().shape({
				value: yup.string().required('Обязательно для ввода'),
				label: yup.string(),
			}),
			textarea: yup.string().max(30, 'Максимум 30 символов'),
		})
		.required()

	const ref = useRef(null)

	const {
		control,
		handleSubmit,
		formState: { errors },
		register,
	} = useForm({
		defaultValues: {
			firstName: '',
			phone: '',
			textarea: '', // Добавляем значение по умолчанию для текстовой области
		},
		resolver: yupResolver(schema),
	})

	const [hasMounted, setHasMounted] = useState(false)

	useEffect(() => {
		setHasMounted(true)
	}, [])

	const inputRef = useRef(null)

	const onSubmit = data => console.log(data)

	return (
		hasMounted && (
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='input__wrapper'>
					<input
						{...register('firstName')}
						aria-invalid={errors.firstName ? 'true' : 'false'}
						placeholder='Имя*'
						className='input-form'
					/>
					{errors.firstName && (
						<img className='error-icon' src={errorImage} alt='error' />
					)}
				</div>

				<Controller
					name='phone'
					control={control}
					render={({ field }) => (
						<div className='input__wrapper'>
							<IMaskInput
								mask='+{7} (000) 000-00-00'
								definitions={{
									0: /[0-9]/,
								}}
								placeholder='Телефон*'
								value={field.value}
								onAccept={value => field.onChange(value)}
								inputRef={input => {
									field.ref(input)
									if (errors.phone) {
										input.focus()
									}
								}}
								className='input-form'
								aria-invalid={errors.phone ? 'true' : 'false'}
							/>
							{errors.phone ? (
								<img className='error-icon' src={errorImage} alt='error' />
							) : (
								<img />
							)}
						</div>
					)}
				/>

				<Controller
					name='select'
					control={control}
					render={({ field }) => (
						<div className='input__wrapper'>
							<Select
								{...field}
								options={[
									{ value: 'Phone', label: 'Телефонный звонок' },
									{ value: 'Whatsapp', label: 'Whatsapp' },
									{ value: 'Telegram', label: 'Telegram' },
									{ value: 'Email', label: 'Почта' },
								]}
								placeholder='Предпочтительный способ связи*'
								instanceId={useId()}
								className='react-select-container'
								classNamePrefix={'react-select'}
								styles={{
									control: (baseStyles, { isFocused }) => ({
										...baseStyles,
										borderColor: errors.select
											? '#eb394f !important'
											: '#afafaf !important',
									}),
									placeholder: (baseStyles, { isFocused }) => ({
										...baseStyles,
										color: errors.select
											? '#eb394f !important'
											: '#afafaf !important',
										opacity: errors.select ? '1' : '0.5',
									}),
									dropdownIndicator: provided => ({
										...provided,
										svg: {
											fill: errors.select ? '#eb394f' : '',
										},
									}),
								}}
							/>
							{errors.select && (
								<img className='error-icon' src={errorImage} alt='error' />
							)}
						</div>
					)}
				/>

				<div className='input__wrapper'>
					<textarea
						{...register('textarea')}
						aria-invalid={errors.textarea ? 'true' : 'false'}
						placeholder='Комментарий (необязательное поле)'
						className='textarea-form'
					/>
					{errors.textarea && (
						<img className='error-icon' src={errorImage} alt='error' />
					)}
				</div>

				<Button type='submit'>Свяжитесь со мной</Button>
			</form>
		)
	)
}

export default Form
