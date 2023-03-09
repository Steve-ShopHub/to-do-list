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

export default createToDo;
