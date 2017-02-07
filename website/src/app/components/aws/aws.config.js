(function() {
  'use strict';
  angular
    .module('ServerlessBlog')
    .constant('awsRegion','us-east-1')
    .constant('awsCognitoIdentityPoolId', 'us-east-1:e1266f2a-55eb-481c-9e70-ef9910e5712e')
    .config(config);

    function config(awsRegion,awsCognitoIdentityPoolId) {
    	var creds = AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    		IdentityPoolId: awsCognitoIdentityPoolId
    	});
    	AWS.config.update({
    		region: awsRegion,
    		credentials: creds
    	});
    };

})();
