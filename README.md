# TottoNotify
My first script ever, custom notify script with popup sound. QBCORE/ESX


(https://ibb.co/5g43bjys)


#tottoNotify

To replace QBCore notify system, you need to replace the function in qb-core/main/functions.lua

Find this line: 

function QBCore.Functions.Notify(text, texttype, length)
    if type(text) == "table" then
        local ttext = text.text or 'Placeholder'
        local caption = text.caption or 'Placeholder'
        texttype = texttype or 'primary'
        length = length or 5000
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            length = length,
            text = ttext,
            caption = caption
        })
    else
        texttype = texttype or 'primary'
        length = length or 5000
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            length = length,
            text = text
        })
    end
end

And replace it with this:

function QBCore.Functions.Notify(text, texttype, length)
    if type(text) == "table" then
        local ttext = text.text or 'Placeholder'
        local caption = text.caption or 'Placeholder'
        texttype = texttype or 'info'  -- Vi använder "info" som default typ
        length = length or 5000  -- 5000ms är default längd

        TriggerEvent('tottonotify:sendNotification', {
            message = ttext,
            type = texttype,
            time = length
        })
    else
        texttype = texttype or 'info'
        length = length or 5000
        
        TriggerEvent('tottonotify:sendNotification', {
            message = text,
            type = texttype,
            time = length
        })
    end
end


For manual exports: 

exports("SendNotify", function(message, notifyType, duration)
    TriggerEvent('tottonotify:sendNotification', {
        message = message,
        type = notifyType or "info",
        time = duration or 5000
    })
end)
