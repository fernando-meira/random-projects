function loading() {
    var now = new Date()
    var hour = now.getHours()
    var minutes = now.getMinutes()
    var img =document.querySelector("img.img")

    var msg = document.querySelector("div.msg")

    if (minutes < 10) {
        minutes = `0:${minutes}`
    }

    msg.innerHTML = `<p>Agora são ${hour}:${minutes}.</p>`
    
    if (hour >= 0 && hour < 12) {
        document.body.style.color = "#222"
        img.src = "assets/img/imgmanha.png"
        document.body.style.background = "#e6e5e4"
        
    } else if (hour < 18) {
        document.body.style.color = "#fff"
        img.src = "assets/img/imgtarde.png"
        document.body.style.background = "#7d220c"
        
    } else {
        document.body.style.color = "#fff"
        img.src = "assets/img/imgnoite.png"
        document.body.style.background = "#2a8e9e"
    }
}
