var ball;
var balls;
var position;
var database;
function setup(){
    database=firebase.database();    
    createCanvas(500,500);
    balls = createSprite(200,200,10,10);
    balls.shapeColor = "red";
    var childnode=database.ref("ball/position");
    childnode.on("value",readposition,showerror);
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ball/position").set({
    "x":position.x+x,
    "y":position.y+y    
    })
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
}

function showerror(){
 console.log("there is an error")   
}

function readposition(d){
position = d.val();
balls.x=position.x;
balls.y=position.y;

}