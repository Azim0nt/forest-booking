import Form from '../../components/Form/Form'
import Title from '../../components/Title/Title'
import './Questions.scss'

const Questions = () => {
	return (
		<>
			<div className='questions'>
				<div className='container'>
					<div className='questions__wrapper'>
						<div className='questions__left'>
							<Title>Остались вопросы?</Title>
							<div className='questions__form'>
								<Form />
							</div>
						</div>
						<div className='questions__image'>
							<img src='/images/question.jpeg' alt='family' />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Questions
