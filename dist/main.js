const projectHolder = [];

const createProject = function (title) {
  const project = {
    title,
    array: [],
    pushToDo: function (toDo) {
      this.array.push(toDo);
    },
  };

  // const pushToDo = (toDo) => project.array.push(toDo);

  return project;
};

const createToDo = function (title) {
  const toDo = {
    title,
  };
  return toDo;
};

function pushProjectToHolder(project) {
  projectHolder.push(project);
}

const priority = createProject("priority");
const thisWeek = createProject("This Week");
const homework = createToDo("Do Homework");
const emptyDishwasher = createToDo("Empty Dishwasher");

pushProjectToHolder(priority);

pushProjectToHolder(thisWeek);

thisWeek.pushToDo(homework);

console.log(thisWeek);

// function pushToProject(project, toDo) {
//   project.array.push(toDo);
// }

// pushToProject(priority, homework);

// pushToProject(thisWeek, emptyDishwasher);

/*

                **********Chat GPT code *******

const projectHolder = [];

console.log(projectHolder);

const createProject = function (title) {
  const project = {
    title,
    array: [],
    pushToDo: function (toDo) {
      this.array.push(toDo);
    },
  };

  return project;
};

const createToDo = function (title) {
  const toDo = {
    title,
  };
  return toDo;
};

function pushProjectToHolder(project) {
  projectHolder.push(project);
}

const priority = createProject("priority");

const thisWeek = createProject("This Week");

const homework = createToDo("Do Homework");

const emptyDishwasher = createToDo("Empty Dishwasher");

pushProjectToHolder(priority);

console.log(projectHolder);

pushProjectToHolder(thisWeek);

console.log(projectHolder);

console.log(priority);
console.log(priority.array);

console.log(thisWeek);
console.log(thisWeek.array);

priority.pushToDo(homework);

console.log(priority);
console.log(priority.array);

thisWeek.pushToDo(emptyDishwasher);

console.log(thisWeek);
console.log(thisWeek.array);


*/
