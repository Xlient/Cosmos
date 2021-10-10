module.exports = {
    spriteSheets: {
      creature_tiles: {
          fileName: "Enemy-Boss-Golem-Idle-48x48.png",
          frameDimensions: {
            width: 48,
            height: 48,
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
    self.playAnimation("active",true);
    },
  },
  
  properties: {
    sprite: {
      spriteSheet: "creature_tiles",
      defaultFrameIndex: 0,
  
      useGidAsDefaultFrameIndex: false,
      
      layers: [],
    },
  },
    };