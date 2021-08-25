import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import Typography from '../Typography/Typography';
import Image from '../../assets/ideame.logo.svg';

const useStyles = createUseStyles(() => ({
	messageGeneric: {
		width: '100%',
		maxWidth: 1200,
		minHeight: 400,
		background: '#f2f2f2',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		padding: '40px 15px'
	}
}))

const MessageGeneric = ({ image, alt, title, subtitle }) => {

	const classes = useStyles()

	return (
		<div className={classes.messageGeneric}>
			<img width="200" src={image} alt={alt} />
            <Typography variant="h2" fontSize={30} margin="20px 0">{title}</Typography>
			<Typography variant="p" fontSize={14}>{subtitle}</Typography>
        </div>
	)
}

MessageGeneric.propTypes = {
	image: PropTypes,
	alt: PropTypes.string,
}

MessageGeneric.defaultProps = {
	image: Image,
	alt: '',
	title: 'Mensaje de ejemplo',
	subtitle: 'Este es un mensaje de ejemplo cargado por medio de la ui de upate'
}

export default MessageGeneric
