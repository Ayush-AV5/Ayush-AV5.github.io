// from the instructor | https://www.stackoverflow.com
function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}
const avatar = document.querySelector("#player");
const gem = document.querySelector("#gem");
const score = document.querySelector("span");
let totalGems = 0;

window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowDown" || e.key == "s") {
        moveVertical(avatar, 50);
    } else if (e.key == "ArrowUp" || e.key == "w") {
        moveVertical(avatar, -50);
    } else if (e.key == "ArrowRight" || e.key == "d") {
        moveHorizontal(avatar, 50, "right");
    } else if (e.key == "ArrowLeft" || e.key == "a") {
        moveHorizontal(avatar, -50, "left");
    }
    if (isTouching(avatar, gem)) {
        // displaying and changing player gem score
        totalGems++;
        score.innerText = totalGems;
        // changing the gem pos
        moveGem(gem);
    }
});

const moveVertical = (element, step) => {
    let curPos = getPos(avatar.style.top);
    let stepAhead = curPos + step;
    if (stepAhead < window.innerHeight - 190 && stepAhead > -5) {
        element.style.top = `${stepAhead}px`;
    }
};
const moveHorizontal = (element, step, direction) => {
    let curPos = getPos(avatar.style.left);
    let stepAhead = curPos + step;
    if (stepAhead < window.innerWidth - 190 && stepAhead > -5) {
        element.style.left = `${stepAhead}px`;
    }
    // if direction is right then scale normal else flip
    element.style.transform =
        direction === "right" ? "scale(1,1)" : "scale(-1,1)";
};
const getPos = (pos) => {
    return !pos ? 100 : parseInt(pos.slice(0, -2));
};
const moveGem = (element) => {
    const h = Math.floor(Math.random() * (window.innerHeight - 190));
    const w = Math.floor(Math.random() * (window.innerWidth - 190));
    element.style.top = `${h}px`;
    element.style.left = `${w}px`;
};
