window.transitionclasses = {
  footer: "footer-reverse",
  "float-in-top": "float-in-top-reverse",
  "float-in-bottom": "float-in-bottom-reverse",
  "float-in-left": "float-in-left-reverse",
  "float-in-right": "float-in-right-reverse",
  "delayed-float-in-right": "float-in-right-reverse",
};

window.onload = () => {
  for (const after of Object.values(window.transitionclasses)) {
    let items = document.getElementsByClassName(after);
    for (const item of items) {
      item.classList.remove(after);
    }
  }
};

window.env = {
  filesUrl: "https://files-host.siriusmart.repl.co",
  outReqUrl:
    "https://server.siriusmart.repl.co/api/v1/utils/request-proxy/html",
  notesUrl: "https://notes.siriusmart.repl.co",
};

function decodeEntity(inputStr) {
  var textarea = document.createElement("textarea");
  textarea.innerHTML = inputStr;
  return textarea.value;
}

window.listeners = {};

window.addEventListener("message", ({ data: message }) => {
  if (
    message.type !== undefined &&
    typeof listeners[message.type] === "function"
  ) {
    listeners[message.type](message);
  }
});
