
window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", () => {

    setScrollVar();
    setClientHeight();
    setClientWidth();

});

function setScrollVar() {
    const htmlElement = document.documentElement;
    const percentScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
    //console.log(percentScrolled*100);
    htmlElement.style.setProperty(
        "--scroll",
        (percentScrolled*100) + 0.000001
    );
}

function setClientHeight() {
    const htmlElement = document.documentElement;
    htmlElement.style.setProperty(
        "--client-height",
        htmlElement.clientHeight
    );
}

function setClientWidth() {
    const htmlElement = document.documentElement;
    htmlElement.style.setProperty(
        "--client-width",
        htmlElement.clientWidth
    );
    var s = htmlElement.style.getPropertyValue("--client-width");
    console.log(s);
}

setScrollVar();
setClientHeight();
setClientWidth();

//set functionality for temple events sliders
const shadowedBoxesWithSlideContainers = Array.from(
    document.getElementsByClassName("shadowed-box")
).filter(shadowBox => {
    return shadowBox.getElementsByClassName("slide-container").length !== 0;
})

console.log(shadowedBoxesWithSlideContainers);

for (let i = 0; i < shadowedBoxesWithSlideContainers.length; i++) {
    const box = shadowedBoxesWithSlideContainers[i].getElementsByClassName("slide-container")[0];
    console.log("INSIDE HERE");
    console.log(box);
    shadowedBoxesWithSlideContainers[i].addEventListener("click", () => {
        console.log("printing event");
        box.classList.toggle('active')
    })
}






