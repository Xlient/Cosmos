module.exports = {
    spriteSheets: {
      clanMemberTiles: {
          fileName: "member.png",
          frameDimensions: {
            width: 52,
            height: 72,
          },
        },
  },
  animations: {
    active: {
      frames: [58],
    frameRate: 1,
    }
  }, 
  events:{
    onMapDidLoad: (self) => {
    self.playAnimation("active",true);
    },
  },
  
  properties: {
    sprite: {
      spriteSheet: "clanMemberTiles",
      defaultFrameIndex: 0,
  
      useGidAsDefaultFrameIndex: false,
      
      layers: [],
    },
  },
    };