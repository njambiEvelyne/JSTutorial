//To-do list manager
let todo = [];
function addTask(){
  let todo = [];
  let activity = prompt("Enter the task to be done");
  let scheduled = todo.push(activity);
  console.log(`You have successfully added:\n ${todo}.`);
  alert(`You have successfully addes\n ${todo}.`);
}

function viewActivities(){
  let activities = todo;
  console.log(`These are the activities for the day\n${todo}`);
  alert(`These are the activities for the day\n${todo}`);
}

function markkAsComplete(){
  let completed = Number(prompt("Which task do you want to remove"));
  completed = todo.splice(completed);
  alert(`You have successfully removed ${completed}`);
  console(`You have successfully removed ${completed}`);
}

function notCompleted(){
  let incomplete = todo;
  console.log(`These are the remaining tasks ${todo}`);
  alert(`These are the remaining tasks ${todo}`);

}

const choice = Number(prompt("What do you want to do:(1.Add tasks, 2.View activities, 3.Mark comleted tasks, 4.View incomplete tasks?)"));
if (choice =1){
  addTask();
}else if (choice =2){
  viewActivities();
}else if(choice =4){
  markkAsComplete();
}else{
  notCompleted();
}

