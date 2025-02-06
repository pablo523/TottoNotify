RegisterNetEvent('tottonotify:sendNotification')
AddEventHandler('tottonotify:sendNotification', function(data)
    SendNUIMessage({
        action = "showNotify",
        type = data.type or "info",
        message = data.message or "No message",
        time = data.time or 5000
    })
end)

exports("SendNotify", function(message, notifyType, duration)
    TriggerEvent('tottonotify:sendNotification', {
        message = message,
        type = notifyType or "info",
        time = duration or 5000
    })
end)
