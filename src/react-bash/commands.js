import * as Util from './util';
import { Errors } from './const';

const helpCommands = ['clear', 'ls', 'cat', 'mkdir', 'cd', 'pwd', 'echo', 'printenv', 'whoami', 'rm'];

export const help = {
  exec: (state) => {
    return {
      ...state,
      history: state.history.concat(
        { value: 'Following commands are available.' },
        ...helpCommands.map((value) => ({ value })),
      ),
    };
  },
};

export const clear = {
  exec: (state) => {
    return { ...state, history: [] };
  },
};

export const ls = {
  exec: (state, { flags, args }) => {
    const path = args[0] || '';
    const fullPath = Util.extractPath(path, state.cwd);
    const { err, dir } = Util.getDirectoryByPath(state.structure, fullPath);

    if (err) {
      return Util.appendError(state, err, path);
    }
    let content = Object.keys(dir);
    if (!flags.a) {
      content = content.filter((name) => name[0] !== '.');
    }
    if (flags.l) {
      return {
        ...state,
        history: state.history.concat(content.map((value) => {
          return { value };
        })),
      };
    }
    return { ...state, history: state.history.concat({ value: content.join(' ') }) };
  },
};

export const cat = {
  exec: (state, { args }) => {
    const path = args[0];
    const relativePath = path.split('/');
    const fileName = relativePath.pop();
    const fullPath = Util.extractPath(relativePath.join('/'), state.cwd);
    const { err, dir } = Util.getDirectoryByPath(state.structure, fullPath);
    if (err) {
      return Util.appendError(state, err, path);
    } if (!dir[fileName]) {
      return Util.appendError(state, Errors.NO_SUCH_FILE, path);
    } if (!dir[fileName].hasOwnProperty('content')) {
      return Util.appendError(state, Errors.IS_A_DIRECTORY, path);
    }
    const content = dir[fileName].content.replace(/\n$/, '');
    const lines = content.split('\n').map((value) => ({ value }));
    return { ...state, history: state.history.concat(lines) };
  },
};

export const mkdir = {
  exec: (state, { args }) => {
    const path = args[0];
    const relativePath = path.split('/');
    const newDirectory = relativePath.pop();
    const fullPath = Util.extractPath(relativePath.join('/'), state.cwd);
    const deepCopy = JSON.parse(JSON.stringify(state.structure));
    const { dir } = Util.getDirectoryByPath(deepCopy, fullPath);

    if (dir[newDirectory]) {
      return Util.appendError(state, Errors.FILE_EXISTS, path);
    }
    dir[newDirectory] = {};
    return { ...state, structure: deepCopy };
  },
};

export const cd = {
  exec: (state, { args }) => {
    const path = args[0];
    if (!path || path.startsWith('/')) {
      return { ...state, cwd: path.split('/')[1] };
    }

    const fullPath = Util.extractPath(path, state.cwd);
    const { err } = Util.getDirectoryByPath(state.structure, fullPath);

    if (err) {
      return Util.appendError(state, err, path);
    }
    return { ...state, cwd: fullPath };
  },
};

export const pwd = {
  exec: (state) => {
    const directory = `/${state.cwd}`;
    return { ...state, history: state.history.concat({ value: directory }) };
  },
};

export const echo = {
  exec: (state, { input }) => {
    const ECHO_LENGTH = 'echo '.length;
    const envVariables = Util.getEnvVariables(state);
    const value = input.slice(ECHO_LENGTH).replace(/(\$\w+)/g, (key) => {
      return envVariables[key.slice(1)] || '';
    });
    return { ...state, history: state.history.concat({ value }) };
  },
};

export const printenv = {
  exec: (state) => {
    const envVariables = Util.getEnvVariables(state);
    const values = Object.keys(envVariables).map((key) => {
      return { value: `${key}=${envVariables[key]}` };
    });
    return { ...state, history: state.history.concat(values) };
  },
};

export const whoami = {
  exec: (state) => {
    const value = state.settings.user.username;
    return { ...state, history: state.history.concat({ value }) };
  },
};

export const rm = {
  exec: (state, { flags, args }) => {
    const path = args[0];
    const relativePath = path.split('/');
    const file = relativePath.pop();
    const fullPath = Util.extractPath(relativePath.join('/'), state.cwd);
    const deepCopy = JSON.parse(JSON.stringify(state.structure));
    const { dir } = Util.getDirectoryByPath(deepCopy, fullPath);

    if (dir[file]) {
      // folder deletion requires the recursive flags `-r` or `-R`
      if (!Util.isFile(dir[file]) && !(flags.r || flags.R)) {
        return Util.appendError(state, Errors.IS_A_DIRECTORY, path);
      }
      delete dir[file];
      return { ...state, structure: deepCopy };
    }
    return Util.appendError(state, Errors.NO_SUCH_FILE, path);
  },
};
