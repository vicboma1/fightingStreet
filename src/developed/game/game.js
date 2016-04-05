var game = null;
var INTRO = "intro";
var ATLAS = "atlas";
var HERO_ANIMATION = "heroAnimation";
var HERO_ANIMATION_BACK = "heroAnimationBack";
var WALL_ANIMATION = "wallAnimation";
var PUNCH_WALL = "punchWall";

////////////////////////////////////////////////////////////////////////////////////   CONTROLLER

var FightingStreet = function FightingStreet() { 
}

FightingStreet.prototype.constructor = FightingStreet;

FightingStreet.prototype = {
  preload: function (){
    this.banner = new Banner(new Utils());
    this.assets = new Assets();
    this.wall =  new Wall(new Hero(), new Logo(), this.banner);
  },
  create: function() {
    this.assets.create();
    this.wall.create();
    this.banner.create();
    this.wall.setBanner(this.banner);
  
    setTimeout(function(_this){ _this.play(); }, 1200, this);              
  },  
  play : function(){
    this.banner.getPushButton().visible = true;
    this.wall.getAnimation().play(WALL_ANIMATION);
  },
  update: function() {
    this.wall.update();
    this.banner.update();
  },
  render : function(){
  },
  destroy: function() {
  }

};
