const increaseButton = document.querySelector('.counter__button--increase');
const decreaseButton = document.querySelector('.counter__button--decrease');
const resetButton = document.querySelector('.counter__reset-button');
const counterValue = document.querySelector('.counter__value');
const title = document.querySelector('.counter__title');

const MAX_LIMIT = 5;

// function to update UI
function updateCounter(newValue) {
    if (newValue < 0) newValue = 0;
    if (newValue > MAX_LIMIT) newValue = MAX_LIMIT;

    counterValue.textContent = newValue;

    if (newValue === MAX_LIMIT) {
        title.textContent = "Don't cross limit";
    } else {
        title.textContent = "Fancy Counter";
    }
}

// buttons
increaseButton.addEventListener("click", () => {
    let value = +counterValue.textContent;
    updateCounter(value + 1);
});

decreaseButton.addEventListener("click", () => {
    let value = +counterValue.textContent;
    updateCounter(value - 1);
});

resetButton.addEventListener("click", () => {
    updateCounter(0);
});

// 🔥 Keyboard control
document.addEventListener("keydown", (e) => {
    let value = +counterValue.textContent;

    if (e.key === "ArrowUp") {
        updateCounter(value + 1);
    }

    if (e.key === "ArrowDown") {
        updateCounter(value - 1);
    }
});