const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,bodies;
var mouse;


function preload() {

}

function setup() {
    canvas = createCanvas(windowWidth /2, windowHeight / 1.5)
    engine = Engine.create()
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity ();
    let options = {
        mouse : canvasmouse
    };

    mConstraint = MouseConstraint.create(engine, options);
    World.add (world, mConstraint);

    b = new Bob(600,620,50)
	b2 = new Bob(500,620,50)
	b3 = new Bob(400,620,50)
	b4 = new Bob(300,620,50)
	b5 = new Bob(200,620,50)

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine)
  b.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  
  drawSprites();
}

//function mouseDragged () {
  //  Matter.Body.setPosition (pendulum1.body,{x: mouseX, y:mouseY});
//}