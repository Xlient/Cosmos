module.exports = {
    spriteSheets: {
        battery_tiles: {
            fileName: "all.png",
            frameDimensions: {
              width: 25,
              height: 50,
            },
          },
    },
    animations: {
      power_on: {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12, 13, 14,
                 15, 16, 17, 18, 19, 20, 21,22, 23 ,24],
      frameRate: 6,
      }
    }, 
    events:{
      mapDidLoad: (self) => {
      self.playAnimation("power_on");
      },
    },

    properties: {
      sprite: {
        spriteSheet: "battery_tiles",
        defaultFrameIndex: 0,

        useGidAsDefaultFrameIndex: false,
        
        layers: [],
      },
    },
};