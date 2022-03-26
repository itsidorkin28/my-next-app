import type { NextPage } from 'next'
import { SuperButton, SuperTitle } from '../components'

const Home: NextPage = (): JSX.Element => {
    return (
        <>
            <SuperTitle tag={'h1'}>Title</SuperTitle>
            <SuperButton appearance={'primary'} arrow={'right'}>Click</SuperButton>
            <SuperButton appearance={'ghost'} arrow={'down'}>Click</SuperButton>
        </>
    )
}

export default Home
