
let introModal = document.getElementById("introDialog");
  document.getElementById("introDialog").showModal();
  document.getElementById("dialogCloseButton").addEventListener("click", () => {
  introModal.close();
});

introModal.addEventListener("close", toneInit);