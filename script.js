let events = []
let editIndex = -1
let darkMode = false


// SET MINIMUM DATE = TODAY
let today = new Date().toISOString().split("T")[0]
document.getElementById("eventDate").setAttribute("min", today)



function addEvent(){

  let name = document.getElementById("eventName").value.trim()
  let date = document.getElementById("eventDate").value

  if(name === "" || date === ""){
    alert("Please fill all fields")
    return
  }


  // PREVENT PAST DATES
  if(date < today){
    alert("Cannot select past dates")
    return
  }


  // PREVENT DUPLICATES (#18)
  let duplicate = events.some(
    (e,i) => i !== editIndex &&
    e.name.toLowerCase() === name.toLowerCase() &&
    e.date === date
  )

  if(duplicate){
    alert("Event already exists")
    return
  }


  if(editIndex === -1){
    events.push({name,date})
  }
  else{
    events[editIndex] = {name,date}
    editIndex = -1
  }


  clearInputs()
  renderEvents()
}



function renderEvents(){

  let list = document.getElementById("eventList")
  list.innerHTML = ""

  events.forEach((event,index)=>{

    let li = document.createElement("li")

    if(event.date < today){
      li.style.backgroundColor = "#ffb3b3"
    }

    li.innerHTML = `
      ${event.name} - ${event.date}
      <button onclick="editEvent(${index})">Edit</button>
      <button onclick="deleteEvent(${index})">Delete</button>
    `

    list.appendChild(li)
  })

}



function deleteEvent(index){

  let confirmDel = confirm("Are you sure you want to delete this event?")

  if(confirmDel){
    events.splice(index,1)
    renderEvents()
  }

}



function editEvent(index){

  let event = events[index]

  document.getElementById("eventName").value = event.name
  document.getElementById("eventDate").value = event.date

  editIndex = index
}



function clearInputs(){

  document.getElementById("eventName").value = ""
  document.getElementById("eventDate").value = ""

}



function toggleTheme(){

  let body = document.body

  if(!darkMode){
    body.style.background = "#121212"
    body.style.color = "white"
    darkMode = true
  }
  else{
    body.style.backgroundImage = "linear-gradient(to right, rgb(116,116,255), rgb(224,112,131))"
    body.style.color = "black"
    darkMode = false
  }

}



function clearAllEvents(){

  if(events.length === 0){
    alert("No events to clear!")
    return
  }

  if(confirm("Delete ALL events?")){
    events = []
    renderEvents()
  }

}



function sortEvents(){

  if(events.length <= 1){
    alert("Need at least 2 events to sort!")
    return
  }

  events.sort((a,b)=> new Date(a.date) - new Date(b.date))

  renderEvents()

}