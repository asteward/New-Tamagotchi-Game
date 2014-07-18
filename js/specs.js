describe("Tamagotchi", function() {
  describe("initialize", function() {
    it("sets the name and a few other properties", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.name.should.equal("lil dragon");
      myPet.foodLevel.should.equal(10);
      myPet.sleepLevel.should.equal(10);
      myPet.activityLevel.should.equal(10);
    });
  });

  describe("timePasses", function() {
    it("decreases the amount of food the Tamogatchi has left by 1", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.timePasses();
      myPet.foodLevel.should.equal(9);
      myPet.sleepLevel.should.equal(9);
      myPet.activityLevel.should.equal(9);
    });
  });

  describe("isAlive", function() {
    it("is alive if the food level is above 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.isAlive().should.equal(true);
    });

    it("is dead if the food level is 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.foodLevel = 0;
      myPet.isAlive().should.equal(false);
    });
  });
});
