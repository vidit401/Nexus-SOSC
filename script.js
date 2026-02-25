let events = [];

/* ===== ADD EVENT ===== */
function addEvent() {
  let name = document.getElementById("eventName").value;
  let date = document.getElementById("eventDate").value;

  if (name === "" || date === "") {
    alert("Please fill all fields");
    return;
  }

  events.push({ name, date });
  renderEvents();

  // clear inputs
  document.getElementById("eventName").value = "";
  document.getElementById("eventDate").value = "";
}

/* ===== RENDER EVENTS ===== */
function renderEvents() {
  let list = document.getElementById("eventList");
  list.innerHTML = "";

  events.forEach((event, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <span>${event.name} - ${event.date}</span>
      <button onclick="deleteEvent(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}

/* ===== DELETE EVENT ===== */
function deleteEvent(index) {
  let confirmDel = confirm("Are you sure you want to delete this event?");
  if (confirmDel) {
    events.splice(index, 1);
    renderEvents();
  }
}

/* ===== THEME TOGGLE ===== */
const toggleBtn = document.getElementById("themeToggle");

// load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const isLight = document.body.classList.contains("light-mode");
  toggleBtn.textContent = isLight ? "☀️" : "🌙";

  localStorage.setItem("theme", isLight ? "light" : "dark");
});