function updateDateTime() {
    const now = new Date();

    const day = now.getDay();
    const date = now.getDate();
    const month = monthNames[now.getMonth()];

    const hours = now.getHours();
    const minutes = now.getMinutes();

    if (prevDay !== day) {
        dateTime.children[0].textContent = `${dayNames[day]}, ${date} ${month}`;
        prevDay = day;
    }

    if (prevMinutes !== minutes) {
        dateTime.children[1].textContent = `
        ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

        prevMinutes = minutes
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);
