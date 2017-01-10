(function(root){
  SMHelper = {};
  SMHelper.API_DOMAINS = {
    "production": "api.salemove.com",
    "beta": "api.beta.salemove.com",
    "local": "api.local.dev"
  };

  SMHelper.setup = function(api, environment){
    if (!api) {  throw("Api is required"); }
    if (!environment) {
      console.warn("Environment was not provided. Setting default to local");
      environment = "local";
    }
    SMHelper.API_DOMAIN = SMHelper.API_DOMAINS[environment];
    SMHelper.HEADERS = api.getRequestHeaders();
  };

  SMHelper.getCurrentVisit = function() {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://'+ SMHelper.API_DOMAIN + "/visitor/visit");
      Object.keys(SMHelper.HEADERS).forEach(function(key) {
        xhr.setRequestHeader(key, SMHelper.HEADERS[key]);
      });
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
         resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = function() { reject(xhr.statusText); };
      xhr.send();
    });
  };

  SMHelper.getCurrentVisitor = function() {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://'+ SMHelper.API_DOMAIN + "/visitor");
      Object.keys(SMHelper.HEADERS).forEach(function(key) {
        xhr.setRequestHeader(key, SMHelper.HEADERS[key]);
      });
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = function() { reject(xhr.statusText); };
      xhr.send();
    });
  };

  SMHelper.updateVisitorInformation = function(name, email, phone, attributes){
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://'+ SMHelper.API_DOMAIN + "/visitor");
      Object.keys(SMHelper.HEADERS).forEach(function(key) {
        xhr.setRequestHeader(key, SMHelper.HEADERS[key]);
      });
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
         resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = function() { reject(xhr.statusText); };
      xhr.send(
        JSON.stringify({
          'note_update_method': 'append',
          'custom_attributes': attributes,
          'name': name,
          'email': email,
          'phone': phone
        })
      );
    });
  }

  root.SMHelper = SMHelper;
})(sm);
