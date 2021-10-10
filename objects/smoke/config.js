module.exports = {
    spriteSheets: {
      smoke_tiles: {
          fileName: "all.png",
          frameDimensions: {
            width: 32,
            height: 32,
          },
        },
  },
  animations: {
    active: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7],
    frameRate: 12,
    }
  }, 
  events:{
    mapDidLoad: (self) => {
    self.playAnimation("active");
    },
  },
  
  properties: {
    sprite: {
      spriteSheet: "smoke_tiles",
      defaultFrameIndex: 0,
  
      useGidAsDefaultFrameIndex: false,
      
      layers: [],
    },
  },
    };