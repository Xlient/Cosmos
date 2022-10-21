const createObjectiveCompletionResponderConfig = require("../../scripts/objectiveCompletionResponder");
module.exports = {
  ...createObjectiveCompletionResponderConfig(),
  animations: {
    objectiveNotCompleted: {
      frames: [2],
      frameRate: 1,
    },
    objectiveCompleting: {
      frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
              21, 23, 24, 25, 26, 27],
      frameRate: 6,
    },
    objectiveCompleted: {
      frames: [23, 24, 25,26, 27],
      frameRate: 3,
    },
  },
  spriteSheets: {
    portal_tiles: {
        fileName: "portal_animated.png",
        frameDimensions: {
          width: 190,
          height: 185,
        },
      },
}, 

properties: {
  sprite: {
    spriteSheet: "portal_tiles",
    defaultFrameIndex: 0,

    useGidAsDefaultFrameIndex: false,
    
    layers: [],
  },
},
  };