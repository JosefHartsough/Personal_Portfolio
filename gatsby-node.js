const path = require("path");
const fs = require("fs");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const rawData = fs.readFileSync(path.resolve(__dirname, "projects.json"));
  const projects = JSON.parse(rawData);

  projects.forEach((project) => {
    createPage({
      path: `/projects/${project.name}`,
      component: path.resolve(`src/templates/projectTemplate.js`),
      context: {
        ...project,
      },
    });
  });
};
