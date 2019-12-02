import React from 'react';
import Modal from "../components/Modal";
import Terminal from '../react-bash';
import '../assets/styles/screens/_home.scss';
import projectIcon from '../assets/icons/laptop-code-solid.svg';
import skillIcon from '../assets/icons/skull-solid.svg';
import contactIcon from '../assets/icons/user-secret-solid.svg';

const cmdHistory = [
	{ value: 'Type `help` to begin, clear to clear the screen' },
];
const fileStructure = {
	projects: {
		janelaaj: { content: 'Site: janelaaj.com\nFrontend: Reactjs with Redux\nBackend: Express Server\nRole: - I developed all the frontend code, modified the ' +
				'Nodejs backend to make use of express server and migrated it to Google App Engine, also migrated MySQL servers to Google SQL Instance' },
		'confusion Restaurant': { content: 'github - https://github.com/basantech89/code_monk/tree/master/web_dev/HKU_FSWDRS/C2_React/confusion\n' +
				'Frontend: Reactjs with redux\nBackend: Nodejs, Express Server\nDatabase: MongoDB and Google Firebase' },
		Asteroids: { content: 'link - http://www.codeskulptor.org/#user45_ZjArGzFXp0_0.py\n' +
				'Description: It\'s a game written in Python, navigate to link, click on the play button and enjoy'},
		BlackJack: { content: 'link - http://www.codeskulptor.org/#user41_PF9mV1IXs9_3.py\n' +
				'Description: It\'s a classic casino game written in Python, navigate to link, click on the play button and enjoy'},
		Memory: { content: 'link - http://www.codeskulptor.org/#user41_iBmhXjsS2W_0.py\n' +
				'Description: It\'s a memory game written in Python, navigate to link, click on the play button and enjoy'},
		Pong: { content: 'link - http://www.codeskulptor.org/#user41_V334p6Ils0_3.py\n' +
				'Description: It\'s the classic ping pong game written in Python, navigate to link, click on the play button and enjoy'},
		'Other Python Projects': { content: 'link - https://github.com/basantech89/code_monk/tree/master/python\n' +
				'Description: Other python projects, feel free to visit'},
		'Java Projects': { content: 'link - https://github.com/basantech89/code_monk/tree/master/java\n' +
				'Description: Other python projects, feel free to visit'},
	},
	skills: {
		Javascript: { content: 'Intermediate' },
		FrontEnd: { content: 'ReactJS, ReactNative, Reactstrap, Bootstrap' },
		BackEnd: { content: 'Nodejs, Express Server, Loopback Server' },
		Database: { content: 'MongoDb, MySQL' },
		Linux: { content: 'RHCSA, RHCE, Debian, Arch Linux, Red Hat' },
		CyberSecurity: { content: 'CEH, Ethical Hacker, Penetration Tester' },
		Cloud: { content: 'Google Cloud' },
		Misc: { content: 'Adobe Photoshop' },
	},
	certifications: {
		Java: { content: 'Java Programming: Solving Problems With Software by Duke University\n' +
				'Verify - https://www.coursera.org/account/accomplishments/certificate/JUUXDF2NHT63' },
		'Responsive Design': { content: 'Advanced Styling with Responsive Design by University of Michigan\n' +
				'Verify - https://www.coursera.org/account/accomplishments/certificate/NZ2LSJPHZSH2' },
		'Trainer Certificates': { content: 'CyberSecurity trainer certificate by EICT Academy, IIT Guwahati' },
	},
};

const extensions = {
	sudo: {
		exec: ({ structure, history, cwd }) => ({
			structure,
			cwd,
			history: history.concat({ value: 'Nice try...' }),
		}),
	},
};

class Home extends React.Component {
	state = { showModal: false };

	toggleModal = () => this.setState({ showModal: !this.state.showModal });

	render() {
		return (
			<div className="container" style={{ fontSize: 18, lineHeight: 1.9 }}>
				<div className="stars" />
				<div className="twinkling" />
				<Modal showModal={this.state.showModal} />
				<Terminal
					history={cmdHistory}
					structure={fileStructure}
					extensions={extensions}
					theme={Terminal.Themes.DARK}
				/>
				<div className="icons">
					<div>
						<img id="projects" src={projectIcon} alt="project-icon" /> <br/>
						<label className="icon-labels" htmlFor="projects"> Projects </label>
					</div>
					<div onClick={this.toggleModal}>
						<img id="skills" src={skillIcon} alt="skills-icon" /> <br/>
						<label className="icon-labels" htmlFor="skills"> Skills </label>
					</div>
					<div>
						<img id="contact" src={contactIcon} alt="contact-icon" /> <br/>
						<label className="icon-labels" htmlFor="contact"> Contact </label>
					</div>
				</div>
			</div>
		);
	}
};

export default Home;
