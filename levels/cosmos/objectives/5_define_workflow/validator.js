

const { findJob } = require("../lib/github_helper");

module.exports = async function (helper) {
  const { GH_USERNAME } = helper.env;
  let isComplete;
  let job = findJob(GH_USERNAME, "basic-workflow.yml", "say-hello")
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
