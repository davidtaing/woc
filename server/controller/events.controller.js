const https = require('https')

const token = ""; 
        
        // TODO hide this somehow

const options = {
    hostname: 'api.humanitix.com',
    path: '/v1/events?page=1&pageSize=100&since=2021-02-01T23%3A26%3A13.485Z',
    method: 'GET',
        headers: {
            'X-Api-Key': token
        }
}

const getEvents = () => {
   
    
    return https.get(options, (response) => {
        var result = ''
        response.on('data', function (chunk) {
           


            result += chunk;
        });

        response.on('end', function () {    
            
        console.log(result);
            return result;
            console.log("-------------");
        });

    });

};




module.exports = {
    getEvents,
};


// https.get('https://api.humanitix.com/v1/events?page=1&pageSize=100&since=2021-02-01T23%3A26%3A13.485Z', (resp) => {
//   let data = '';
//     console.log('asdasd');
//   // A chunk of data has been received.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });