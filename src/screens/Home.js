/* eslint-disable no-tabs */
import React from 'react';
import Terminal from '../react-bash';
import '../assets/styles/screens/_home.scss';

const cmdHistory = [
  { value: 'Type `help` to begin, clear to clear the screen' },
];
const fileStructure = {
  experience: {
    janelaaj: {
      content: 'Site: janelaaj.com\n'
				+ 'Timeline: MAY  2019 - NOVEMBER 2019\n'
				+ 'Description: Jan Elaaj provides affordable healthcare services to people in their neighborhood\n'
				+ 'Role: '
				+ '1. Worked in a team of 3 and built the Jan Elaaj website from scratch\n'
				+ '2. Designed graphics for Jan Elaaj website using Adobe Photoshop\n'
				+ '3. Implemented logging in the server using Google Cloud Stackderive Logging\n'
				+ '4. Migrated backend infrastructure to Google App Engine and Google SQL\n'
				+ '5. Tech Stack:- ReactJS, Reactstrap, React-Redux, Node, Express, MySQL, Google Cloud Platform, Firebase',
    },
    JICS: {
      content: 'Site: jicsindia.com\n'
				+ 'Timeline: JUNE 2017  - JANUARY 2018\n'
				+ 'Description: JICS helps students learn and grow their technical skills\n'
				+ 'Role: '
				+ '1. Trained 30+ students on Linux and CyberSecurity\n'
				+ '2. Configured PXE, TFTP, and DNSMASQ servers to automate the installation of Linux OS on multiple PCs at same time',
    },
    techvictus: {
      content: 'Site: techvictus.com\n'
				+ 'Timeline: SEPTEMBER 2016  - FEBRUARY 2017\n'
				+ 'Description: Techvictus provides IT-based services to virtualized desktop applications.\n'
				+ 'Role: '
				+ '1. Implemented Open Virtual Desktop (OVD) architecture and it’s components for companies like Tata Consultancy Services, BEL, etc\n'
				+ '2. Wrote shell scripts to automate the OVD implementation'
				+ '3. Conducted 15+ professional workshops on various IT topics for EICT Academy and IIT Guwahati',
    },
  },
  projects: {
    Asteroids: {
      content: 'link - http://www.codeskulptor.org/#user45_ZjArGzFXp0_0.py\n'
				+ 'Description: It\'s a game written in Python, click on the play button and enjoy',
    },
    BlackJack: {
      content: 'link - http://www.codeskulptor.org/#user41_PF9mV1IXs9_3.py\n'
				+ 'Description: It\'s a classic casino game written in Python, click on the play button and enjoy',
    },
    Memory: {
      content: 'link - http://www.codeskulptor.org/#user41_iBmhXjsS2W_0.py\n'
				+ 'Description: It\'s a memory game written in Python, click on the play button and enjoy',
    },
    Pong: {
      content: 'link - http://www.codeskulptor.org/#user41_V334p6Ils0_3.py\n'
				+ 'Description: It\'s the classic ping pong game written in Python, click on the play button and enjoy',
    },
  },
  skills: {
    'programming-languages': { content: 'Javascript, Java' },
    FrontEnd: { content: 'ReactJS, Reactstrap, Bootstrap' },
    BackEnd: { content: 'Nodejs, Express Server, Loopback Server' },
    Database: { content: 'MongoDb, MySQL' },
    Linux: { content: 'Debian, Arch Linux, Red Hat' },
    Cloud: { content: 'Google Cloud Platform' },
    Misc: { content: 'Adobe Photoshop' },
  },
  contact: {
    Phone: { content: '+91 9529593182' },
    Email: { content: 'basantech89@gmail.com' },
    Linkedin: { content: 'http://www.linkedin.com/in/basant-soni-942581103' },
    Github: { content: 'https://github.com/basantech89' },
  },
  certifications: {
    Java: {
      content: 'Java Programming: Solving Problems With Software by Duke University\n'
				+ 'Verify - https://www.coursera.org/account/accomplishments/certificate/JUUXDF2NHT63',
    },
    'Responsive-Design': {
      content: 'Advanced Styling with Responsive Design by University of Michigan\n'
				+ 'Verify - https://www.coursera.org/account/accomplishments/certificate/NZ2LSJPHZSH2',
    },
    'Trainer-Certificates': { content: 'CyberSecurity trainer certificate by EICT Academy, IIT Guwahati' },
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

class Home extends React.PureComponent {
  render() {
    return (
      <div className="container" style={{ fontSize: 18, lineHeight: 1.9 }}>
        <div className="stars" />
        <div className="twinkling" />
        <Terminal
          history={cmdHistory}
          structure={fileStructure}
          extensions={extensions}
          theme={Terminal.Themes.DARK}
        />
      </div>
    );
  }
}

export default Home;
