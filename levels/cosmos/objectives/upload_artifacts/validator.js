const { getArtifact } = require("../lib/github_helper")
module.exports = async function (helper) {
 
  const { GH_USERNAME } = helper.env;
 
   const response = getArtifact(GH_USERNAME);

   if(response === false )
   {
     helper.fail('We couldnt find any artifacts, check to see if your workflow ran successfully and try again');
   }

  helper.success(`
    Hooray! You did it!
  `);
};
