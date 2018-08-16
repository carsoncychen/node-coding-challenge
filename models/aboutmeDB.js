// database for questions and answers
const aboutMeData = [
  {
    question: 'Tell me a little bit about yourself?',
    answer: 'Enjoy breaking down a complex problem and write efficient solutions for each part of the problem.',
    param: 'description',
  },
  {
    question: 'What excites you about technology?',
    answer: 'I love software development because of the opportunities to face new challenges and learn new technologies constantly.',
    param: 'tech',
  },
  {
    question: 'What is your preferred technology stack',
    answer: 'I have experience in JavaScript, Express.js, Node.js, React.js, and PostgreSQL. My next target is to learn React Native, Python, and Redux',
    param: 'techstack',
  },
  {
    question: 'What are your favorite hobbies?',
    answer: 'My favorite hobby is coffee brewing, specifically latte art.',
    param: 'hobbies',
  },
];

module.exports = {

  find(query) {
    // if no query passed in, return whole data
    if (Object.keys(query).length === 0) {
      return aboutMeData;
    }

    // iterate through whole data looking for match of query.q
    for (let i = 0; i < aboutMeData.length; i++) {
      if (aboutMeData[i].param === query.q) {
        const result = {};
        result.question = aboutMeData[i].question;
        result.answer = aboutMeData[i].answer;
        return result;
      }
    }

    // return Not Found message if no match
    return { message: 'Not Found' };
  },
};
