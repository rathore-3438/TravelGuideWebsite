const axios = require('axios')
const fetchQuotes = async () => {
	try {
		const res = await axios.get(
			`https://ai-trip-planner.p.rapidapi.com/`,
			{
				headers: {
					'x-rapidapi-host': 'ai-trip-planner.p.rapidapi.com',
					'x-rapidapi-key': 'dc66c7ea2emsha6c7a2e618149d4p17da80jsn5c1e1cd8cb27'
				},
				params: {days: '3', destination: 'London,UK'}
			}
		);
	} catch (err) {
		console.log(err);
	}
    // console.log(res);
};