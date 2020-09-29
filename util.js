/* Contains functions that are accessed by multiple functions in the handlers. */

var db = require('./connectDB');

module.exports = {
	// Make a query to the database
	sqlQuery: (query) => {
		return new Promise((resolve, reject) => {
			db.query(
				{
					sql: query
				},
				(error, result) => {
					if (error) {
						reject(error);
					}
					resolve(result);
				}
			);
		});
	},
	// Checks if a parameter has been passed with the query
	checkParameter: (param, res) => {
		if (!param) {
			return res.status(400).json({
				success: 0,
				data: 'Must submit correct parameters to query.'
			});
		} else return 0;
	},

	// Checks if the given data exists in the database
	checkResult: (result, res) => {
		if (!result) {
			return res.status(404).json({
				success: 0,
				data: 'No such entry in the database.'
			});
		} else return 0;
	}
};
