const items = document.querySelectorAll('.grid-pic');

const maxHeight = items.length * 163.8

const expandButton = document.getElementById("expand-button");
const buttonText = expandButton.querySelector(".basic-lg-text");
const svgElement = document.getElementById('rotate-svg');

const expandableContainer = document.getElementById("realizacje-bottomSide");
const fadeArea = document.getElementById("realizacje-fade-area");

expandButton.addEventListener("click", () => {
    //click to unexpand
    if (expandButton.classList.contains("bottom-negative25px")) {
        expandableContainer.style.maxHeight = `1475px`
        expandableContainer.classList.toggle("overflow-hidden");
        fadeArea.classList.toggle("display-none");
        expandButton.classList.toggle("bottom-negative25px")
        buttonText.textContent = 'Rozwiń'
        svgElement.style.transform = `rotate(0deg)`;
    }
    //click to expand
    else {
        expandableContainer.style.maxHeight = `${maxHeight}px`
        expandableContainer.classList.toggle("overflow-hidden");
        fadeArea.classList.toggle("display-none");
        expandButton.classList.toggle("bottom-negative25px")
        buttonText.textContent = 'Zwiń'
        svgElement.style.transform = `rotate(180deg)`;
    }
});