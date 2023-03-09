const projectHolder = [];

console.log(localStorage);

(function loadData() {
  const objDeserialized = JSON.parse(localStorage.getItem("Projects"));
  console.log(objDeserialized);
})();

function saveProject(project) {
  // projectHolder.splice(0, projectHolder.length);
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
    },
  };

  saveProject(project);

  return project;
};

const obj1 = {
  check1: true,
  check2: false,
};

const obj2 = {
  check1: true,
  check2: false,
};

const obj3 = {
  check1: true,
  check2: false,
};

const obj4 = {
  check1: true,
  check2: false,
};

const createToDo = function (name) {
  const toDo = {
    name,
    title: "",
    completed: false,
    description: "",
    dueDate: "",
    priority: "",
    checklist: [obj1, obj2, obj3, obj4],
  };
  return toDo;
};

// function pushProjectToHolder(project) {
//   projectHolder.push(project);
// }

/////// Test data ///////////

const nextWeek = createProject("Next Week");
const thisWeek = createProject("This Week");

const homework = createToDo("Do Homework");

const dog = createToDo("Walk Dog");
thisWeek.addToDo(dog);

const washClothes = createToDo("Wash Clothes");
thisWeek.addToDo(washClothes);

const emptyDishwasher = createToDo("Empty Dishwasher");

// pushProjectToHolder(nextWeek);

// pushProjectToHolder(thisWeek);

thisWeek.addToDo(homework);

saveProject(thisWeek);

nextWeek.addToDo(emptyDishwasher);

saveProject(nextWeek);

////////////////

/*

console.log(localStorage);

(function loadData() {
  for (let i = 0; i < localStorage.length; i++) {
    let objDeserialized = JSON.parse(
      localStorage.getItem(`${localStorage.key(i)}`)
    );
    console.log(objDeserialized);
  }
})();

function saveProject(project) {
  let projectSrl = JSON.stringify(project);
  localStorage.setItem(`${project.title}`, projectSrl);
}

// function saveToDo(toDo) {
//   let toDoSrl = JSON.stringify(toDo);
//   localStorage.setItem(`${toDo.name}`, toDoSrl);
// }

const projectHolder = [];

const createProject = function (title) {
  const project = {
    title,
    array: [],
    addToDo(toDo) {
      project.array.push(toDo);
      // saveToDo(toDo);
    },
    deleteToDo(toDo) {
      project.array.splice(project.array.indexOf(toDo));
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

function pushProjectToHolder(project) {
  projectHolder.push(project);
}

/////// Test data ///////////

const nextWeek = createProject("Next Week");
const thisWeek = createProject("This Week");
const homework = createToDo("Do Homework");

const dog = createToDo("Walk Dog");
thisWeek.addToDo(dog);

const washClothes = createToDo("Wash Clothes");
thisWeek.addToDo(washClothes);

const emptyDishwasher = createToDo("Empty Dishwasher");

pushProjectToHolder(nextWeek);

pushProjectToHolder(thisWeek);

thisWeek.addToDo(homework);

saveProject(thisWeek);

nextWeek.addToDo(emptyDishwasher);

saveProject(nextWeek);

*/
