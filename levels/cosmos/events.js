 const {handleShipCrash, handleEscape, destroyRedAlertDiv} = require("./events/handleShipCrash")
module.exports = function(event, world) {
  
  handleShipCrash(event, world);
  handleEscape(event, world)

  if (event.name == "mapDidLoad" && event.mapName == "bruna")
  {
    destroyRedAlertDiv();
  }
}

