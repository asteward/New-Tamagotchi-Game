var Tamagotchi = {
  initialize: function (petName) {
    this.name = petName;
    this.foodLevel = 100;
    this.sleepLevel = 100;
    this.activityLevel = 100;
  },
  timePasses: function () {
    this.foodLevel--;
    this.sleepLevel--;
    this.activityLevel--;
  },
  isAlive: function () {
    if (this.foodLevel < -10) {
      return "starvation";
    } else if (this.sleepLevel < -10) {
      return "sleep deprivation";
    } else  if (this.activityLevel < -10) {
      return "boredom";
    } else {
      return "alive";
    }
  }
}

$(document).ready(function() {
  var gameplayChecker = true;
  $(".form-group").show();
  $("form#new-name").submit(function(event){
    $(".row").show();
    $(".form-group").hide();
    var newPet = Object.create(Tamagotchi);
    newPet.initialize($("input#name").val());
    $("h2.pet-name").text(newPet.name);
    event.preventDefault();

    setInterval(function () {
      newPet.timePasses();
      $(".progress-food").children().attr("aria-valuenow", newPet.foodLevel);
      $(".progress-food").children().attr("style", "width: " + newPet.foodLevel + "%");
      $(".progress-sleep").children().attr("aria-valuenow", newPet.sleepLevel);
      $(".progress-sleep").children().attr("style", "width: " + newPet.sleepLevel + "%");
      $(".progress-activity").children().attr("aria-valuenow", newPet.activityLevel);
      $(".progress-activity").children().attr("style", "width: " + newPet.activityLevel + "%");
      if((newPet.isAlive() !== "alive") && (gameplayChecker === true)) {
        gameplayChecker = false;
        $(".jumbotron").slideUp("slow", function() {});
        $(".gameplay").slideUp("slow", function() {});
        $(".game-over").fadeIn();
        $(".dead-pet-name").text(newPet.name);
        $(".death-cause").text(newPet.isAlive());
        $(".grave").fadeIn();

      }
    }, 100);

    $("button#button-feed").click(function(event) {
      newPet.foodLevel+=5;
      if(newPet.foodLevel > 105)
        newPet.foodLevel=100;
    });
    $("button#button-sleep").click(function(event) {
      newPet.sleepLevel+=5;
      if(newPet.sleepLevel > 105)
        newPet.sleepLevel=100;
    });
    $("button#button-activity").click(function(event) {
      newPet.activityLevel+=5;
      if(newPet.activityLevel > 105)
        newPet.activityLevel=100;
    });
  });
});
