let events = [];

function addEvent() {
  let name = document.getElementById("eventName").value;
  let date = document.getElementById("eventDate").value;

  if (name === "" || date === "") {
    alert("Please fill all fields");
    return;
  }

  events.push({ name, date });
  renderEvents();
}

function renderEvents() {
  let list = document.getElementById("eventList");
  list.innerHTML = "";

  events.forEach((event, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${event.name} - ${event.date} 
      <button onclick="deleteEvent(${index})">Delete</button>`;
    list.appendChild(li);
  });
}

let eventToDelete = null;

function deleteEvent(index) {
  eventToDelete = index;
  const modal = document.getElementById('deleteModal');
  modal.showModal();
}

document.getElementById('cancelDelete').addEventListener('click', () => {
  document.getElementById('deleteModal').close();
  eventToDelete = null;
});

document.getElementById('confirmDelete').addEventListener('click', () => {
  if (eventToDelete !== null) {
    events.splice(eventToDelete, 1);
    renderEvents();
    document.getElementById('deleteModal').close();
    eventToDelete = null;
  }
});
