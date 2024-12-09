const optionMenu = document.querySelector(".select-menu"),
        selectBtn = optionMenu.querySelector(".select-btn"),
        options = optionMenu.querySelectorAll(".option"),
        selectBtnText = optionMenu.querySelector(".select-btn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        selectBtnText.innerText = selectedOption;
        
        optionMenu.classList.remove("active");
    })
})
