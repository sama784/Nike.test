function changeMainColor(colorName){
    let html = document.querySelector("html"),
        newColor = getComputedStyle(html).getPropertyValue(`--${colorName}`);

        html.style.setProperty("--main-color", newColor);
}