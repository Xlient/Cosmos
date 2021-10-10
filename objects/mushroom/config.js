module.exports = {
    spriteSheets: {
      mushroom_tiles: {
          fileName: "Enemy-Mushroom-Walk-24x24.png",
          frameDimensions: {
            width: 24,
            height: 24,
          },
        },
  },
  animations: {
    active: {
      frames: [0, 1, 2, 3, 4, 5],
    frameRate: 4,
    }
  }, 
  events:{
    onMapDidLoad: (self) => {
    self.playAnimation("active");
    },
  },
  
  properties: {
    sprite: {
      spriteSheet: "mushroom_tiles",
      defaultFrameIndex: 0,
  
      useGidAsDefaultFrameIndex: false,
      
      layers: [],
    },
  },
    };