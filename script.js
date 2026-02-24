let events = []
let editIndex=-1

function addEvent() {
  let name = document.getElementById("eventName").value
  let date = document.getElementById("eventDate").value

  if (name === "" || date === "") {
    alert("Please fill all fields")
    return
  }
  if (editIndex==-1){
    events.push({ name, date })

  }else{
    events[editIndex]={name,date}
    editIndex=-1
  }
  clearInputs()

  renderEvents()
}

function renderEvents() {
  let list = document.getElementById("eventList")
  list.innerHTML = ""

  events.forEach((event, index) => {
    let li = document.createElement("li")
    li.innerHTML = `${event.name} - ${event.date} 
      <button onclick="deleteEvent(${index})">Delete</button>
      <button onclick="editevent(${index})">Edit</button>`
    list.appendChild(li)
  })
}

function editevent(index){
  let event=events[index]
  document.getElementById("eventName").value=event.name
  document.getElementById("eventDate").value=event.date
  editIndex=index
}
function deleteEvent(index) {
  let confirmDel=confirm("Are you sure you want to delete this event? ")
  if(confirmDel){
    events.splice(index, 1)
    renderEvents()

  }

}
function clearInputs(){
  document.getElementById("eventName").value="";
  document.getElementById("eventDate").value="";
}
