////////////////////////////////////////////////////////////////////////////////////   GAME ASSETS
var atlas = null;

var Assets = function Assets(){
    this.ATLAS_GAME = "assets/fightingStreet.png";
    this.ATLAS_JSON_HASH_GAME = "assets/fightingStreet.json";
    if(atlas == null)
    	atlas = game.load.atlas(ATLAS, this.ATLAS_GAME,  this.ATLAS_JSON_HASH_GAME , Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);   
};

Assets.prototype.constructor = Assets;

Assets.prototype = {
    create: function(){
       
    }
};