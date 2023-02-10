var part3 = /** @class */ (function () {
    function part3(myArray) {
        this.myArray = ['Apple', 'Orange', 'Banana'];
        this.myArray = myArray;
        function addTask(yjl) {
            myArray.push(yjl);
            console.log("yjl has been added to the array");
            return myArray.length;
        }
        function listAllTask() {
            for (var i = 0; i < myArray.length; i++) {
                console.log(myArray[i]);
            }
        }
        function deleteTasks(yjl) {
            myArray.splice(yjl);
            console.log("task has been deleted from the array");
            console.log(myArray.length);
        }
    }
    return part3;
}());
