const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler =  function(event, context, callback){
  const params = {
    TableName: 'Vines',
  };
  ddb.scan(params, function(err, data){
    if(err){
      callback(err, null);
    }else{
      callback(null,
        {
          statusCode: 200,
          body:JSON.stringify(data.Items),
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        });
    }
  });
};
