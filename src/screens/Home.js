import React, { useState, useEffect } from 'react';
import Terminal from 'react-bash';
import '../assets/styles/screens/_home.scss'

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

const Home = (props) => {
  const { primary } = props;
  const chars = ['h', 'a', 'c', 'k', '0', '~', '!', '#', '$'];
  const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];
  const [char, setChar] = useState(getRandomChar());
  const showMsg = () => 'Hello World';

  useEffect(() => {
    if (primary || Math.random() > 0.95) {
      makeSymbolDynamic();
    }
  });

  const makeSymbolDynamic = () => {
    setInterval(() => {
      setChar(getRandomChar(), 500);
    });
  };

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
    <div className="container" style={{ fontSize: 20, lineHeight: 1.9 }}>
      <Terminal history={history}
      structure={structure} 
      extensions={extensions} 
      theme={Terminal.Themes.DARK} 
      prefix="Basant@HOME" />
    </div>
  );
};

export default Home;
