

const { getWorkflow } = require("../lib/example_helper");


module.exports = async function (helper) {
  
  const { GH_USERNAME } = helper.env;

 try {
   
 let result  = getWorkflow(GH_USERNAME, "dotnet-desktop.yml")
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
