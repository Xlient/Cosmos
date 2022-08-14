const { isWorkflowDisabled } = require("../lib/github_helper");

module.exports = async function (helper) {
  const { GH_USERNAME } = helper.env;

  try {
    if (isWorkflowDisabled(GH_USERNAME, "basic-workflow.yml") === false) {
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
