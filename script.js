function translateText() {
    let text = document.getElementById("textInput").value;
    let output = document.getElementById("output");

    if (text.trim() === "") {
        output.innerHTML = "<span class='text-red-500'>กรุณากรอกข้อความ</span>";
        return;
    }

    output.innerHTML = "<span class='text-blue-500'>กำลังแปลงข้อความเป็นภาษามือ...</span>";

    setTimeout(() => {
        output.innerHTML = `<span class='text-green-500'>แอนิเมชันสำหรับ: ${text}</span>`;
    }, 1000);
}
