
// fetching the name from the popup2 html file
// let btn = document.getElementById("username");

// console.log(btn.value)

const fileInput = document.getElementById('input');
const handleFiles = () => {
        const selectedFiles = [...fileInput.files];
        console.log(selectedFiles);
}
fileInput.addEventListener("change", handleFiles);
