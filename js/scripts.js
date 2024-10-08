window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let over21 = document.getElementById("over-21");
    over21.setAttribute("class", "hidden");
    let under21 = document.getElementById("under-21");
    under21.setAttribute("class", "hidden");
    const age = parseInt(document.querySelector("input#age").value);

    if (age > 21) {
      over21.removeAttribute("class");
    } else if (age === 21) {
      window.alert("Test");
      over21.removeAttribute("class");
    } else {
      under21.removeAttribute("class");
    }
  };
};