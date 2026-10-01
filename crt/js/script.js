// ===============================
// AI Assistant
// ===============================

function askAI() {

    const question = prompt(
        "🤖 AI Assistant\n\nWhat IT problem are you facing?"
    );

    if (question) {

        alert(
            "🤖 AI Assistant\n\n" +
            "I received your issue:\n\n" +
            question +
            "\n\n" +
            "Our AI support system will analyze the problem " +
            "and suggest a solution."
        );
    }
}


// ===============================
// Page Loaded
// ===============================

document.addEventListener("DOMContentLoaded", function () {


    // ===============================
    // Ticket Search
    // ===============================

    const searchBox =
        document.getElementById("searchTicket");

    if (searchBox) {

        searchBox.addEventListener("input", function () {

            const searchText =
                searchBox.value.toLowerCase().trim();

            const rows =
                document.querySelectorAll(
                    ".ticket-table .ticket-row"
                );

            rows.forEach(function (row) {

                if (row.classList.contains("ticket-header")) {
                    return;
                }

                const rowText =
                    row.textContent.toLowerCase();

                if (rowText.includes(searchText)) {
                    row.style.display = "grid";
                } else {
                    row.style.display = "none";
                }

            });

        });

    }


    // ===============================
    // Ticket Status Management
    // ===============================

    const statusSelects =
        document.querySelectorAll(".status-select");

    statusSelects.forEach(function (select) {

        select.addEventListener("change", function () {

            updateDashboardCounts();

            alert(
                "✅ Ticket status changed to: " +
                select.value
            );

        });

    });


    // ===============================
    // Update Dashboard Counts
    // ===============================

    function updateDashboardCounts() {

        const allStatusSelects =
            document.querySelectorAll(".status-select");

        let openCount = 0;
        let progressCount = 0;
        let resolvedCount = 0;

        allStatusSelects.forEach(function (select) {

            if (select.value === "Open") {
                openCount++;
            }

            if (select.value === "In Progress") {
                progressCount++;
            }

            if (select.value === "Resolved") {
                resolvedCount++;
            }

        });

        const totalCount =
            allStatusSelects.length;


        document.getElementById("totalTickets").textContent =
            totalCount;

        document.getElementById("openTickets").textContent =
            openCount;

        document.getElementById("progressTickets").textContent =
            progressCount;

        document.getElementById("resolvedTickets").textContent =
            resolvedCount;

    }

});


// ===============================
// Ticket Creation
// ===============================

const ticketForm =
    document.getElementById("ticketForm");

if (ticketForm) {

    ticketForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const studentName =
            document.getElementById("studentName").value;

        const category =
            document.getElementById("category").value;

        const priority =
            document.getElementById("priority").value;

        const description =
            document.getElementById("description").value;

        const ticketID =
            "IT-" + Math.floor(Math.random() * 9000 + 1000);

        document.getElementById("ticketResult").innerHTML = `

            <h2>✅ Ticket Created Successfully!</h2>

            <p>
                <strong>🎫 Ticket ID:</strong>
                ${ticketID}
            </p>

            <p>
                <strong>👤 Student:</strong>
                ${studentName}
            </p>

            <p>
                <strong>🏷️ Category:</strong>
                ${category}
            </p>

            <p>
                <strong>⚠️ Priority:</strong>
                ${priority}
            </p>

            <p>
                <strong>📝 Problem:</strong>
                ${description}
            </p>

            <p>
                <strong>📌 Status:</strong>
                Open
            </p>

        `;

        ticketForm.reset();

    });

}