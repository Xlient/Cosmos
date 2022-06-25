module.exports = function(event, world) {
  
  if (event.name === "conversationDidEnd" && event.npc.conversation === "kevinDefault")
  {
    world.disablePlayerMovement();
    world.screenShake(5,8000);
    world.startConversation("cedricMalfunction","cedricNeutral.png", 2000);
    world.enablePlayerMovement();
  }
}
