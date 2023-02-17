let ball;
let ground;
let mouse;

function setup() {
  const canvas = createCanvas(800, 600);

  // create an engine
  let engine = Matter.Engine.create();
  let world = engine.world;

  // create two boxes and a ground
  ball = new Ball(world, { x: 100, y: 50, r: 40, color: 'white' });
  ground = new Block(
    world,
    { x: 400, y: 500, w: 810, h: 15, color: 'grey' },
    { isStatic: true, angle: PI/3}
  );

  // add a mouse to manipulate Matter objects
  mouse = new Mouse(engine, canvas, { stroke: 'magenta', strokeWeight: 2 });

  // run the engine
  Matter.Runner.run(engine);
}

function draw() {
  background('black');
  ground.draw();
  ball.draw();
  mouse.draw();
}