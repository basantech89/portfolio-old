const BaseStyles = {};

BaseStyles.body = {
    flexGrow: 1,
    overflowY: 'scroll',
    padding: '10px',
};

BaseStyles.prefix = {
    marginRight: '5px',
};

export default {
    light: Object.assign({}, BaseStyles, {
        body: Object.assign({}, BaseStyles.body, {
            backgroundColor: '#fff',
            color: '#5D5D5D',
        }),
        header: Object.assign({}, BaseStyles.header, {
            backgroundColor: '#eee',
        }),
        prefix: Object.assign({}, BaseStyles.prefix, {
            color: '#bd081c',
        }),
    }),
    dark: Object.assign({}, BaseStyles, {
        body: Object.assign({}, BaseStyles.body, {
            backgroundColor: '#000',
            color: '#d0d0d0',
        }),
        header: Object.assign({}, BaseStyles.header, {
            backgroundColor: '#dcdbdb',
        }),
        prefix: Object.assign({}, BaseStyles.prefix, {
            color: '#5b65fb',
        }),
    }),
};
