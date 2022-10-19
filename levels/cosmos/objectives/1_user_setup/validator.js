

const assert = require("assert");
const got = require("got")



module.exports = async function (helper) {
  
  const { userName } = helper.validationFields;
  const { PAT } = helper.validationFields;
  
  
  if (!userName) {
    return helper.fail(` Please enter your Github username.
      `);
  }

  try {
      const res = await got(`https://api.github.com/users/${userName}`, {throwHttpErrors: false})

      if(res.statusCode === 200)
      {
        return helper.success(`Success!`,
        
        [
          {name: `  TQ_GH_USERNAME`, value: userName},
          {name: ` TQ_GH_PAT`, value: PAT}
        
        ]
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
