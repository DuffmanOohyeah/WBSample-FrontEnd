import React, { ReactElement } from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	linkRoot: {
		textTransform: 'none',
		backgroundColor: '#FFF',
		color: `#000`,
		padding: '0.312rem 5rem',
	},
}));

function NeedHelpLoggingLink(): ReactElement {
	const classes = useStyles();
	return (
		<Grid container justify='center'>
			<Grid item>
				<Button
					disableRipple={true}
					variant='contained'
					classes={{
						root: classes.linkRoot,
					}}
					href={
						'mailto:support@wbsample.live?subject=issue%20logging%20in%20wbsample%20site'
					}
				>
					{' '}
					Need Help Logging in?
				</Button>
			</Grid>
		</Grid>
	);
}
export default NeedHelpLoggingLink;
