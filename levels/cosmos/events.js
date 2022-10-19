 const {handleShipCrash, handleEscape, destroyRedAlertDiv} = require("./events/handleShipCrash")
module.exports = function(event, world) {
  
  handleShipCrash(event, world);
  handleEscape(event, world)

  if (event.name == "mapDidLoad" && event.mapName == "bruna")
  {
    destroyRedAlertDiv();
  }

  if(event.name == "playerDidInteract" && event.target.type === "oldman1")
  {
    world.startConversation(event.target.conversation, event.target.conversationAvatar);
  }
}

