const createObjectiveCompletionResponderConfig = require("../../scripts/objectiveCompletionResponder");

module.exports = {
  ...createObjectiveCompletionResponderConfig(),
  animations: {
    objectiveNotCompleted: {
      frames: [0],
      frameRate: 1,
    },
    objectiveCompleting: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      frameRate: 8,
    },
    objectiveCompleted: {
      frames: [13],
      frameRate: 1,
    },
  },
  spriteSheets: {
    obeliskSheet: {
      fileName: "Obelisk_effects.png",
      frameDimensions: {
        width: 190,
        height: 380,
      },
    },
  },
  properties: {
    sprite: {
      useGidAsDefaultFrameIndex: false,
      defaultFrameIndex: 0,
      spriteSheet: "obeliskSheet",
      layers: [],
    },
  },
};