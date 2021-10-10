module.exports = {
  spriteSheets: {
    octonid_tiles: {
        fileName: "purple_octonid.png",
        frameDimensions: {
          width: 48,
          height: 70,
        },
      },
},
animations: {
  idle: {
    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12, 13, 14,
             15, 16, 17, 18, 19, 20, 21,22, 23 ,24, 25, 26, 27, 28, 29,30,31,
            32, 33, 34 , 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
  frameRate: 12,
  }
}, 
events:{
  mapDidLoad: (self) => {
  self.playAnimation("idle");
  },
},

properties: {
  sprite: {
    spriteSheet: "octonid_tiles",
    defaultFrameIndex: 0,

    useGidAsDefaultFrameIndex: false,
    
    layers: [],
  },
},
  };