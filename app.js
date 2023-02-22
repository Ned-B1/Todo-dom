const myInput=document.getElementById("myInput");
const addBtn=document.getElementById("addBtn");
const myList=document.getElementById("myList");
let todolist=[]
// Arrow function
addBtn.addEventListener("click",()=>{
    let value=myInput.value
    console.log(value);
    todolist.push(value)
    myList.innerHTML="";
    todolist.forEach((item)=>{
        let li=document.createElement("li")
        li.classList="li"
        li.innerHTML=item
        myList.appendChild(li)
    })
})

