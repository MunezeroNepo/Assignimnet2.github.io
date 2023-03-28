(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    var byeSpeaker = {
      speak: function(nametobye){
          console.log("Good bye " + nametobye)
      }
    };
    var helloSpeaker = {
      speak: function(nametogreet){
         console.log("Hello " + nametogreet)
      }
    };

    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
    
})();