/* eslint-disable import/extensions */
import createProject from "./project.js";
import createToDo from "./todo-item.js";
// import saveProject from "./save.js";
// import { projectHolder } from "./save.js";

let projectHolder = [];

export default function saveProject(project) {
  if (projectHolder.includes(project)) {
    projectHolder.splice(projectHolder.indexOf(project), 1, project);
  } else {
    projectHolder.push(project);
  }
  const projectHolderSrl = JSON.stringify(projectHolder);
  localStorage.setItem("Projects", projectHolderSrl);
}

// export default saveProject;

console.log(localStorage);

(function loadData() {
  const objDeserialized = JSON.parse(localStorage.getItem("Projects"));
  projectHolder = objDeserialized;
  console.log(objDeserialized);
})();

const createProjectInput = document.querySelector("#proj-name-input");
const createProjectBtn = document.querySelector("#proj-name-submit");
const projectsContainer = document.querySelector("#projects-holder");

const appendProjects = function () {
  projectHolder.forEach((element) => {
    const newProject = document.createElement("div");
    newProject.classList.add("project");
    projectsContainer.appendChild(newProject);
  });
};

appendProjects();

/*


const projectDOM = function () {
  const createProjectInput = document.querySelector("#proj-name-input");
  const createProjectBtn = document.querySelector("#proj-name-submit");
  const projectsContainer = document.querySelector('#projects-holder');



  
  const appendProjects = function() {
    projectHolder.forEach(element => {
      const project = document.createElement('div');
      project.classList.add('project');
      projectsContainer.appendChild(project);
      
    });

  }

};

*/

/////// Test data ///////////

const nextWeek = createProject("Next Week");
const thisWeek = createProject("This Week");
const thisMonth = createProject("This Month");
const nextMonth = createProject("Next Month");

const homework = createToDo("Do Homework");
const emptyDishwasher = createToDo("Empty Dishwasher");
const dog = createToDo("Walk Dog");
const washClothes = createToDo("Wash Clothes");

thisWeek.addToDo(dog);
thisWeek.addToDo(washClothes);
thisWeek.addToDo(homework);

nextWeek.addToDo(emptyDishwasher);

thisMonth.addToDo(dog);
thisMonth.addToDo(homework);
thisMonth.addToDo(washClothes);

nextMonth.addToDo(dog);
thisMonth.addToDo(homework);
nextMonth.addToDo(washClothes);

saveProject(thisWeek);
saveProject(nextWeek);
saveProject(thisMonth);
saveProject(nextMonth);
