$("img").filter(function() {
    return this.src.endsWith("coin.png");
}).addClass("d-inline-block")
//     .attr("data-bs-toggle", "tooltip")
//     .attr("data-bs-title", this.src)
// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))