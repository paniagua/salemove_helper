//After injecting ../src/operator_helper.js

sm.SMHelper.setup("TOKEN", "production");
sm.SMHelper.updateCustomAttributesForVisit(7823466, {"ATTRIBUTE_NAME": "ATTRIBUTE_VALUE"})
  .then(function(result){
    console.log(result)
  },
  function(error){
    console.log("An error ocurred: ", error)
  }
);
