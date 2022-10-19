const { Octokit, App } = require("octokit");
const { isWorkflowDisabled } = require("../lib/github_helper");

module.exports = async function (helper) {
  const {   TQ_GH_USERNAME } = helper.env;
  const {  TQ_GH_PAT } = helper.env;
  const octokit = new Octokit({
      auth:  TQ_GH_PAT
 })
  try {
    if (isWorkflowDisabled(octokit,   TQ_GH_USERNAME, "basic-workflow.yml") === false) {
      return helper.fail(`
        Looks like your workflow is still active, Try disabling it.
      `);
    }
  } catch (error) {
    return helper.fail(` Something went wrong trying to check your workflow
    
   ${error} `)
  }

 
  helper.success(`
    Hooray! You did it!
  `);
};
