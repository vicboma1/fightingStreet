////////////////////////////////////////////////////////////////////////////////////   BACKGROUND LOGO

var Logo = function Logo(){
    this.LOGO = "logo2.png";
    this.getSprite = function(){ return this.sprite; };
    this.setSprite = function(sprite){ this.sprite = sprite; };
};

Logo.prototype.constructor = Logo;

Logo.prototype = {
    create: function() {
        var sprite = game.add.sprite(0,0,ATLAS, this.LOGO);
        sprite.anchor.set(0.5);
        sprite.visible = false;

        this.setSprite(sprite);
    },
    animation : function(resolved){
        var sprite = this.getSprite();

        var tweenPositionLogo_01 = game.add.tween(sprite)
            .to(
                { x: game.world.centerX +25, y :game.world.centerY - 20},
                10,
                Phaser.Easing.Linear.None,
                true,
                1100
            );

        tweenPositionLogo_01.onComplete.addOnce(function(_logo){
            sprite.scale.setTo(0.37,0.36);
            tweenPositionLogo_01.stop();
            game.tweens.remove(tweenPositionLogo_01);

            tweenPositionLogo_02.start();
        }, this);


        var tweenPositionLogo_02 = game.add.tween(sprite)
            .to(
                { x: game.world.centerX , y :game.world.centerY-sprite.height-40 },
                5,
                Phaser.Easing.Linear.None,
                false,
                500
            );

        tweenPositionLogo_02.onComplete.addOnce(function(_logo){
            sprite.scale.setTo(0.45,0.42);
            tweenPositionLogo_02.stop();
            game.tweens.remove(tweenPositionLogo_02);

            tweenPositionLogo_03.start();

        }, this);


        var tweenPositionLogo_03 = game.add.tween(sprite)
            .to(
                {x: game.world.centerX, y :game.world.centerY-sprite.height-110 },
                5,
                Phaser.Easing.Linear.None,
                false,
                500
            );

        tweenPositionLogo_03.onComplete.addOnce(function(_logo){
            sprite.scale.setTo(0.75,0.62);
            tweenPositionLogo_03.stop();
            game.tweens.remove(tweenPositionLogo_03);

            resolved("");

        }, this);
    },

    newScene : function (){
        var sprite = this.getSprite();

        var tweenPositionLogo_04 = game.add.tween(sprite)
            .to(
                { x: game.world.centerX+20, y :game.world.centerY - 110 },
                5,
                Phaser.Easing.Linear.None,
                true
            );

        tweenPositionLogo_04.onComplete.addOnce(function(_logo){
            sprite.scale.setTo(1);
            tweenPositionLogo_04.stop();
            game.tweens.remove(tweenPositionLogo_04);

        }, this);
    }
};
