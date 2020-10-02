//namespacing
const Engine= Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;


var engine, worldA, objectA;

function setup(){
    createCanvas(400, 400);

    engine = Engine.create();
    worldA = engine.world;

    var option =
    {
        isStatic : true
    }
    objectA = Bodies.rectangle(200, 200, 50, 80, option);
    console.log(objectA);

    World.add(worldA, objectA);

}

function draw(){
    background(0);

    Engine.update(engine);

    rectMode(CENTER)
   rect(objectA.position.x, objectA.position.y, 50,80);

}