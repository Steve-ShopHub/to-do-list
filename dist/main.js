let projectHolder = [];

console.log(localStorage);

(function loadData() {
  const objDeserialized = JSON.parse(localStorage.getItem("Projects"));
  if (objDeserialized !== null) {
    projectHolder = objDeserialized;
  }
  console.log(objDeserialized);
})();

function saveProject(project) {
  if (projectHolder.includes(project)) {
    projectHolder.splice(projectHolder.indexOf(project), 1, project);
  } else {
    projectHolder.push(project);
  }
  const projectHolderSrl = JSON.stringify(projectHolder);
  localStorage.setItem("Projects", projectHolderSrl);
}

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

const createToDo = function (name) {
  const toDo = {
    name,
    title: "",
    completed: false,
    description: "",
    dueDate: "",
    priority: "",
    checklist: [],
  };
  return toDo;
};

/////////// DOM ///////////

const projectsContainer = document.querySelector("#projects-holder");

const createProjectInput = document.querySelector("#proj-name-input");

const createProjectBtn = document.querySelector("#proj-name-submit");

/*

function deleteProject(newProject) {
  projectHolder.forEach((project, index) => {
    if (index === this.key) {
      projectHolder.splice(index, 1);
      projectsContainer.removeChild(newProject);
      // appendProjects();
    }
  });
  // let newProject = document.getElementById(this.id);
  // projectsContainer.removeChild(newProject);
  // projectHolder.splice(projectHolder.indexOf(project), 1);
}

*/

function deleteProject(newProject) {
  projectHolder.forEach((project, index) => {
    if (index === parseInt(newProject.id)) {
      projectHolder.splice(index, 1);
      const projectElement = document.getElementById(newProject.id);
      projectsContainer.removeChild(projectElement);
      const projectHolderSrl = JSON.stringify(projectHolder);
      localStorage.setItem("Projects", projectHolderSrl);
    }
  });
}

const appendProjects = function () {
  projectHolder.forEach((project, index) => {
    if (document.getElementById(`Project: ${index}`) === null) {
      const newProject = document.createElement("div");
      newProject.id = index;
      newProject.classList.add("project");
      newProject.textContent = project.title;
      projectsContainer.appendChild(newProject);

      const deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.dataset.key = index;
      deleteProjectBtn.textContent = "Delete";
      deleteProjectBtn.addEventListener("click", () => {
        deleteProject(newProject);
      });

      newProject.appendChild(deleteProjectBtn);
    } else return;
  });
};

appendProjects();

function appendNewProject() {
  const projectTitle = createProjectInput.value;
  if (projectTitle === "") {
    return;
  }
  createProject(`${projectTitle}`);
  appendProjects();
}

createProjectBtn.addEventListener("click", appendNewProject);

/////// Test data ///////////

/*

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

*/
