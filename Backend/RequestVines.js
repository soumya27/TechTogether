const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const randomBytes = require('crypto').randomBytes;

exports.handler = async (event) => {

  const rideId = toUrlString(randomBytes(16));
  const requestBody = JSON.parse(event.body);
  const url = requestBody.url;
  const tags = requestBody.tags;
  const description = requestBody.description;
  var response;

  await recordVine(url,rideId,tags,description).then(function(data) {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        vineId: rideId,
        url: url
      }),
    };
  }).catch(function(err) {
    response =  {
      statusCode: 400,
      body: JSON.stringify({
        error: err
      }),
    };
  });
  return response;
};

function toUrlString(buffer) {
  return buffer.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

function recordVine(url, rideId, tags, description) {
  // TODO call another function to parse and get tags
  // add tags to the db item
  // call another function to transcribe and sentiments
  // add description and dialogues to the db item
  console.log(url);
  const param = {
    TableName: 'Vines',
    Item: {
      vineId: rideId,
      url: url,
      tags: tags,
      description: description,
      createdDate: new Date().toISOString(),
    },
  };
  return ddb.put(param).promise()
}
