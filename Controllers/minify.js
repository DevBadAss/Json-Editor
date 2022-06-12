export default function Minify() {
    const minify = document.querySelector(".minify");
    const input = document.querySelector(".input_area--input");
    const output = document.querySelector(".input_area--output");

    minify.addEventListener("click", () => {
        const Data = JSON.parse(input.value);
        const minified = JSON.stringify(Data);

        output.value = minified;
    });
}