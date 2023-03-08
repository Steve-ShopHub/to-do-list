const projectHolder = [];

const createProject = function (title) {
  const project = {
    title,
    array: [],
    addToDo(toDo) {
      project.array.push(toDo);
    },
    deleteToDo(toDo) {
      project.array.splice(project.array.indexOf(toDo));
    },
  };

  return project;
};

const createToDo = function (
  title,
  completed,
  description,
  dueDate,
  priority,
  checklist
) {
  const toDo = {
    title,
    completed: false,
    description,
    dueDate,
    priority,
    checklist,
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

thisWeek.addToDo(homework);

console.log(thisWeek.array[0]);

thisWeek.deleteToDo(homework);

console.log(thisWeek.array[0]);
