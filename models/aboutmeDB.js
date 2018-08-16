const aboutMeData = {
  description: 'description',
  tech: 'tech',
  techstack: 'techstack',
  hobbies: 'hobbies',
};

module.exports = {

  findAll() {
    return aboutMeData;
  },

  findByParam(param) {
    const result = {};
    for (let key in aboutMeData) {
      if (param === key) {
        result[key] = aboutMeData[key]
      }
    }
    return result;
  },

};
