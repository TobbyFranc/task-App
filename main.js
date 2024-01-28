let inputTask = document.querySelector(".todo-input")
let taskContainer = document.querySelector(".task-container")

let addTask =()=>{
   if(inputTask.value === ''){
      alert("You have not indicated any task")
      inputTask.parentElement.classList.add('error')
   }
   else{
      let li = document.createElement("li")
      li.innerHTML = inputTask.value
      taskContainer.appendChild(li)

      let span = document.createElement("span")
      span.innerHTML = "\u00d7"
      li.appendChild(span)
      saveEvent()
   }

   inputTask.value = "";
}

taskContainer.addEventListener("click", (e)=>{
   if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked")
      saveEvent()
   }else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove()
      saveEvent()
   }
})

let saveEvent = ()=>{
   localStorage.setItem("data", taskContainer.innerHTML)
}

let getEvent= ()=>{
   taskContainer.innerHTML = localStorage.getItem("data")
}

getEvent()


console.log(45656)