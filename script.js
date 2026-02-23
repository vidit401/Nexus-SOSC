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
  let list = document.getElementById("eventList");
  list.innerHTML = "";

  const today = new Date();
  today.setHours(0,0,0,0);

  let upcoming = [];
  let todayEvents = [];
  let past = [];

  events.forEach((event, index) => {
    let eventDate = new Date(event.date);
    eventDate.setHours(0,0,0,0);

    if (eventDate.getTime() === today.getTime()) {
      todayEvents.push({ event, index });
    } else if (eventDate > today) {
      upcoming.push({ event, index });
    } else {
      past.push({ event, index });
    }
  });

  renderSection("Upcoming Events", upcoming);
  renderSection("Today", todayEvents);
  renderSection("Past Events", past);
}

function renderSection(title, items) {
  if (items.length === 0) return;

  const list = document.getElementById("eventList");

  let header = document.createElement("h3");
  header.textContent = title;
  list.appendChild(header);

  items.forEach(({ event, index }) => {
    let li = document.createElement("li");

    if (title === "Past Events") {
      li.classList.add("past-event");
    }

    li.innerHTML = `
      ${event.name} - ${event.date}
      <button onclick="deleteEvent(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}

function deleteEvent(index) {
  events.splice(index, 1)
  renderEvents()
}
