const input=document.getElementById("inputBox");
const task=document.getElementById("task");
function addTask(){
    if(input.value.trim()===""){
        alert("Enter valid task");
        return;
    }

    const li=document.createElement("li");
    li.textContent=input.value;

    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete Task";
    li.append(" ",deleteBtn)
    task.appendChild(li);

    deleteBtn.addEventListener("click",()=>{
        li.remove();
    })
    input.value="";
}