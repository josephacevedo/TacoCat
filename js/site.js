function getValues() {
  let container = document.getElementById("display-container");
  let userString = document.getElementById("userString").value;
  // removes ant special characters
  userString = userString.replace(/[^a-zA-Z ]/g, "");
  // makes everything lowercase
  userString = userString.toLowerCase();

  let string = reverse(userString);

  if (userString == string) {
    container.style.background = "green";
  } else {
    container.style.background = "red";
  }

  display(string);
}

function reverse(userString) {
  let string = [];

  for (let i = userString.length - 1; i >= 0; i--) {
    string += userString[i];
  }

  return string;
}

function display(string) {
  string = string.replace(/[^a-zA-Z ]/g, "");
  string = string.toLowerCase();

  document.getElementById("display").innerHTML = string;
}
