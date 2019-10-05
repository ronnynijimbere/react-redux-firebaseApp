const initState = {
	projects: [
		{id: '1', title: 'master react and redux', content: 'study to best of my abilities'},
		{id: '2', title: 'master python', content: 'study to best of my abilities'},
		{id: '3', title: 'master flutter', content: 'study to best of my abilities'},
	]
}

const projectReducer = (state = initState, action) => {
	switch(action.type) {
		case 'CREATE_PROJECT':
			console.log('created project', action.project);
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('create project error', action.err);
			return state;
		default:
			return state;	
	}
	
}

export default projectReducer;