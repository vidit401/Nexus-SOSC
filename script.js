var events = [];

function addEvent() {
  var name = document.getElementById("eventName").value;
  var date = document.getElementById("eventDate").value;

  if (name == "" || date == "") {
    alert("Please fill in both fields.");
    return;
  }

  var event = { name: name, date: date };
  events.push(event);

  document.getElementById("eventName").value = "";
  document.getElementById("eventDate").value = "";

  showEvents();
}

function deleteEvent(index) {
  events.splice(index, 1);
  showEvents();
}

function showEvents() {
  var list = document.getElementById("eventList");
  list.innerHTML = "";

  if (events.length == 0) {
    list.innerHTML = "<p class='no-events'>No events yet. Add one above!</p>";
    return;
  }

  for (var i = 0; i < events.length; i++) {
    var card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML =
      "<div class='event-info'>" +
      "<h3>" + events[i].name + "</h3>" +
      "<p>" + events[i].date + "</p>" +
      "</div>" +
      "<button onclick='deleteEvent(" + i + ")'>Delete</button>";

    list.appendChild(card);
  }
}
