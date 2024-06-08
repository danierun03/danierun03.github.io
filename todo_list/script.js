showList();

function closeBtn(){
    var items = document.getElementsByTagName("li");
    var i;
    for(i = 0; i < items.length; i++){
        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.appendChild(txt);
        span.className = "close";
        items[i].appendChild(span);
    }
}

function close(){
    var close = document.getElementsByClassName("close");
    var j;
    for (j = 0; j < close.length; j++){
        close[j].onclick = function() {
            var item = this.parentElement;
            item.remove();
        }
    }
    saveData();
}



function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var ul = document.getElementById("todolist");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(taskText));
        ul.appendChild(li);
        taskInput.value = "";
    }

    closeBtn();
    close();
    saveData();
}


var listitem = document.querySelector("ul");
listitem.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
    saveData();
});

saveData();

closeBtn();
close();

function reset() {
    document.getElementById("todolist").innerHTML = '<li>This is a sample To-Do List</li>\
    <li>That I made to test JavaScript capabilities</li>\
    <li class="checked">In websites.</li>\
    <li>Feel Free to Add and Delete something to the list!</li>'

    closeBtn();
    close();
    saveData();
}

function saveData (){
    localStorage.setItem("data", document.getElementById("todolist").innerHTML);
}

function showList (){
    document.getElementById("todolist").innerHTML = localStorage.getItem("data");
}

