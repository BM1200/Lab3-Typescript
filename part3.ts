class part3{
     myArray: string[] = ['Apple', 'Orange', 'Banana'];

     constructor(myArray){
        this.myArray = myArray;
        function addTask(yjl:string){
            myArray.push(yjl);
            console.log("yjl has been added to the array");
            return myArray.length;
        }
        function listAllTask()
        {
            for(var i = 0; i<myArray.length;i++)
            {
                console.log(myArray[i]);
            }
        }
        function deleteTasks(yjl)
        {
            myArray.splice(yjl);
            console.log("task has been deleted from the array");
            console.log(myArray.length);
        }
     }
}