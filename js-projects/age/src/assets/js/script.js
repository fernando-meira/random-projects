function check() {
    var now = new Date()
    var currentyear = now.getFullYear()
    var birth = document.querySelector("input.birth").value

    if (birth > currentyear || birth.length == 0) {
        alert("Verifique os dados!")
    } else {
        
        var genre = ''
        var age = currentyear - Number(birth)
        var fsex = document.getElementsByName("radsex")
        var img = document.createElement("img")
        var msg = document.querySelector("div.msg")
        img.setAttribute('class','foto')

        if (fsex[0].checked) {
            genre = 'homem'
            if (age >=0 && age <= 1) {
                img.setAttribute("src","assets/img/m-b.png")
                // Baby
            } else if(age <= 4) {
                img.setAttribute("src", "assets/img/m-c.png")
            }else if (age < 12) {
                img.setAttribute("src","assets/img/m-c2.png")
                // Criança
            } else if (age < 18) {
                img.setAttribute("src","assets/img/m-y.png")
                // Adolecente
            } else if (age < 24) {
                img.setAttribute("src","assets/img/m-y1.png")
                // Jovem
            } else if (age < 35) {
                img.setAttribute("src","assets/img/m-m.png")
                // Adulto
            } else if (age < 60) {
                img.setAttribute("src","assets/img/m-ma.png")
                // Meia idade
            } else if (age >= 60 && age < 123) {
                img.setAttribute("src","assets/img/m-o.png")
                // Idoso
            } else {
                img.setAttribute("src","assets/img/alert.png")
            }
        } else if (fsex[1].checked) {
            genre = 'mulher'
            if (age >=0 && age <= 1) {
                img.setAttribute("src","assets/img/f-b.png")
                // Baby
            } else if (age <= 4) {
                img.setAttribute("src","assets/img/f-c.png")
                // Criança
            } else if (age < 10) {
                img.setAttribute("src","assets/img/f-c1.png")
                // Adolecente
            } else if (age < 17) {
                img.setAttribute("src","assets/img/f-y.png")
                // Jovem
            } else if (age < 27) {
                img.setAttribute("src","assets/img/f-m1.png")
                // Adulto
            } else if (age < 40) {
                img.setAttribute("src","assets/img/f-m2.png")
                // Meia idade
            } else if (age < 60) {
                img.setAttribute("src","assets/img/f-ma.png")
                // Meia idade 
            } else if (age >= 60 && age < 123) {
                img.setAttribute("src","assets/img/f-o.png")
                // Idoso
            } else {
                img.setAttribute("src","assets/img/alert.png")
            }
        }
    } 

    if (age >=0 && age < 123) {
        msg.innerHTML = `<p>Detectamos ${genre} com ${age} anos.</p>`
        msg.style.textAlign = "center"
        msg.appendChild(img)
    } else {

        msg.innerHTML = "<p>O título de pessoa mais velha da história é atribuído à francesa Jeanne Calment que morreu em 4 de agosto de 1997 aos 122 anos e 164 dias. Verifique os dados e tente novamente!<p>" 
        msg.style.textAlign = "center"
        msg.style.fontSize = "medium"
        msg.appendChild(img)
    }
}

