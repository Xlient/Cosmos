const { getWorkflow } = require("../lib/github_helper")

module.exports = async function (helper) {
 
 const { GH_USERNAME } = helper.env;

 try {
   
 let result  = getWorkflow(GH_USERNAME, "bobs-secret.yml")
  if( result === false )
  {
    return helper.fail(` We couldn't find your workflow file. Did you name it 'bobs-secret'?`)
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