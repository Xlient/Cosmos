
module.exports = async function (helper) {
  
  const { answer1, answer2 } = helper.validationFields;

  if (!answer1 || answer1 == true) {
    return helper.fail(`
      The answer to the first question is incorrect.
      Look back through the objective to refresh your knowledge of Continous intergration
    `);
  }

  if (!answer2 || answer2 == false) {
    return helper.fail(`
      The answer to the second question is incorrect.
    `);
  }
  

  // The way we usually write validators is to fail fast, and then if we reach
  // the end, we know the user got all the answers right!
  helper.success(`
    Hooray! You did it!
  `);
};
