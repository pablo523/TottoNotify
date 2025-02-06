$(function () {
    window.addEventListener("message", function (event) {
        if (event.data.action === "showNotify") {
            let icon;
            switch (event.data.type) {
                case "success": icon = "✅"; break;
                case "error": icon = "❌"; break;
                case "info": icon = "ℹ️"; break;
                case "warning": icon = "⚠️"; break;
                default: icon = "🔔";
            }

            let notify = $(`
                <div class="notify ${event.data.type}">
                    <span class="icon">${icon}</span>
                    <span>${event.data.message}</span>
                </div>
            `);

            $("#notify-container").append(notify);
            $("#notify-sound")[0].play();

            setTimeout(() => {
                notify.fadeOut(500, function () {
                    $(this).remove();
                });
            }, event.data.time);
        }
    });
});
