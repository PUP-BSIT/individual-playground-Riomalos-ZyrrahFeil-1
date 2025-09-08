(function () {
    // This is an IIFE to avoid polluting the global namespace
    var Button = document.getElementById("greetButton");
    var Inputname = document.getElementById("nameInput");
    var greetingP = document.getElementById("greeting");
    Button.addEventListener("click", function () {
        var name = Inputname.value.trim();
        Inputname.value = "";
        greetingP.textContent = "Hello, ".concat(name, "!");
    });
})();
