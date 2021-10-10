

const assert = require("assert");
const got = require("got")



module.exports = async function (helper) {
  
  const { userName } = helper.validationFields;
  
  
  if (!userName) {
    return helper.fail(` Please enter your Github username.
      `);
  }

  try {
      const res = await got(`https://api.github.com/users/${userName}`, {throwHttpErrors: false})

      if(res.statusCode === 200)
      {
        return helper.success(`Success!`,
        
        [{name: `GH_USERNAME`, value: userName}]
        );
      }
      else
      {
        helper.fail(
          `We couldn't find the Github user ${userName}. Double check your username and try again.`
        )
      }
  } catch (error) {
    helper.fail(
      `Oops! Something went wrong trying to validate your Github username 
      
      ${error}`
    )
  }
  
};
