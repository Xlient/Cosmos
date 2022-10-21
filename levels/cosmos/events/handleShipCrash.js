/**
 * red overlay originally from the owls-nest extension
 * see: https://github.com/TwilioQuest/owls-nest-extension/blob/8f49c56e7f968f4029ff24fdb726b7a5a7cb744b/levels/owls_nest/events/handleFredric.js
 */
const overlayCss = `
#owln_red_alert_overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: red;
  opacity: 0;
  animation: owln_pulsate 3s infinite;
}
@keyframes owln_pulsate {
  0% { opacity: 0.1; }
  50% { opacity: 0.3; }
  100% { opacity: 0.1; }
}
`;

function createRedAlertDiv() {
  let overlay = document.getElementById('owln_red_alert_overlay');
  if (overlay) {
    overlay.style.display = 'block';
  } else {
    overlay = document.createElement('div');
    overlay.id = 'owln_red_alert_overlay';
    const overlayStyles = document.createElement('style');
    const game = document.getElementById('game');

    // Add overlay styles
    overlayStyles.innerHTML = overlayCss;
    document.head.appendChild(overlayStyles);

    // Append overlay
    game.appendChild(overlay);
  }
}

function destroyRedAlertDiv() {
  const overlay = document.getElementById('owln_red_alert_overlay');
  if (overlay) {
    overlay.parentNode.removeChild(overlay);
  }
}


function handleShipCrash(event, world)
{
    if (event.name === "conversationDidEnd" && event.npc.conversation === "scientistDefault")
    {
      createRedAlertDiv(); 
      world.disablePlayerMovement();
      world.screenShake(5,10000);
      world.startConversation("cedricMalfunction","cedricNeutral.png");
      
    } 
}
function handleEscape(event,world)
{
  if (event.name === "conversationDidEnd" && event.npc.conversation === "cedricMalfunction")
  {
    world.startConversation("kevinShipLanding","kevinNeutral.png",1000);
    world.screenShake(5,8000);
    world.screenShake(5,8000);
     world.enablePlayerMovement();
  }
}

module.exports = { 
  handleShipCrash ,
  handleEscape, 
  destroyRedAlertDiv
}