// =============== Game Object Constructor ===============
function Game() {
    this.score = 0;
    this.speed = 100;
    this.starter = "";
};
Game.prototype.gameInitiator = function() {
    mySnake.startSnakeMove();
    mySnake.isSnakeHitTheBorder();
    mySnake.isSnakeBittinItself();
    snakeFood.isFoodEaten();
    myGame.displayPoints()  
}
Game.prototype.start = function() {
    starter = setInterval(this.gameInitiator, this.speed);
};
Game.prototype.pause = function() {
    clearInterval(starter);
};
Game.prototype.setScore = function() {
    this.score += 1;
};
Game.prototype.getScore = function() {
    return this.score;
};
Game.prototype.displayPoints = function() {
    $(".points").text(this.getScore());
}
Game.prototype.restart = function() {
    $(".box").html("<div class='food'></div>");
    $(".box").prepend("<div class='snake snake0' style='top: 40px; left: 0px'></div>");
    $(".box").prepend("<div class='snake snake1' style='top: 30px; left: 0px'></div>");
    $(".box").prepend("<div class='snake snake2' style='top: 20px; left: 0px'></div>");
    $(".box").prepend("<div class='snake snake3' style='top: 10px; left: 0px'></div>");
    $(".box").prepend("<div class='snake snake4' style='top: 0px; left: 0px'></div>");
    this.score = 0;
    this.pause();
    snakeFood.changeFoodPosition();
    mySnake.resetLength();
    mySnake.setDirection("bottom");
};
var myGame = new Game();

// =============== Snake Object Constructor ===============
function Snake() {
    this.lent = 5;
    this.direction = "bottom";
    this.positionXToInherit = "";
    this.positionYToInherit = "";
}
Snake.prototype.getSnakeHeadPositionX = function () {
    return $(".snake0").css("left");
};
Snake.prototype.getSnakeHeadPositionY = function() {
    return $(".snake0").css("top");
};
Snake.prototype.getLength = function() {
    return this.lent + myGame.getScore();
};
Snake.prototype.resetLength = function() {
    this.lent = 5;
}
Snake.prototype.setDirection = function(direction) {
    this.direction = direction;
};
Snake.prototype.getDirection = function() {
    return this.direction;
};
Snake.prototype.getSnakeFullBodyPositionX = function() {
    var posx = [], x = "";
    for (x = this.getLength() - 1; x > 0; x--) {
        posx.push(parseInt($(".snake" + x).css("left")));
    }
    return posx;
};
Snake.prototype.getSnakeFullBodyPositionY = function() {
    var posy = [], y = "";
    for (y = this.getLength() - 1; y > 0; y--) {
        posy.push(parseInt($(".snake" + y).css("top")));
    }
    return posy;
};
Snake.prototype.setPositionXToInherit = function(positionXToInherit) {
    this.positionXToInherit = positionXToInherit;
}
Snake.prototype.setPositionYToInherit = function(positionYToInherit) {
    this.positionYToInherit = positionYToInherit;
}
Snake.prototype.getPositionXToInherit = function() {
    return this.positionXToInherit;
}
Snake.prototype.getPositionYToInherit = function() {
    return this.positionYToInherit;
}

