import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import ili from './ili.jpg';
import ite from './ite.jpg';
import azula from './azula.jpg';
import drag from './drag.jpg';
import airom from './airom.jpg';


class Multi extends Component {

	text = {
		swe: {
			intro: {
				title: "Hejsan N0llan!",
				body1: "Först och främst vill vi välkomna dig till Lund, LTH och såklart D-sektionen. Vi hoppas att du kommer trivas väldigt bra här under hela din studietid! När man kommer till Lund som nyantagen student är det väldigt många nya intryck, personer, platser och andra konstigheter nästan dagligen. För att detta ska vara så enkelt och roligt som möjligt kommer du som n0lla få genomgå en nollning. Nollningen är något av det roligaste som man kan göra i studentlivet, och det kommer ge dig en bra ingång in i ditt nya hem. Det är också det perfekta tillfället att lära känna många nya vänner, både nyantagna studenter och äldre teknologer.",
				body2: "Schemat kommer vara fullspäckat med roliga aktiviteter, sittningar och galenskap. Nollningen kan därför kanske kännas för intensiv. Detta är inget problem då man väljer helt själv hur mycket av nollningen man vill vara med på! Vi rekommenderar dock att vara med på så mycket som möjligt, för nollningen är så orimligt kul!",
				body3: "Nollningen är något hela LTH gör tillsammans, med flertalet gemensamma event. Exempelvis finns Nollelördagen då hela Teknologkåren samlas i Lundagård och genomför olika uppdrag, eller den stora avslutningsfesten på nollningen, Solklart. De flesta nollningsevent kommer däremot endast vara med D-sektionen. Vi på D-sektionen älskar nya människor och kommer göra allt vi kan för att du ska känna dig välkommen, så tveka aldrig över att komma fram till och prata med vem som helst i iDét eller med råsa ovve!",
				body4: "På denna hemsida kommer du hitta massa information som är bra att ha som n0lla. Den innehåller bland annat schema över nollningen, information om D-sektionen och en massa annat. Om det skulle finnas ytterligare frågor så tveka inte att fråga dina phaddrar. De har varit i er sits en gång i tiden också och lärt sig mycket bra saker om Lund och dess studentliv. Skulle man fortfarande ha frågor om allt eller inget kan man maila nollning@dsek.se så ser vi till att du får ett svar!",
				end: "Än en gång önskar vi dig all lycka i Lund och på LTH!",
				wish: "Hälsningar, "
			},
			stab: {
				title: "Staben",
				ili: {
					name: "iliDDoS Lua.min"
				},
				ite: {
					name: "Iteroz TerraSeq"
				},
				azula: {
					name: "Azula Overfl0w"
				},
				drag: {
					name: "DraegOS Heapster"
				},
				airom: {
					name: "ai.ROM <VoidBorn>"
				}
			},
			nolleguide: {
				title: "Nolleguide!",
				text: "Nolleguiden är den definitiva hjälpen under dina första veckor här på LTH! Här finner du info om Nollningen, Sektionen, LTH och mycket mycket mer. Den delas ut i fysisk form men du kan också ladda ner den här nedan!",
				download: "Ladda ner nolleguiden"
			}
		},
		eng: {
			intro: {
				title: "Hi N0lla!",
				body1: "We are Staben, and we have been working voluntarily and wholeheartedly this last year in order to create the best Nollning ever. We will do our best to make sure that you are feeling welcomed and not too lost in the beginning of your stay. If you are feeling overwhelmed or confused about what a Nollning is about, that is completely normal and that is exactly why this website exists. Feel free to read up on our student traditions and what the different guilds do; you can find most of the information here on nolla.nu",
				body2: "You will undergo a nollning here on LTH that lasts for the first couple of weeks. This is a great opportunity to meet new friends and acquaintance yourself with other people. Please do note that the nollning at LTH and the international nollning at LU are two completely different things. Different groups of people arrange them and the schedules will clash from time to time. This is no problem, though. You can choose freely what activities you want to take part in. However, keep in mind that the people at LTH will (most likely) not know anything about the nollning at LU. Regardless of what you choose to do, it is safe to say that you will have a lot of fun and meet plenty of new friends!",
				body3: "",
				body4: "",
				end: "Once again, we wish you a great time here in Lund and at LTH!",
				wish: "Best wishes, "
			},
			stab: {
				title: "Staben",
				ili: {
					name: "iliDDoS Lua.min"
				},
				ite: {
					name: "Iteroz TerraSeq"
				},
				azula: {
					name: "Azula Overfl0w"
				},
				drag: {
					name: "DraegOS Heapster"
				},
				airom: {
					name: "ai.ROM <VoidBorn>"
				}
			},
			nolleguide: {
				title: "Nolleguide!",
				text: "The Nolleguide is the definitive guide to your first weeks here at LTH. In it you'll find information about the introduction weeks, the guild, LTH and much much more. It is provided in physical form but you can also download it below!",
				download: "Download the Nolleguide"
			}
		}
	};

