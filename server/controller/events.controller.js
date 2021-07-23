const https = require('https')

const token = "ea07fcc46f8a244a4d349d4fa2d12efb906f811670f644be5432219bf5c9c3b4dc2603a6ad3aa2bf79eb1fb78b77e769f409f21b7a79dc03271e254fd4d355f4736f09fd82da1736d741443d9f783e2d8ff05a138ebab3add84662855501b5a9f0efb446aa01aed430dfc16aadccef"; 
        
        // TODO hide this somehow

const options = {
    hostname: 'api.humanitix.com',
    path: '/v1/events?page=1&pageSize=100&since=2021-02-01T23%3A26%3A13.485Z',
    method: 'GET',
        headers: {
            'X-Api-Key': token
        }
}

const getEvents = (req,res) => {
   
    https.get(options, (response) => {
        var result = '';
        response.on('data', function (chunk) {
            result += chunk;
        });

        response.on('end', function () {    
            var finalResponse=JSON.parse(result);
            
        res.status(200).json(result);
        console.log(result);
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