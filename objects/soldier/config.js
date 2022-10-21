module.exports = {
    spriteSheets: {
      soldierTiles: {
          fileName: "knights2.png",
          frameDimensions: {
            width: 76,
            height: 72,
          },
        },
  },
  animations: {
    active: {
      frames: [24,25, 26],
    frameRate: 3,
    }
  }, 
  events:{
    onMapDidLoad: (self) => {
    self.playAnimation("active",true);
    },
  },
  
  properties: {
    sprite: {
      spriteSheet: "soldierTiles",
      defaultFrameIndex: 0,
  
      useGidAsDefaultFrameIndex: false,
      
      layers: [],
    },
  },
    };