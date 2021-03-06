const sequelize = require('../config/index');

const getQuestions = async (name) => {
  const questionsData = await sequelize.query(
    'select questions.*,speclalizations.name ,speclalizations.id As "speclalizationsId",speclalizations.avatar_url,users.first_name As username from questions join speclalizations on questions.speclalization_id = speclalizations.id join users on questions.owner = users.id  where  speclalizations.name = :name GROUP BY questions.id ,users.id,speclalizations.id ORDER BY questions.date DESC ', { replacements: { name } },
  );
  return questionsData;
};
module.exports = getQuestions;
