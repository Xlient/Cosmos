
const { Octokit, App } = require("octokit");
const { findJob } = require("../lib/github_helper");

module.exports = async function (helper) {
  const { TQ_GH_USERNAME } = helper.env;
  const { TQ_GH_PAT } = helper.env;
  const octokit = new Octokit({
      auth:  TQ_GH_PAT
 })
  let isComplete;
  let job = await findJob(octokit,  TQ_GH_USERNAME, "basic-workflow", "say-hello")
  if (Object.keys(job).length == 0) {
  
    return helper.fail(`
      We couldn't find the 'say-hello' job in your workflow file. Try double checking your spelling and YAML syntax.
    `);
  }
  isComplete = job.steps[1].status.includes("completed")
  if(isComplete === false )
  {
     return helper.fail(` Looks like your job is still running or didnt complete successfully. Try again in a few seconds`); 
  }

  helper.success(`
    Hooray! You did it!
  `);
 
};
