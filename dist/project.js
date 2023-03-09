import saveProject from "./main.js";

const createProject = function (title) {
  const project = {
    title,
    array: [],
    addToDo(toDo) {
      project.array.push(toDo);
      saveProject(project);
    },
    deleteToDo(toDo) {
      project.array.splice(project.array.indexOf(toDo));
      saveProject(project);
    },
  };
  saveProject(project);
  return project;
};

export default createProject;
