async function loadAppointments() {
    const tableBody = document.querySelector('#appointmentsTable tbody');
    tableBody.innerHTML = '';

    try {
        const response = await fetch('http://localhost:8080/api/appointments');
        const appointments = await response.json();

        appointments.forEach((app) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${app.studentName}</td>
                <td>${app.serviceType}</td>
                <td>${app.appointmentDate}</td>
                <td>${app.appointmentTime}</td>
                <td>${app.status}</td>
            `;

            tableBody.appendChild(row);
        });
    } catch (error) {
        alert('Failed to load appointments');
        console.error(error);
    }
}

// Auto load when page opens
window.onload = loadAppointments;
