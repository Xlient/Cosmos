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
    //
  }, 
  events:{
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