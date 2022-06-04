module.exports = {
    spriteSheets: {
      oldtreeSprites: {
          fileName: "old_tree2.png",
          frameDimensions: {
            width: 160,
            height: 288,
          },
        },
  },
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    frameRate: 4,
    }
  }, 
  events:{
    //
  },
  
  properties: {
    sprite: {
      spriteSheet: "oldtreeSprites",
      defaultFrameIndex: 0,
  
      useGidAsDefaultFrameIndex: false,
      
      layers: [],
    },
    idleAnimations: {
        animations: { idle: 6000 },
        minIdleTime: 0,
        maxIdleTime: 0,
      },
  },
    };