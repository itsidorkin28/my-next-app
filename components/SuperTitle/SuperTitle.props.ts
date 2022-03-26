import { ReactNode } from 'react'

export interface SuperTitleProps {
	tag: 'h1' | 'h2' | 'h3'
	children: ReactNode
}