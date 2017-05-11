var writeCompanyLink = document.querySelector(".js-write-company-link");
var writeCompanyModal = document.querySelector(".write-company");
var close = writeCompanyModal.querySelector(".btn-close");
var writeCompanyForm = writeCompanyModal.querySelector(".write-company-form");
var name = writeCompanyModal.querySelector("[name=name]");
var email = writeCompanyModal.querySelector("[name=email]");
var letter = writeCompanyModal.querySelector("[name=letter]");

writeCompanyLink.addEventListener("click", function(event) {
  event.preventDefault();
  writeCompanyModal.classList.add("modal-show");
});

writeCompanyForm.addEventListener("submit", function(event) {
  if (!name.value) {
    event.preventDefault();
    console.log(name);
    name.classList.add("input-error");
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  writeCompanyModal.classList.remove("modal-show");
});
