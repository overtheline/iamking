const csvtojson = require('csvtojson');

const inputFile = './input-files/financial_data_2000_2018_cleaned.csv';

function convertToJson(): Promise<any> {
	console.log('converting to json');
	return new Promise((resolve, reject) => {
		csvtojson()
			.fromFile(inputFile)
			.then(
				(json: any) => {
					console.log(`done converting: ${json.length}`);
					resolve(json);
				},
				(err: any) => {
					console.log(`there was a problem: ${err}`);
					reject(err);
				}
			);
	});
}

convertToJson()
	.then(json => { console.log(`done: ${json.length}`); })
	.catch(err => { console.log(err); });
