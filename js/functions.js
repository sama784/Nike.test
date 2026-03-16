function changeMainColor(colorName) {
    let html = document.querySelector("html"),
        newColor = getComputedStyle(html).getPropertyValue(`--${colorName}`);

        changeNavImg(colorName.split("-")[0]);
        changeIcon(colorName.split("-")[0]);
    html.style.setProperty("--main-color", newColor);
}

function changeNavImg(imgName){
    let currentImgSrc = Logo.src,
        currentImgSrcArr = currentImgSrc.split("/");

    currentImgSrcArr[currentImgSrcArr.length - 1] = `${imgName}-logo.png`;

    Logo.src =currentImgSrcArr.join("/");
}

function changeIcon(imgName){
    let icon = document.getElementById("Icon"),
        currentIcon = icon.getAttribute("href"),
        currentIconArr = currentIcon.split("/");

    currentIconArr[1] = `${imgName}-logo.png`;

    icon.setAttribute("href", currentIconArr.join("/"));
}