module.exports = {
    spriteSheets: {
      plant_tiles: {
          fileName: "Enemy-Plant-Mutant-Idle-Attack-46x32.png",
          frameDimensions: {
            width: 46,
            height: 32,
          },
        },
  },
  animations: {
    active: {
      frames: [0, 1, 2, 3, 4],
    frameRate: 4,
    }
  }, 
  events:{
    onMapDidLoad: (self) => {
    self.playAnimation("active",true);
    },
  },
  
  properties: {
    sprite: {
      spriteSheet: "plant_tiles",
      defaultFrameIndex: 0,
  
      useGidAsDefaultFrameIndex: false,
      
      layers: [],
    },
  },
    };