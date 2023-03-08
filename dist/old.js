function createProject(title) {
  const project = {
    title,
    array: ["hello", "world"],
  };

  //   const logTitle = () => console.log(title);

  //   const logToDos = () => console.log(project.toDos[0]);

  return project;
}

function createToDo(title) {
  const toDo = {
    title,
  };

  return { toDo };
}

function addToProject(project, toDo) {
  project.array.push(toDo);
}

const project1 = createProject("to-dos");
const toDo1 = createToDo("homework");

// addToProject(project1, toDo1);

console.log(project1);

console.log(project1.array);

/*
  
  
  
  function createProject(title) {
    const project = {
      title,
      toDos: ["hello", "world"],
    };
  
    const logTitle = () => console.log(title);
  
    const logToDos = () => console.log(project.toDos[0]);
  
    return { project, logTitle, logToDos };
  }
  
  function createToDo(title, dueDate, priority, description) {
    const toDo = {
      title,
      dueDate,
      priority,
      description,
    };
  
    const logTitle = () => console.log(title);
  
    //   const addToProject = (project) => project.toDos.push(toDo);
  
    return { toDo, logTitle, addToProject };
  }
  
  function addToProject(project, toDo) {
    project.toDos.push(toDo);
  }
  
  const project1 = createProject("to-dos");
  project1.logTitle();
  project1.logToDos();
  
  const toDo1 = createToDo("homework");
  toDo1.logTitle();
  // toDo1.addToProject(project1);
  
  addToProject(project1, toDo1);
  
  project1.logToDos();
  
  
  */
