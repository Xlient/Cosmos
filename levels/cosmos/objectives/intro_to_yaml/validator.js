
module.exports = async function (helper) {
  
  const { answer1, answer2, answer3 } = helper.validationFields;

  if(!answer1 || !answer1.includes("data"))
  {
    return helper.fail(`
    The answer to the first question is incorrect.
    Look back through the objective to refresh your knowledge.
  `);
  }
   if (!answer2 || answer2 == true) {
    return helper.fail(`
      The answer to the second question is incorrect.
      Look back through the objective to refresh your knowledge.
    `);
  }

  if (!answer3 || answer3 == false) {
    return helper.fail(`
      The answer to the third question is incorrect.
    `);
  }
  

  helper.success(`
    Hooray! You did it!
  `);
};