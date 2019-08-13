import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import Icon from '@material-ui/core/Icon'
import start from './start.png';
import Fab from '@material-ui/core/Fab';


class Intro extends Component {

	text = {
		swe: {
			scroll: "Scrolla ner!"
		},
		eng: {
			scroll: "Scroll down!"
		}
	}

	render() {
		return(
			<div id="intro">
				<Grid container direction="column" alignItems="center" justify="space-evenly" spacing={4}>
					<Grid item sm={8} lg={4}>
						<Grid container direction="column" alignItems="center">
							<img className="logo" src={start} alt="Logo"/>
						</Grid>
					</Grid>
					<Grid item>
						<Fab color="secondary" variant="extended" aria-label="scroll down" onClick={() => {document.querySelector('#multi').scrollIntoView({ behavior: 'smooth' })}}>
				        {this.text[this.props.lang].scroll}
				        <Icon id="scroll-down">keyboard_arrow_down</Icon>
							</Fab>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Intro;