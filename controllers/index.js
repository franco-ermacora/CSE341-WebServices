const getData = (req, res) => {
  res.json({
    professionalName: "Franco",
    base64Image: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
    nameLink: {
      firstName: "Franco",
      url: "https://github.com/tu-usuario"
    },
    primaryDescription: "Estudiante de Web Services.",
    workDescription1: "Desarrollador Backend en formación.",
    workDescription2: "Aprendiendo Node.js y Express.",
    linkTitleText: "Contacto",
    linkedInLink: {
      text: "LinkedIn",
      link: "https://linkedin.com/"
    },
    githubLink: {
      text: "GitHub",
      link: "https://github.com/"
    }
  });
};

module.exports = { getData };