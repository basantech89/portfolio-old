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
		janelaaj: { content: 'site: janelaaj.com' },
		file2: { content: 'The is the content for file2 in the <public> directory.' },
		file3: { content: 'The is the content for file3 in the <public> directory.' },
	},
	skills: {
		Javascript: { content: 'Content for this file' },
	},
	'README.md': { content: 'Hello There' },
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
