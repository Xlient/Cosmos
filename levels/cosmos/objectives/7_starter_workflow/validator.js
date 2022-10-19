const { Octokit, App } = require("octokit");
const { getWorkflow } = require("../lib/example_helper");


module.exports = async function (helper) {
  
  const {   TQ_GH_USERNAME } = helper.env;
  const {  TQ_GH_PAT } = helper.env;
  const octokit = new Octokit({
      auth:  TQ_GH_PAT
 })
 try {
   
 let result  = getWorkflow(octokit,  TQ_GH_USERNAME, "dotnet-desktop.yml")
  if( result === false )
  {
    return helper.fail(` We couldn't find your workflow file. Did you name it 'dotnet-desktop.yml'?`)
  }
 } catch (error) {
  return helper.fail(` Something went wrong trying to find your workflow
  
  ${error}
  `);
 }

  helper.success(`
    Sucess!
  `);
};
