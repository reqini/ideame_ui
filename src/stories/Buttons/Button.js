import React from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
	button: ({ background, color, size, width }) => ({
		fontWeight: 'bold',
		transition: 'background-color 0.25s linear, color 0.25s linear',
		background: background || '#1f95c5',
		color: color || 'white',
		cursor: 'pointer',
		boxSizing: 'border-box',
		borderRadius: 10,
		border: 'none',
		padding: '0 1rem 0 1rem',
		minWidth: 48,
		width: width || '100%',
		height: size || 40,

		'&:active': {
			border: 'none'
		}
	}),
	shadow: {
		'&:hover': {
			'box-shadow': '0 3px 3px 0 rgb(0 0 0 / 14%), 0 1px 7px 0 rgb(0 0 0 / 12%), 0 3px 1px -1px rgb(0 0 0 / 20%)'
		}
	},
	circle: {
		borderRadius: '50%'
	},
	fullWidth: {
		width: '100%'
	}
}))

const Button = ({
	className = null,
	onClick = null,
	children,
	disabled = false,
	circle = false,
	shadow,
	fullWidth = false,
	background,
	color,
	size,
	width
}) => {
	const classes = useStyles({ background, color, size, width })
	return (
		<button
			onClick={!disabled ? onClick : null}
			className={classNames(
				classes.button,
				className,
				shadow && classes.shadow,
				circle && classes.circle,
				fullWidth && classes.fullWidth
			)}
		>
			{children}
		</button>
	)
}

export default Button
