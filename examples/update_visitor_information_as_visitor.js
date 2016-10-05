sm.getApi().then(
  function(api){
    sm.SMHelper.setup(api, "beta");
    sm.SMHelper.updateVisitorInformation("Carlos", "carlos@salemove.com", "+37256861665", {})
      .then(function(result){
        console.log("Result: ", result);
      },
      function(error){
        console.log("An error ocurred: ", error)
      }
    );
  },
  function(err){ console.log("An error occured: ", err)}
);
