/* Creational Design Patterns */

/* Singleton */
//The singleton pattern restricts an object from instantiating more than once.
//It instantiates one instance from a class if one does not already exist.

//Example: A database connection pool to manage access to a resource shared by the whole application.

var firstSingleton = (function () {
  var instance;
  function createInstance() {
    var object = new Object("First instance");
    return object;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function execute() {
  var firstinstance = firstSingleton.getInstance();
  var secondinstance = firstSingleton.getInstance();
  console.log("Is it the same instance? " + (firstinstance === secondinstance));
}

execute();
