module.exports = {
    spriteSheets: {
      planet1_tiles: {
          fileName: "planets.png",
          frameDimensions: {
            width: 100,
            height: 100,
          },
        },
  },
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12, 13, 14,
        15, 16, 17, 18, 19, 20, 21,22, 23 ,24, 25, 26, 27, 28, 29,30,31,
       32, 33, 34 , 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 48, 49],
    frameRate: 10,
    }
  }, 
  events:{
    onMapDidLoad: (self) => {
    self.playAnimation("idle",true);
    },
  },
  
  properties: {
    sprite: {
      spriteSheet: "planet1_tiles",
      defaultFrameIndex: 0,
  
      useGidAsDefaultFrameIndex: false,
      
      layers: [],
    },
  },
    };