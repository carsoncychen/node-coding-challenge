// database for questions and answers
const aboutMeData = [
  {
    question: 'Tell me a little bit about yourself?',
    answer: 'sure',
    param: 'description',
  },
  {
    question: 'What excites you about technology?',
    answer: 'sure',
    param: 'tech',
  },
  {
    question: 'What is your preferred technology stack',
    answer: 'sure',
    param: 'techstack',
  },
  {
    question: 'What are your favorite hobbies?',
    answer: 'sure',
    param: 'hobbies',
  },
];

module.exports = {

  // iterate through aboutMeData
  // return an array of objects containing only questions and answers
  find(query) {
    if (Object.keys(query).length === 0) {
      return aboutMeData;
    }

    for (let i = 0; i < aboutMeData.length; i++) {
      if (aboutMeData[i].param === query.q) {
        const result = {};
        result.question = aboutMeData[i].question;
        result.answer = aboutMeData[i].answer;
        return result;
      }
    }

    return { message: 'Not Found' };
  },
};
