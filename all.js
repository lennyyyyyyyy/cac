$("img").filter(function() {
    return this.src.endsWith("coin.png");
}).addClass("d-inline-block")
//     .attr("data-bs-toggle", "tooltip")
//     .attr("data-bs-title", this.src)
// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$("nav").addClass("navbar bg-primary text-light"); // add bootstrap classes
$("nav").load("navbar.php", () => {
    var path = window.location.pathname;
    $("a.login").attr("href", "login.php?redirect=" + path); // redirect path
}); // load php