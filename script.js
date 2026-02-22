let events = []

function addEvent() {
  let nameInput=document.getElementById("eventName");
  let dateInput=document.getElementById("eventDate");

  let name = document.getElementById("eventName").value
  let date = document.getElementById("eventDate").value

  if (name === "" || date === "") {
    alert("Please fill all fields")
    return
  }


  events.push({ name, date })
  nameInput.value="";
  dateInput.value="";
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
  events.splice(index, 1)
  renderEvents()
}
