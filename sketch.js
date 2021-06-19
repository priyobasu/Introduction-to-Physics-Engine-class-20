const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body; // namespacing


var engine,world,ball, ground;
function setup(){
createCanvas(400,400);
engine=Engine.create(); // creating the engine

world=engine.world; //creating the world

ball= Bodies.circle(200,200,20); // determining the shape of the body

World.add(world,ball); // adding the shape to the world

console.log(ball.position.x);

var ground_prop={
    isStatic:true
}

ground=Bodies.rectangle(200,380,400,20,ground_prop);
World.add(world,ground);


}

function draw(){
background("black");

/*fill("red");
rectMode(CENTER)
rect(200,200,100,100);*/
Engine.update(engine); // updating the engine

fill("red");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);

rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

}
