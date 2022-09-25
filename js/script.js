const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

const validUrl = (str) => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
};

const formSubmit = (e) => {
  e.preventDefault();
  if (input.value === "") {
    errMsg.textContent = "Please enter something!";
    input.classList.add("border-red");
  } else if (!validUrl(input.value)) {
    errMsg.textContent = "Please enter a valid URL!";
    input.classList.add("border-red");
  } else {
    errMsg.textContent = "";
    input.classList.remove("border-red");
    alert("Success!");
  }
};

linkForm.addEventListener("submit", formSubmit);
