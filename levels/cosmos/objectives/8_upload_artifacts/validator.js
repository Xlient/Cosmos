const { Octokit, App } = require("octokit");
const { checkIfArtifactIsPresent } = require("../lib/github_helper")
module.exports = async function (helper) {
 
  const {   TQ_GH_USERNAME } = helper.env;
  const {  TQ_GH_PAT } = helper.env;
  const octokit = new Octokit({
      auth:  TQ_GH_PAT
   })
   const result = checkIfArtifactIsPresent(octokit,  TQ_GH_USERNAME);

   if(result === false )
   {
     helper.fail('We couldnt find any artifacts, check to see if your workflow ran successfully and try again');
   }

  helper.success(`
    Hooray! You did it!
  `);
};
