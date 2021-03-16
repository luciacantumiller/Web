function newTask() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var check = document.createElement("input");
        check.type = "checkbox";
        check.name = "taskCheck";
        var label = document.createElement("label");
        label.innerText = inputValue;
        document.getElementById("myTasks").appendChild(check);
        document.getElementById("myTasks").appendChild(label);
        document.getElementById("myTasks").appendChild(document.createElement("br"));
    }
    document.getElementById("myInput").value = "";
}

function deleteTasks(){
    document.getElementById("myTasks").innerHTML = '';
}

function clearTasks(){
    checkboxes = document.getElementsByName('taskCheck');
    for(var i = 0; i < checkboxes.length; i++)
        checkboxes[i].checked = false;

}

function markTasks(){
    checkboxes = document.getElementsByName('taskCheck');
    for(var i = 0; i < checkboxes.length; i++)
        checkboxes[i].checked = true;
}