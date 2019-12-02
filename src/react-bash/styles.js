const BaseStyles = {};

BaseStyles.body = {
	flexGrow: 1,
	padding: '10px',
};

BaseStyles.prefix = {
	marginRight: '5px',
};

export default {
	light: {
		...BaseStyles,
		body: {
			...BaseStyles.body,
			backgroundColor: '#fff',
			color: '#5D5D5D',
		},
		header: { backgroundColor: '#eee' },
		prefix: { ...BaseStyles.prefix, color: '#bd081c' },
	},
	dark: {
		...BaseStyles,
		body: {
			...BaseStyles.body,
			backgroundColor: '#000',
			color: '#d0d0d0',
		},
		header: { backgroundColor: '#dcdbdb' },
		prefix: { ...BaseStyles.prefix, color: '#5b65fb' },
	},
};
