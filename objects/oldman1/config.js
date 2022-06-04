module.exports = {
    spriteSheets: {
      oldmanSpriteSheet: {
          fileName: "oldman_walk.png",
          frameDimensions: {
            width: 32,
            height: 32,
          },
        },
  },
  animations: {
    idle: {
      frames: [0, 1, 2],
    frameRate: 2,
    }
  }, 
  events:{
    //
  },
  
  properties: {
    sprite: {
      spriteSheet: "oldmanSpriteSheet",
      defaultFrameIndex: 0,
      useGidAsDefaultFrameIndex: false,
      layers: [],
    },
    idleAnimations: {
        animations: { idle: 500 },
        minIdleTime: 0,
        maxIdleTime: 0,
      },
  },
};