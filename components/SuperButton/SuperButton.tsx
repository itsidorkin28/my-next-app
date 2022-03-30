import React from 'react'
import styles from './SuperButton.module.scss'
import { SuperButtonProps } from './SuperButton.props'
import cn from 'classnames'
import ArrowIcon from './arrow.svg'

export const SuperButton = React.memo(function SuperButton({
                                                               children,
                                                               appearance,
                                                               className,
                                                               arrow = 'none',
                                                               ...props
                                                           }: SuperButtonProps): JSX.Element {
    return <>
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down',
                [styles.right]: arrow === 'right',
            })}>
                <ArrowIcon/>
            </span>}
        </button>
    </>
})





