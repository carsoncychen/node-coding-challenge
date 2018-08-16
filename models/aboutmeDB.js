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
  findAll() {
    const result = [];
    for (let i = 0; i < aboutMeData.length; i++) {
      const curObj = {};
      curObj.question = aboutMeData[i].question;
      curObj.answer = aboutMeData[i].answer;
      result.push(curObj);
    }
    return result;
  },

  // iterate through aboutMeData
  // if param in data match with param, return an object with question and answer
  findByParam(param) {
    const result = {};
    for (let i = 0; i < aboutMeData.length; i++) {
      if (aboutMeData[i].param === param) {
        result.question = aboutMeData[i].question;
        result.answer = aboutMeData[i].answer;
      }
    }
    return result;
  },

};
