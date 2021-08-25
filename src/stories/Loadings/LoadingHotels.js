import React from 'react'
import { createUseStyles } from 'react-jss'
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = createUseStyles(() => ({
    container: {
        maxWidth: 1440,
        margin: 'o auto'
    },
    flexCenter: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 45
	},
	padding20: {
		paddingTop: 20,
		paddingBottom: 20
	},
    item: {
        margin: '10px 5px',
        boxSizing: 'border-box'
    },
    bgSkeleton: {
        background: '#F6F6F8!important',
        borderRadius: 10
    }
}))

const LoadingHotels = () => {

    const classes = useStyles()

	return (
        <React.Fragment>
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={12} md={6} lg={3}>
                    <div className={classes.item}>
                        <Skeleton variant="rect" width={200} height={20} className={classes.bgSkeleton} animation="wave" variant="text" />
                    </div>
                    <div className={classes.item}>
                        <Skeleton variant="rect" width={'100%'} height={540} className={classes.bgSkeleton} animation="wave" />
                    </div>
                </Grid>
                <Grid item xs={12} md={6} lg={9}>
                    <div className={classes.item}>
                        <Skeleton variant="rect" width={300} height={20} className={classes.bgSkeleton} animation="wave" variant="text" />
                    </div>
                    <div className={classes.item}>
                        <Skeleton variant="rect" width={'100%'} height={240} className={classes.bgSkeleton} animation="wave" />
                    </div>
                    <div className={classes.item}>
                        <Skeleton variant="rect" width={'100%'} height={240} className={classes.bgSkeleton} animation="wave" />
                    </div>
                    <div className={classes.item}>
                        <Skeleton variant="rect" width={'100%'} height={240} className={classes.bgSkeleton} animation="wave" />
                    </div>
                    <div className={classes.item}>
                        <Skeleton variant="rect" width={'100%'} height={240} className={classes.bgSkeleton} animation="wave" />
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

LoadingHotels.defaultProps = {}

LoadingHotels.propTypes = {}

export default LoadingHotels
