//After injectin the ../src/visitor_helper.js
//
sm.getApi().then(
  function(api){
    sm.SMHelper.setup(api, "production");
    sm.SMHelper.getCurrentVisit()
      .then(function(visit){
        console.log("Visit ID: ", visit['id'])
      },
      function(error){
        console.log("An error ocurred: ", error)
      }
    );
  },
  function(err){ console.log("An error occured: ", err)}
);


