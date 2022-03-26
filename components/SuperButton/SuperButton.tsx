import React from 'react'
import styles from './SuperButton.module.css'
import { SuperButtonProps } from './SuperButton.props'
import cn from 'classnames'


export const SuperButton = React.memo(function SuperButton({ children, appearance }: SuperButtonProps): JSX.Element {
	return <>
		<button
			className={cn(styles.button, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
		>
			{children}
		</button>
	</>
})



