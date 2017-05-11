var writeCompanyLink = document.querySelector(".js-write-company-link");
var writeCompanyModal = document.querySelector(".write-company");
var writeCompanyForm = writeCompanyModal.querySelector(".write-company-form");
var writeCompanyName = writeCompanyModal.querySelector("[name=name]");
var writeCompanyEmail = writeCompanyModal.querySelector("[name=email]");
var writeCompanyLetter = writeCompanyModal.querySelector("[name=letter]");
var writeCompanyClose = writeCompanyModal.querySelector(".btn-close");

var mapLink = document.querySelector(".company-location");
var mapModal = document.querySelector(".map");
var mapClose = mapModal.querySelector(".btn-close");

writeCompanyLink.addEventListener("click", function(event) {
  event.preventDefault();
  writeCompanyModal.classList.add("modal-show");
  writeCompanyName.focus();
});

writeCompanyForm.addEventListener("submit", function(event) {
  if (!writeCompanyName.value) {
    event.preventDefault();
    writeCompanyName.classList.add("input-error");
  } else {
    writeCompanyName.classList.remove("input-error");
  }

  if (!writeCompanyEmail.value) {
    event.preventDefault();
    writeCompanyEmail.classList.add("input-error");
  } else {
    writeCompanyEmail.classList.remove("input-error");
  }

  if (!writeCompanyLetter.value) {
    event.preventDefault();
    writeCompanyLetter.classList.add("input-error");
  } else {
    writeCompanyLetter.classList.remove("input-error");
  }
});

writeCompanyClose.addEventListener("click", function(event) {
  event.preventDefault();
  writeCompanyName.classList.remove("input-error");
  writeCompanyEmail.classList.remove("input-error");
  writeCompanyLetter.classList.remove("input-error");
  writeCompanyModal.classList.remove("modal-show");
});

mapLink.addEventListener("click", function(event) {
  event.preventDefault();
  mapModal.classList.add("modal-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapModal.classList.remove("modal-show");
});
