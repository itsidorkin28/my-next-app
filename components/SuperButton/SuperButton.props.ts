import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface SuperButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode
    appearance: 'primary' | 'ghost'
    arrow?: 'right' | 'down' | 'none'
}
