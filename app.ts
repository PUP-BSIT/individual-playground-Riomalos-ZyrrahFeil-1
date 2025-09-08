(() => {
    // This is an IIFE to avoid polluting the global namespace
    const Button = document.getElementById("greetButton") as HTMLButtonElement;
    const Inputname = document.getElementById("nameInput") as HTMLInputElement;
    const greetingP = document.getElementById("greeting") as HTMLParagraphElement;

    Button.addEventListener("click", () => {
        const name = Inputname.value.trim();
        Inputname.value = "";
        greetingP.textContent = `Hello, ${name}!`;
    });
})();
