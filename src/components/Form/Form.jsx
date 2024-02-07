import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import Button from '../Button/Button'
import { useEffect, useState, useRef } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IMaskInput } from 'react-imask'
import { useId } from 'react'

const Form = () => {
	const schema = yup
		.object()
		.shape({
			firstName: yup.string().required('First name is required'),
			mail: yup
				.string()
				.email('Invalid email address')
				.required('Email Address is required'),
			phone: yup
				.string()
				.matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Invalid phone number') // Проверка на правильный формат номера
				.required('Phone number is required'), // Проверка на заполненность поля
			select: yup.object().shape({
				value: yup.string(),
				label: yup.string(),
			}),
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
			mail: '',
			phone: '',
			select: { value: 'Telegram', label: 'Telegram' },
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
				<input
					{...register('firstName')}
					aria-invalid={errors.firstName ? 'true' : 'false'}
					placeholder='First Name'
				/>
				{errors.firstName && (
					<p style={{ color: 'red' }}>{errors.firstName.message}</p>
				)}

				<input
					{...register('mail')}
					aria-invalid={errors.mail ? 'true' : 'false'}
					placeholder='Email'
				/>
				{errors.mail && <p style={{ color: 'red' }}>{errors.mail.message}</p>}

				<Controller
					name='phone'
					control={control}
					render={({ field }) => (
						<IMaskInput
							mask='+{7} (000) 000-00-00'
							definitions={{
								0: /[0-9]/,
							}}
							placeholder='+7 (___) ___-__-__'
							value={field.value}
							onAccept={value => field.onChange(value)}
							inputRef={input => {
								field.ref(input) // Устанавливаем ref для контроллера
								if (errors.phone) {
									// Если есть ошибка телефона
									input.focus() // Устанавливаем фокус на поле ввода
								}
							}}
						/>
					)}
				/>

				{errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}

				<Controller
					name='select'
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							options={[
								{ value: 'Telegram', label: 'Telegram' },
								{ value: 'Почта', label: 'Email' },
								{ value: 'Телефон', label: 'Phone' },
								{ value: 'Whatsapp', label: 'Whatsapp' },
							]}
							instanceId={useId()}
						/>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		)
	)
}

export default Form
