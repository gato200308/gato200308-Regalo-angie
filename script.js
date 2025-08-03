document.addEventListener("DOMContentLoaded", () => {
    const calendarGrid = document.getElementById("calendarGrid");
    const messageTitle = document.getElementById("messageTitle");
    const messageText = document.getElementById("messageText");
    const dateDisplay = document.getElementById("dateDisplay");

    const cartas = [
        { fecha: "2025-08-04", archivo: "carta11.html" },
        { fecha: "2025-08-05", archivo: "carta12.html", esAniversario: true },
        { fecha: "2025-08-22", archivo: "carta1.html" },
        { fecha: "2025-08-23", archivo: "carta2.html" },
        { fecha: "2025-08-24", archivo: "carta3.html" },
        { fecha: "2025-08-25", archivo: "carta4.html" },
        { fecha: "2025-08-26", archivo: "carta5.html" },
        { fecha: "2025-08-27", archivo: "carta6.html" },
        { fecha: "2025-08-28", archivo: "carta7.html" },
        { fecha: "2025-08-29", archivo: "carta8.html" },
        { fecha: "2025-08-30", archivo: "carta9.html" },
        { fecha: "2025-08-31", archivo: "carta10.html" },
    ];

    let selectedDay = null;

    cartas.forEach((carta) => {
        const fechaCarta = new Date(carta.fecha);
        fechaCarta.setHours(0, 0, 0, 0);

        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);

        const dayDiv = document.createElement("div");
        dayDiv.className = "calendar-day";
        dayDiv.innerHTML = `
            <div class="day-number">
                ${carta.esAniversario ? "💞 " : ""}${fechaCarta.getDate()} ago
            </div>
            <div class="day-date">${carta.fecha}</div>
        `;

        if (hoy < fechaCarta) {
            dayDiv.classList.add("locked");
        } else {
            dayDiv.classList.add("available");
        }

        dayDiv.addEventListener("click", () => {
            const ahora = new Date();

            if (selectedDay) selectedDay.classList.remove("selected");
            selectedDay = dayDiv;
            selectedDay.classList.add("selected");

            if (ahora < fechaCarta) {
                clearInterval(window.countdownInterval);
                messageTitle.textContent = "⏳ Aún no es tiempo...";
                updateCountdown(carta.fecha);
                window.countdownInterval = setInterval(() => {
                    updateCountdown(carta.fecha);
                }, 1000);
            } else {
                clearInterval(window.countdownInterval);
                fetch(`cartas/${carta.archivo}`)
                    .then(response => response.text())
                    .then(data => {
                        const dia = fechaCarta.getDate();
                        const mensajeBase = `💌 Carta del ${dia} de agosto`;
                        const titulo = carta.esAniversario ? `💞 Aniversario - ${mensajeBase}` : mensajeBase;

                        messageTitle.textContent = titulo;
                        messageText.innerHTML = data;
                        dateDisplay.textContent = `📅 ${carta.fecha}`;
                    })
                    .catch(err => {
                        messageTitle.textContent = "⚠️ Error";
                        messageText.textContent = "No se pudo cargar esta carta.";
                    });
            }
        });

        calendarGrid.appendChild(dayDiv);
    });

    function updateCountdown(fechaStr) {
        const objetivo = new Date(fechaStr + "T00:00:00");
        const ahora = new Date();
        const diferencia = objetivo - ahora;

        if (diferencia <= 0) {
            messageTitle.textContent = "✅ ¡La carta ya está disponible!";
            messageText.textContent = "Haz clic de nuevo para leerla.";
            dateDisplay.textContent = "";
            clearInterval(window.countdownInterval);
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
        const segundos = Math.floor((diferencia / 1000) % 60);

        messageText.innerHTML = `
            Esta carta se desbloqueará el <strong>${fechaStr}</strong><br>
            Faltan: <strong>${dias}d ${horas}h ${minutos}m ${segundos}s</strong>
        `;
        dateDisplay.textContent = "";
    }
});
