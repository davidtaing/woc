const https = require('https')

let currentDate = new Date();
currentDate.setMonth(currentDate.getMonth() - 2);

console.log(currentDate);

const token = process.env.API_KEY; 
const options = {
    hostname: 'api.humanitix.com',
    path: '/v1/events?page=1&pageSize=100&since=' + currentDate.toISOString(),
    method: 'GET',
        headers: {
            'X-Api-Key': token
        }
}
console.log(options.path);
const getEvents = (req,res) => {
    https.get(options, (response) => {
        
        var result = '';
        response.on('data', function (chunk) {
            result += chunk;
        });

        response.on('end', function () {    
            var finalResponse=JSON.parse(result);
            
        res.status(200).json(result);
        });

    });

};

module.exports = {
    getEvents,
};


