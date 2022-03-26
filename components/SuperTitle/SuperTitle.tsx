import React from 'react'
import { SuperTitleProps } from './SuperTitle.props'
import styles from './SuperTitle.module.scss'


export const SuperTitle = React.memo(function SuperTitle({ children, tag  }: SuperTitleProps): JSX.Element {
	switch (tag) {
		case 'h1':
			return <h1 className={styles.h1}>{children}</h1>
		case 'h2':
			return <h2 className={styles.h2}>{children}</h2>
		case 'h3':
			return <h3 className={styles.h3}>{children}</h3>
		default:
			return <></>
	}
})



