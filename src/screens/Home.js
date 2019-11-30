import React, { useState, useEffect } from 'react';
import '../assets/styles/screens/_home.scss'
import Terminal from "../react-bash";
import DropDown from "../components/DropDown";

const history = [
  { value: 'Type `help` to begin' },
];
const structure = {
  public: {
    file1: { content: 'The is the content for file1 in the <public> directory.' },
    file2: { content: 'The is the content for file2 in the <public> directory.' },
    file3: { content: 'The is the content for file3 in the <public> directory.' },
    projects: {
      'Astroids': { content: 'Content for this file' },
    },
    '.hiddenFile': { content: 'its a hidden file' }
  },
  'README.md': { content: 'Hello There' },
};

const Home = () => {
  const extensions = {
    sudo: {
      exec: ({ structure, history, cwd }) => {
        return { structure, cwd,
          history: history.concat({ value: 'Nice try...' }),
        };
      },
    },
  };

  return (
    <div className="container" style={{ fontSize: 18, lineHeight: 1.9 }}>
      {/* <DropDown style={{ display: 'flex', justifyContent: 'center' }} /> */}
      <Terminal history={history}
                structure={structure}
                extensions={extensions}
                theme={Terminal.Themes.DARK}
                prefix="Basant@HOME" />
    </div>
  );
};

export default Home;
