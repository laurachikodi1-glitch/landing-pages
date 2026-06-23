const components = [
  { id: "navbar", file: "components/navbar.html" },
  { id: "footer", file: "components/footer.html" },
];

components.forEach(component => {
  fetch(component.file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(component.id).innerHTML = data;
    });
});