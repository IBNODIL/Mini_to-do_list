let elTaskInput = document.getElementById('task');
let elTaskAdd = document.getElementById('add');
let elTasks = document.getElementById('works');
let iDoNotKnow = localStorage.getItem('works');
let elWork = iDoNotKnow || '';
let cutter = '!#$%^&*()_+';

let taskArray = elWork.split(cutter);
for (let a = 0; a < taskArray.length; a++) {
  let diver = document.createElement('diver');
  diver.textContent = taskArray[a];
  diver.classList.add('work');
  elTasks.appendChild(diver);

  diver.addEventListener('click', () => {
    let arr = localStorage.getItem('works').split(cutter);
    let worksWithRemove = '';
    let elementToRemove = diver.textContent; 
    let indexToRemove = arr.indexOf(elementToRemove);
    if (indexToRemove !== -1) {
      arr.splice(indexToRemove, 1);
      worksWithRemove = arr.join(cutter);
      elWork = worksWithRemove;
      localStorage.setItem('works', worksWithRemove);
    }
    diver.remove();

    arr = [];
    indexToRemove = 0

  });
}

elTaskAdd.addEventListener('click', () => {
  elWork += cutter + elTaskInput.value;
  let diver = document.createElement('diver');
  diver.textContent = elTaskInput.value;
  diver.classList.add('work');
  elTasks.appendChild(diver);
  localStorage.setItem('works', elWork);
  elTaskInput.value = '';

  diver.addEventListener('click', () => {
    let arr = localStorage.getItem('works').split(cutter);
    let worksWithRemove = '';
    let elementToRemove = diver.textContent; 
    let indexToRemove = arr.indexOf(elementToRemove);
    if (indexToRemove !== -1) {
      arr.splice(indexToRemove, 1);
      worksWithRemove = arr.join(cutter);
      elWork = worksWithRemove;
      localStorage.setItem('works', worksWithRemove);
    }
    diver.remove();

    arr = [];
    indexToRemove = 0

  });
});
