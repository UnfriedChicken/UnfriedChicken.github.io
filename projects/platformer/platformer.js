$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    createPlatform(0,150,100,20)
    createPlatform(50,500,30,20)
    createPlatform(150,300,30,20)
    createPlatform(250,500,30,20)
    createPlatform(350,300,30,20)
    createPlatform(450,500,30,20)
    createPlatform(550,300,30,20)
    createPlatform(650,500,30,20)
    createPlatform(750,300,30,20)
    createPlatform(850,500,30,20)
    createPlatform(950,300,30,20)
    createPlatform(1050,500,30,20)
    createPlatform(1150,300,30,20)
    createPlatform(1250,500,30,20)
    createPlatform(1300,300,100,20)
    createPlatform(1300,650,30,20)



    
    // TODO 2
    createCollectable("handsoap",1300,200,0,0)
    createCollectable("handsoap",50,400,0,0)
    createCollectable("handsoap",1300,600,0,0)




    // TODO 3
    createCannon("right", 790, -1000)
    createCannon("left", 673, -1000)
    createCannon("bottom",100,1500)
    createCannon("bottom",300,2000)
    createCannon("bottom",500,1500)
    createCannon("bottom",700,2000)
    createCannon("bottom",900,1500)
    createCannon("bottom,",1100,2000)
    createCannon("bottom",1150,2000)
    createCannon("right",150,30000)
    createCannon("right",250,30000)
    createCannon("right",350,30000)
    createCannon("right",450,30000)
    createCannon("right",550,30000)
    createCannon("right",650,30000)
    createCannon("right",750,30000)
    createCannon("right",850,30000)
    createCannon("right",950,30000)
    




    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
