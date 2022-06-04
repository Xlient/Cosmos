module.exports = {
    spriteSheets: {
      treeSprites: {
          fileName: "tree1.png",
          frameDimensions: {
            width: 160,
            height: 256,
          },
        },
  },
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    frameRate: 6,
    }
  }, 
  events:{
    //
  },
  
  properties: {
    sprite: {
      spriteSheet: "treeSprites",
      defaultFrameIndex: 0,
  
      useGidAsDefaultFrameIndex: false,
      
      layers: [],
    },
    idleAnimations: {
        animations: { idle: 1000 },
        minIdleTime: 0,
        maxIdleTime: 0,
      },
  },
    };