const backgroundImagesUrls = [
    "/img/vintage-concrete.png",
    "/img/sandpaper.png",
    "/img/scribble_light.png",
    "/img/old_map.png",
    "/img/concrete_wall_2.png",
    "/img/cardboard.png",
    "/img/concrete-texture.png",
    "/img/egg_shell.png",
    "/img/fresh_snow.png",
    "/img/furley_bg.png",
    "/img/gplaypattern.png",
    "/img/hexellence.png",
    "/img/wall4.png",
    "/img/wall-4742452_1280.jpg"
]

let counter = 0;
setInterval(changeBackgroundImage, 10000);

function changeBackgroundImage() {
    document.body.style.backgroundImage = `url("${backgroundImagesUrls[counter]}")`;
    if (counter < backgroundImagesUrls.length - 1) {
        counter++
    } else {
        counter = 0;
    }
}