Snake.prototype.startSnakeMove = function() {
    //alert(this.getDirection());
    switch(this.getDirection()) {
        case "top":
            for (i = 0; i < this.getLength(); i++) {
                if (i == 0) {
                    this.setPositionXToInherit($(".snake" + i).css("left"));
                    this.setPositionYToInherit($(".snake" + i).css("top"));
                    $(".snake" + i).css({
                        "top": parseInt($(".snake" + i).css("top")) - 10 + "px"
                    });
                } else {
                    var nextXPosition = this.getPositionXToInherit();
                    var nextYPosition = this.getPositionYToInherit();
                    this.setPositionXToInherit($(".snake" + i).css("left"));
                    this.setPositionYToInherit($(".snake" + i).css("top"));
                    $(".snake" + i).css({
                        "top": nextYPosition,
                        "left": nextXPosition
                    });
                }
            }
            break;
        case "right":
            for (i = 0; i < this.getLength(); i++) {
                if (i == 0) {
                    this.setPositionXToInherit($(".snake" + i).css("left"));
                    this.setPositionYToInherit($(".snake" + i).css("top"));
                    $(".snake" + i).css({
                        "left": parseInt($(".snake" + i).css("left")) + 10 + "px"
                    });
                } else {
                    var nextXPosition = this.getPositionXToInherit();
                    var nextYPosition = this.getPositionYToInherit();
                    this.setPositionXToInherit($(".snake" + i).css("left"));
                    this.setPositionYToInherit($(".snake" + i).css("top"));
                    $(".snake" + i).css({
                        "top": nextYPosition,
                        "left": nextXPosition
                    });
                }
            }
            break;
        case "bottom":
            for (i = 0; i < this.getLength(); i++) {
                if (i == 0) {
                    this.setPositionXToInherit($(".snake" + i).css("left"));
                    this.setPositionYToInherit($(".snake" + i).css("top"));
                    $(".snake" + i).css({
                        "top": parseInt($(".snake" + i).css("top")) + 10 + "px"
                    });
                } else {
                    var nextXPosition = this.getPositionXToInherit();
                    var nextYPosition = this.getPositionYToInherit();
                    this.setPositionXToInherit($(".snake" + i).css("left"));
                    this.setPositionYToInherit($(".snake" + i).css("top"));
                    $(".snake" + i).css({
                        "top": nextYPosition,
                        "left": nextXPosition
                    });
                }
            }
            break;
        case "left":
            for (i = 0; i < this.getLength(); i++) {
                if (i == 0) {
                    this.setPositionXToInherit($(".snake" + i).css("left"));
                    this.setPositionYToInherit($(".snake" + i).css("top"));
                    $(".snake" + i).css({
                        "left": parseInt($(".snake" + i).css("left")) - 10 + "px"
                    });
                } else {
                    var nextXPosition = this.getPositionXToInherit();
                    var nextYPosition = this.getPositionYToInherit();
                    this.setPositionXToInherit($(".snake" + i).css("left"));
                    this.setPositionYToInherit($(".snake" + i).css("top"));
                    $(".snake" + i).css({
                        "top": nextYPosition,
                        "left": nextXPosition
                    });
                }
            }
            break;
    }
    
};
Snake.prototype.stretchBody = function() {
    var newClassName = "snake snake" + (mySnake.getLength() - 1);
    //alert(this.getPositionXToInherit() + "||" + this.getPositionYToInherit());
    $(".box").prepend("<div class='" + newClassName + "' style='top: " + this.getPositionYToInherit() + "; left: " + this.getPositionXToInherit() + "'></div>");
}
Snake.prototype.isSnakeHitTheBorder = function() {
    if (this.getSnakeHeadPositionX() == "-10px" || this.getSnakeHeadPositionX() == "500px" || this.getSnakeHeadPositionY() == "-10px" || this.getSnakeHeadPositionY() == "500px") {
        alert("Game Over");
        myGame.restart();
        myGame.pause();
    }
}
Snake.prototype.isSnakeBittinItself = function() {
    for (i = 0; i < mySnake.getLength(); i++) {
        //alert("IS? BodyX: " + this.getSnakeFullBodyPositionX()[i] + " == HeadX: " + this.getSnakeHeadPositionX() +
             //"BodyY: " + this.getSnakeFullBodyPositionY()[i] + " == " + "HeadY: " + this.getSnakeHeadPositionY());
        if (this.getSnakeFullBodyPositionX()[i] == parseInt(this.getSnakeHeadPositionX()) && this.getSnakeFullBodyPositionY()[i] == parseInt(this.getSnakeHeadPositionY())) {
            alert("Game Over");
            myGame.restart();
            myGame.pause();
        }
    }
}

// =============== Food Object Constructor ===============

function Food() {};
Food.prototype.getFoodPositionX = function() {
    return $(".food").css("left");
}
Food.prototype.getFoodPositionY = function() {
    return $(".food").css("top");
}
Food.prototype.changeFoodPosition = function() {
    var condition = 0;
    while (condition < 1) {
        //alert("test");
        var posx = Math.ceil(Math.random() * 49) + "0";
        var posy = Math.ceil(Math.random() * 49) + "0";
        for (i = 0; i < mySnake.getLength(); i++) {
            //alert("mySnake.getSnakeFullBodyPositionX(): " + mySnake.getSnakeFullBodyPositionX() + " == posx: " + posx);
            if (mySnake.getSnakeFullBodyPositionX()[i] == posx && mySnake.getSnakeFullBodyPositionY()[i] == posy ||
               mySnake.getSnakeFullBodyPositionX()[i] == mySnake.getSnakeHeadPositionX() && mySnake.getSnakeFullBodyPositionY()[i] == mySnake.getSnakeHeadPositionY()) {
                condition = 0;
            } else {
                condition = 1;
            }
        }
    }
    //alert("posx: " + posx + "|| posy: " + posy);
    $(".food").css({
        "top": posy + "px",
        "left": posx + "px"
    });
}
Food.prototype.isFoodEaten = function() {
    //alert("IS? mySnake.getSnakeHeadPositionX: " + mySnake.getSnakeHeadPositionX() + " == this.getFoodPositionX(): " + this.getFoodPositionX() + " && mySnake.getSnakeHeadPositionY(): " + mySnake.getSnakeHeadPositionY() + " == this.getFoodPositionY(): " + this.getFoodPositionY());
    if (mySnake.getSnakeHeadPositionX() == this.getFoodPositionX() && mySnake.getSnakeHeadPositionY() == this.getFoodPositionY()) {
        myGame.setScore();
        mySnake.stretchBody();
        this.changeFoodPosition();
    }
}

// =============== Start the Game ===============

var snakeFood = new Food();
var mySnake = new Snake();

snakeFood.changeFoodPosition()
myGame.displayPoints()





























