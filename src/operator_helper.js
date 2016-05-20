(function(root){
  SMHelper = {};
  SMHelper.API_DOMAINS = {
    "production": "api.salemove.com",
    "beta": "api.beta.salemove.com",
    "local": "api.local.dev"
  };

  SMHelper.setup = function(operatorToken, environment){
    if (!operatorToken) { throw("An operator token is required"); }
    if (!environment) {
      console.warn("Environment was not provided. Setting default to local");
      environment = "local";
    }
    SMHelper.API_DOMAIN = SMHelper.API_DOMAINS[environment];
    SMHelper.HEADERS = {
      'Authorization': 'Token ' + operatorToken,
      'Accept': 'application/vnd.salemove.v1+json'
    };
  };

  SMHelper.updateCustomAttributesForVisit = function(id, attributes) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('PUT', 'https://'+ SMHelper.API_DOMAIN +'/operator/visits/' + id + '/contact_information');
      Object.keys(SMHelper.HEADERS).forEach(function(key) {
        xhr.setRequestHeader(key, SMHelper.HEADERS[key]);
      });
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
         resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = function() { reject(xhr.statusText); };

      xhr.send(JSON.stringify({
        'custom_attributes': attributes,
        'note_update_method':'append'
      }));
    });
  };

  root.SMHelper = SMHelper;
}
)(sm);
