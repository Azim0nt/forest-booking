import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import Button from '../Button/Button'
import { useEffect, useState, useRef } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IMaskInput } from 'react-imask'
import { useId } from 'react'
import './Form.scss'

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
				value: yup.string(),
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
			select: { value: 'Telegram', label: 'Telegram' },
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
				<input
					{...register('firstName')}
					aria-invalid={errors.firstName ? 'true' : 'false'}
					placeholder='Имя*'
					className='input-form'
				/>
				{errors.firstName && (
					<p style={{ color: 'red' }}>{errors.firstName.message}</p>
				)}

				<Controller
					name='phone'
					control={control}
					render={({ field }) => (
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

				{/* Добавляем текстовую область */}
				<textarea
					{...register('textarea')} // Регистрируем текстовую область с реакт-хук-форм
					aria-invalid={errors.textarea ? 'true' : 'false'}
					placeholder='Комментарий (необязательное поле)'
					className='textarea-form' // Добавляем класс стилей для текстовой области
				/>
				{errors.textarea && (
					<p style={{ color: 'red' }}>{errors.textarea.message}</p>
				)}

				<Button type='submit'>Submit</Button>
			</form>
		)
	)
}

export default Form