	body3 = () => {
	  return (
	         <Grid item >
						<Typography variant="body1" align="justify">{this.text[this.props.lang].intro.body3}</Typography>
					</Grid>
  				);
	}

	body4 = () => {
    return (
           <Grid item >
						<Typography variant="body1" align="justify">{this.text[this.props.lang].intro.body4}</Typography>
					</Grid>
    );
	}

	render() {
		return(
			<div id="multi">
				<Grid container direction="column" alignItems="center" justify="space-around" spacing={7}>
					<Grid item xs={10}>
						<Typography align='center' variant="h1">{this.text[this.props.lang].intro.title}</Typography>
					</Grid>
					<Grid container direction="row" alignItems="flex-start" justify="center" style={{ padding: 20 }}>
						<Grid container direction="column" alignItems="center" justify="space-evenly" item xs={10} md={6} spacing={4}>
							<Grid item >
								<Typography variant="body1" align="justify">{this.text[this.props.lang].intro.body1}</Typography>
							</Grid>
							<Grid item >
								<Typography variant="body1" align="justify">{this.text[this.props.lang].intro.body2}</Typography>
							</Grid>
							{ this.props.lang === "swe" ? this.body3() : null}
							{ this.props.lang === "swe" ? this.body4() : null}
							<Grid item >
								<Typography variant="body1" align="center">{this.text[this.props.lang].intro.end}</Typography>
								<Typography variant="body1" align="center">{this.text[this.props.lang].intro.wish} Staben</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={10} md={6} lg={4}>
						<Grid container direction="column" alignItems="center" justify="space-evenly" spacing={4}>
							<Grid item>
								<Typography id="nolleguide-text" align='center' variant="h3">{this.text[this.props.lang].nolleguide.title}</Typography>	
								<Typography align="justify" variant="body1">{this.text[this.props.lang].nolleguide.text}</Typography>
							</Grid>
							<Grid item>
								<Fab component="a" color="secondary" variant="extended" aria-label="Download guide" href="Nolleguiden19.pdf" download>
					        <Icon id="nolleguide-icon">cloud_download</Icon>
					        {this.text[this.props.lang].nolleguide.download}
								</Fab>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={10}>
						<Typography align='center' variant="h1">{this.text[this.props.lang].stab.title}</Typography>
					</Grid>
					<Grid item xs={10}>
						<Grid container direction="row" alignItems="flex-start" justify="space-evenly" spacing={2}>
							<Grid container direction="column" alignItems="center" item xs={10} sm={4} md={2}>
								<img className="logo" src={azula} alt="Logo" />
								<Divider></Divider>	
								<Typography variant="h3" align="center">{this.text[this.props.lang].stab.azula.name}</Typography>
							</Grid>
							<Grid container direction="column" alignItems="center" item xs={10} sm={4} md={2}>
								<img className="logo" src={ili} alt="Logo" />
								<Divider></Divider>
								<Typography variant="h3" align="center">{this.text[this.props.lang].stab.ili.name}</Typography>
							</Grid>
							<Grid container direction="column" alignItems="center" item xs={10} sm={4} md={2}>
								<img className="logo" src={ite} alt="Logo" />
								<Divider></Divider>
								<Typography variant="h3" align="center">{this.text[this.props.lang].stab.ite.name}</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={10}>
						<Grid container direction="row" alignItems="center" justify="space-evenly" spacing={2}>
							<Grid container direction="column" alignItems="center" item xs={10} sm={4} md={2}>
								<img className="logo" src={drag} alt="Logo" />
								<Divider></Divider>
								<Typography variant="h3" align="center">{this.text[this.props.lang].stab.drag.name}</Typography>
							</Grid>
							<Grid container direction="column" alignItems="center" item xs={10} sm={4} md={2}>
								<img className="logo" src={airom} alt="Logo" />
								<Divider></Divider>
								<Typography variant="h3" align="center">{this.text[this.props.lang].stab.airom.name}</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Multi;