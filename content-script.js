function findPassowrdInputForm() {
  const inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "password") {
      return { field: inputs[i], form: inputs[i].form };
    }
  }
  return null;
}

function getUsernameInputFromForm(form) {
  for (let i = 0; i < form.length; i++) {
    if (form[i].type === "email") {
      // Fist handle email
      return form[i];
    }
    if (form[i].type === "text") {
      return form[i];
    }
  }
}

function getInputs() {
  var obj = findPassowrdInputForm();
  if (obj) {
    var passwordInput = obj.field;
    var usernameInput = getUsernameInputFromForm(obj.form);
    if (passwordInput && usernameInput) {
      passwordInput.style.backgroundImage = `url('${browser.extension.getURL('logo.png')}')`
      passwordInput.style.backgroundPosition = "right";
      passwordInput.style.backgroundSize = "contain";
      passwordInput.style.backgroundRepeat = "no-repeat";

      return {
        username: usernameInput.value,
        password: passwordInput.value,
      };
    }
  }
  return null;
}

let _try = 10;
var interval = setInterval(function() {
  if (getInputs() || _try < 0) {
    clearInterval(interval);
  }
  _try--;
}, 500);

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const data = getInputs();
  if (data) {
    sendResponse(data);
  } else {
    sendResponse(null);
  }
});
