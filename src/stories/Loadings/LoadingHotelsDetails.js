import React from 'react'
import { createUseStyles } from 'react-jss'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = createUseStyles(() => ({
    contentGallery: {
		width: '100%',
		minHeight: 400,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'stretch',
		position: 'relative',
		'@media (max-width: 600px)': {
			flexDirection: 'column',
			minHeight: 'auto'
		}
	},
	primaryImage: {
		background: 'silver',
		width: '50%',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		marginRight: 10,
		'@media (max-width: 600px)': {
			height: 200,
			width: '100%'
		}
	},
	primaryImageBtn: {
		position: 'absolute',
		bottom: 30,
		left: 10,
		'@media (max-width: 600px)': {
			bottom: 10
		}
	},
	imagesListContainer: {
		width: '50%',
		padding: 0,
		margin: 0,
		display: 'grid',
		gridTemplateColumns: 'auto auto',
		gridColumnGap: 10,
		gridRowGap: 10,
		boxSizing: 'border-box',
		'@media (max-width: 600px)': {
			display: 'none'
		}
	},
	imageListItem: {
		background: 'white',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		listStyle: 'none'
	},
    bgSkeleton: {
        background: '#F6F6F8!important'
    }
}))

const LoadingHotelsDetails = () => {

    const classes = useStyles()

	return (
        <React.Fragment>
            <div className={classes.contentGallery}>
                <div className={classes.primaryImage}>
                    <Skeleton variant="rect" width={'100%'} height={'100%'} className={classes.bgSkeleton} animation="wave" />
                </div>
                <ul className={classes.imagesListContainer}>
                    <li className={classes.imageListItem}>
                        <Skeleton variant="rect" width={'100%'} height={240} className={classes.bgSkeleton} animation="wave" />
                    </li>
                    <li className={classes.imageListItem}>
                        <Skeleton variant="rect" width={'100%'} height={240} className={classes.bgSkeleton} animation="wave" />
                    </li>
                    <li className={classes.imageListItem}>
                        <Skeleton variant="rect" width={'100%'} height={240} className={classes.bgSkeleton} animation="wave" />
                    </li>
                    <li className={classes.imageListItem}>
                        <Skeleton variant="rect" width={'100%'} height={240} className={classes.bgSkeleton} animation="wave" />
                    </li>
                </ul>
            </div>
            <div style={{ padding: 20, boxSizing: 'border-box' }}>
                <Skeleton variant="rect" width={'100%'} height={200} className={classes.bgSkeleton} animation="wave" />
            </div>
            <div style={{ padding: '0 20px', boxSizing: 'border-box' }}>
                <Skeleton variant="rect" width={'100%'} height={400} className={classes.bgSkeleton} animation="wave" />
            </div>
        </React.Fragment>
    )
}

LoadingHotelsDetails.defaultProps = {}

LoadingHotelsDetails.propTypes = {}

export default LoadingHotelsDetails
