import type { NextPage } from 'next'
import { SuperButton, SuperTitle } from '../components'

const Home: NextPage = () => {
	return (
		<>
			<SuperTitle tag={'h1'}>Title</SuperTitle>
			<SuperButton appearance={'primary'}>Click</SuperButton>
			<SuperButton appearance={'ghost'}>Click</SuperButton>
		</>
	)
}

export default Home
