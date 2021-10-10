module.exports = {
  spriteSheets: {
    all_tiles: {
        fileName: "octocat.png",
        frameDimensions: {
          width: 85,
          height: 52,
        },
      },
},
animations: {
  power_on: {
    frames: [0, 1, 2, 3, 4, 5, 6],
  frameRate: 7,
  }
}, 
events:{
  mapDidLoad: (self) => {
  self.playAnimation("idle");
  },
},

properties: {
  sprite: {
    spriteSheet: "all_tiles",
    defaultFrameIndex: 0,

    useGidAsDefaultFrameIndex: false,
    
    layers: [],
  },
},
  };