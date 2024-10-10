window.onload = function() {
  const form = document.querySelector("form");
  const h1 = document.getElementById("sign");
  const h2 = document.getElementById("setting");
  const body = document.querySelector("body");
  form.onsubmit = function(event) {
    event.preventDefault();

    let over18 = document.getElementById("over-18");
    over18.setAttribute("class", "hidden");
    let under18 = document.getElementById("under-18");
    under18.setAttribute("class", "hidden");
    const age = parseInt(document.querySelector("input#age").value);

    if (age > 18) {
      over18.removeAttribute("class");
    } else if (age === 18) {
      over18.removeAttribute("class");
    } else {
      under18.removeAttribute("class");
    }
  }

  form.onreset = function(event) {
    location.reload();
  }

  h1.onclick = function(e) {
    let test = document.getElementById("test");
    test.setAttribute("class", "hidden");
    test.removeAttribute("class");
    test.style.backgroundColor = "grey";
    test.style.margin = "2% 10%";
    test.style.border = "solid black 3px";
    test.style.borderRadius = "15%";
    test.style.fontSize = "150%";
    test.style.padding = "5% 5%";
    h1.style.backgroundColor = "red";
    h1.style.border = "solid black 3px";
  }
  h2.onclick = function(e) {
    e.preventDefault;
    let menu = document.getElementById("menu");
    menu.setAttribute("class", "hidden");
    menu.removeAttribute("class");
    h2.style.backgroundColor = "red";
    h2.style.border = "solid black 3px";
    menu.style.backgroundColor = "grey";
    menu.style.border = "solid black 3px";
    menu.style.margin = "2% 10%";
    menu.style.borderRadius = "15%";

    const button1 = document.getElementById("button1");
    button1.onclick = function() {
      window.close();
    }

    const button2 = document.getElementById("button2");
    button2.onclick = function() {
      body.style.transform = "rotate(5deg)";
    }

    const button3 = document.getElementById("button3");
    button3.onclick = function() {
      body.style.transform = "rotate(-5deg)";
    }

    const button4 = document.getElementById("button4");
    button4.onclick = function() {
      location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
  }
  
}