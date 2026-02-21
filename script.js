let events = JSON.parse(localStorage.getItem("events")) || [];

function saveEvents() {
    localStorage.setItem("events", JSON.stringify(events));
}

function renderEvents() {
  let list = document.getElementById("eventList")
  list.innerHTML = ""

  events.forEach((event, index) => {
    let li = document.createElement("li")
    li.innerHTML = `${event.name} - ${event.date} 
      <button onclick="deleteEvent(${index})">Delete</button>`
    list.appendChild(li)
  })
}

function addEvent() {
  let name = document.getElementById("eventName").value
  let date = document.getElementById("eventDate").value

  if (name === "" || date === "") {
    alert("Please fill all fields")
    return
  }

  events.push({ name, date })
  saveEvents();
  renderEvents()
}


let deleteIndex = null

function deleteEvent(index) {
  deleteIndex = index
  document.getElementById("confirmBox").style.display = "flex"
}

function confirmDelete() {
  if (deleteIndex !== null) {
    events.splice(deleteIndex, 1)
    saveEvents();
    renderEvents()
    deleteIndex = null
  }
  closeConfirm()
}

function closeConfirm() {
  document.getElementById("confirmBox").style.display = "none"
}

renderEvents()
