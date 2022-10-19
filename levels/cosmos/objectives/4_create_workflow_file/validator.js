
const assert = require("assert");
const { Octokit} = require("octokit");
const { getWorkflow } = require("../lib/github_helper")



module.exports = async function (helper) {
 
 const {   TQ_GH_USERNAME } = helper.env;
 const {  TQ_GH_PAT } = helper.env;
 const octokit = new Octokit({
     auth:  TQ_GH_PAT
})
 try {
   
 let result  = getWorkflow(octokit,  TQ_GH_USERNAME, "basic-workflow.yml")
  if( result === false )
  {
    return helper.fail(` We couldn't find your workflow file. Did you name it 'basic-workflow'?`)
  }
 } catch (error) {
  return helper.fail(` Something went wrong trying to find your workflow
  
  ${error}
  `);
 }
  
  helper.success(`
    Hooray! You did it!
  `);
};
