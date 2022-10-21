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
  console.log(event)
  if(event.name === "playerDidInteract" && event.target.type === "clanMember")
  {
    world.startConversation(event.target.conversation, event.target.conversationAvatar);
  }
  if ((event.name === "objectiveCompleted" || event.name === "objectiveCompletedAgain" )  && event.objective === "8_upload_artifacts")
  {
    world.showEntities("old_man_bruna");
    world.startConversation("oldManPortalOpening","Old_man_portrait.png", 6000);
    
  }

  if(event.name === "conversationDidEnd" && event.npc.conversation === "oldManPortalOpening" )
  {
    world.warp("cosmos","player_entry1","sura_empire");
  }

  if(event.name == "playerDidInteract" && event.target.type === "soldier")
  {
    world.startConversation(event.target.conversation, event.target.conversationAvatar);
  }




}
 
