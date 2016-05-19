# salemove_helper
Non Official Helper for SaleMove REST API

## Visitor Helper

It is a small helper to get the visitor current visit. The visit can later be used by an integrator to update the visit's contact information.

Example.

```
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
```

## Operator Helper

It is a small helper to update a visitor custom attribures. It requires the operator to have a valid `API_TOKEN`.

Example.

```
sm.SMHelper.setup("TOKEN", "production");
sm.SMHelper.updateCustomAttributesForVisit(7823466, {"ATTRIBUTE_NAME": "ATTRIBUTE_VALUE"})
  .then(function(result){
    console.log(result)
  },
  function(error){
    console.log("An error ocurred: ", error)
  }
);
```


