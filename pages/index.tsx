import type { NextPage } from 'next'
import { Paragraph, Rating, SuperButton, SuperTitle, Tag } from '../components'
import { useState } from 'react'
import { withLayout } from '../layout'

const Home: NextPage = (): JSX.Element => {
    const [rating, setRating] = useState<number>(4)

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
            <Rating rating={rating} isEditable setRating={setRating}/>
        </>
    )
}

export default withLayout(Home)
