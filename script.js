document.querySelectorAll(".portfolio-item").forEach(item => {
    item.addEventListener("click", function (e) {
        let extra = this.children[1];
        if (extra.style.display === "none") {
            extra.style.display = "flex";
        } else {
            extra.style.display = "none";
        }
  });
});