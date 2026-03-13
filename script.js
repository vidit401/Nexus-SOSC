let events = []

function addEvent() {
  let name = document.getElementById("eventName").value
  let date = document.getElementById("eventDate").value

  if (name === "" || date === "") {
    alert("Please fill all fields")
    return
  }

  events.push({ name, date })
  renderEvents()
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

function deleteEvent(index) {
  let confirmDel=confirm("Are you sure you want to delete this event? ")
  if(confirmDel){
    events.splice(index, 1)
    renderEvents()

  }

}

function clearAllEvents() {
  if (events.length === 0) {
    alert("No events to clear!");
    return;
  }
  if (confirm("Delete ALL events? This cannot be undone.")) {
    events = [];  // Clear array
    renderEvents();
  }
}

function sortEvents() {
  if (events.length <= 1) {
    alert("Need at least 2 events to sort!");
    return;
  }
  events.sort((a, b) => new Date(a.date) - new Date(b.date));  // Sort by date
  renderEvents();
}


