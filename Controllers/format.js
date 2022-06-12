export default function Format() {
    const format = document.querySelector(".format");
    const input = document.querySelector(".input_area--input");
    const output = document.querySelector(".input_area--output");

    format.addEventListener("click", () => {
        const Data = JSON.parse(input.value);
        const formatted = JSON.stringify(Data, null, 4);

        output.value = formatted;
    });
}