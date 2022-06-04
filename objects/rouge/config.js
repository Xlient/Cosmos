module.exports = {
    spriteSheets: {
      rougeSpriteSheet: {
          fileName: "rouge_running.png",
          frameDimensions: {
            width: 16,
            height: 32,
          },
        },
  },
  animations: {
    idle: {
      frames: [0],
    frameRate: 1,
    }
  }, 
  events:{
    //
  },
  
  properties: {
    sprite: {
      spriteSheet: "rougeSpriteSheet",
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