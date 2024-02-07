import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Promo from './blocks/Promo/Promo'
import Booking from './blocks/Booking/Booking'
import Home from './blocks/Home/Home'
import Atmosphere from './blocks/Atmosphere/Atmosphere'
import Cosiness from './blocks/Cosiness/Cosiness'
import Prices from './blocks/Prices/Prices'
import Rest from './blocks/Rest/Rest'
import Location from './blocks/Location/Location'
import Exclusive from './blocks/Exclusive/Exclusive'
import Questions from './blocks/Questions/Questions'
import Sale from './blocks/Sale/Sale'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header />
			<Promo />
			<Booking />
			<Home />
			<Atmosphere />
			<Cosiness />
			<Prices />
			<Rest />
			<Sale />
			<Location />
			<Exclusive />
			<Questions />
		</>
	)
}

export default App
