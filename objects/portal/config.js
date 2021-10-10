module.exports = {
  spriteSheets: {
    portal_tiles: {
        fileName: "all.png",
        frameDimensions: {
          width: 100,
          height: 100,
        },
      },
},
animations: {
  active: {
    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12, 13, 14,
             15, 16, 17, 18, 19, 20, 21,22, 23 ,24, 25, 26, 27, 28, 29, 30,
             31, 32, 33, 34, 35, 36, 37, 38, 39,40],
  frameRate: 12,
  }
}, 
events:{
  mapDidLoad: (self) => {
  self.playAnimation("active");
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