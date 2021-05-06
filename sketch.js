var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var divisions = []; 
var ground
var particles = [];
var particle
var plinkos = [];
var count=0

var divisionHeight=300;
var score =0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,50);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
     fill("teal")
   }


    for (var j = 30; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 30; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
   
    
}
 
function draw() {
  background("black");
  textSize(20)
  fill ("yellow")
 text("Score : "+score,20,30);
fill ("blue")

  Engine.update(engine);
 ground.display();
 text("500",20,550)
 text("500",100,550)
 text("500",180,550)
 text("500",260,550)
 text("100",340,550)
 text("100",420,550)
 text("100",500,550)
 text("200",580,550)
 text("200",660,550)
 text("200",740,550)

 if(gameState === "end")
 {
   textSize(50)
   fill("purple")
   text("GAME OVER",250,450)
   
 }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if (particle!=null)
   {
     particle.displayed();

   if (particle.body.position.y > 760)

   {
       if (particle.body.position.x < 300)
     {
     score=score+500;
     particle=null;

     if (count>=5)
     gameState="end"
   }
   else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
             {
                   score = score + 100;
                   particle=null;
                   if ( count>= 5) gameState ="end";

             }
             else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
             {
                   score = score + 200;
                   particle=null;
                   if ( count>= 5)  gameState ="end";

             }      

 }

  }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed()
{
  if(gameState!=="end")
  {
    count++
  
  particle=new Particle(mouseX, 10, 10, 10);
}
}