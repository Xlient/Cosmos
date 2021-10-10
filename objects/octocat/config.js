module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5, 6],
    frameRate: 7,
    }
  }, 
  spriteSheets: {
    octo_tiles: {
        fileName: "octocat.png",
        frameDimensions: {
          width: 85,
          height: 52,
        },
      },
    },

events:{
  mapDidLoad: (self) => {
  self.playAnimation("idle");
  },
},
properties: {
  sprite: {
    spriteSheet: "octo_tiles",
    defaultFrameIndex: 0,

    useGidAsDefaultFrameIndex: false,
    
    layers: [],
  },
},
  };