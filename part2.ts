let myArray: string[] = ['Apple', 'Orange', 'Banana'];

function addTaskl(task:string):number 
{
    myArray.push(task);
    console.log("task has been added to the array");
    return myArray.length;
 }
 

  function listAllTasks()
  {
    for(var i =0; i<myArray.length; i++)
    {
        //myArray[i] = "String";
        console.log(myArray[i]);
    }
  }

  function deleteTask(task)
  {
    myArray.splice(task);
    console.log("task has been deleted from the array");
    console.log(myArray.length);
  }