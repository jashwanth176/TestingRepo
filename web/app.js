const title = document.querySelector("#title");
const message = document.querySelector("#message");
const refresh = document.querySelector("#refresh");

function setMessage(value) {
  message.textContent = value;
}

refresh.addEventListener("click", () => {
  title.textContent = "Updated";
  setMessage("The page was refreshed.");
});
