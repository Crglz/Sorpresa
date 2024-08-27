document.getElementById('revealButton').addEventListener('click', function() {
    var message = document.getElementById('specialMessage');
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
    } else {
        message.classList.add('hidden');
    }
});

// Cuenta Regresiva
function countdown() {
    var now = new Date().toLocaleString("en-US", {timeZone: "America/Mexico_City"});
    var nowDate = new Date(now);
    var eventDate = new Date('2018-08-26T15:31:00').toLocaleString("en-US", {timeZone: "America/Mexico_City"});
    var eventDateDate = new Date(eventDate);
    
    var distance = nowDate - eventDateDate;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = days + "d " + hours + "h " +
    minutes + "m " + seconds + "s ";

    setTimeout(countdown, 1000);
}

countdown();
