import type { NextPage } from 'next'
import { Paragraph, SuperButton, SuperTitle, Tag } from '../components'

const Home: NextPage = (): JSX.Element => {
    return (
        <>
            <SuperTitle tag={'h1'}>Title</SuperTitle>
            <SuperButton appearance={'primary'} arrow={'right'}>Click</SuperButton>
            <SuperButton appearance={'ghost'} arrow={'down'}>Click</SuperButton>
            <Paragraph size={'s'}>Small</Paragraph>
            <Paragraph size={'m'}>Medium</Paragraph>
            <Paragraph size={'l'}>Large</Paragraph>
            <Tag size={'s'}>Ghost</Tag>
            <Tag size={'m'} color={'red'}>Red</Tag>
            <Tag size={'m'} color={'green'}>Green</Tag>
            <Tag size={'s'} color={'primary'}>Primary</Tag>
        </>
    )
}

export default Home
