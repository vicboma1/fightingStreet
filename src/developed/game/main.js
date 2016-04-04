
(function() {
      console.log("Developed By Victor Bolinches Marin - May 2016");
      console.log("Welcome to Fighting Street for Web"); 
})();


window.onload = function() {   
      game = new Phaser.Game( 800, 600, Phaser.AUTO, "Fighting Street for Web", false, false);
      var fightingStreet = new FightingStreet();
      game.state.add(INTRO, fightingStreet);
      game.state.start(INTRO);
};


