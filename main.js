canvas = document.getElementById("myCanvas");
ctx =  canvas.getContext("2d");
car1Width = 100;
car1Height = 90;
carImg = "car1.png";
carX = 50;
carY = 50;
car2Width = 100;
car2Height = 90;
carImg2 ="car 2.png";
carX2 = 50;
carY2 = 200;
bckgrImg ="windowBackground.gif"

function add() {
    bckgr_img = new Image();
    bckgr_img.onload = uploadbckgr_img;
    bckgr_img.src = bckgrImg;

    car_img = new Image();
    car_img.onload = uploadCar_img;
    car_img.src = carImg;

    car_img2 = new Image();
    car_img2.onload = uploadCar_img2;
    car_img2.src = carImg2;
}

function uploadbckgr_img() {
    ctx.drawImage(bckgr_Img, 0, 0, canvas.width, canvas.height);
}

function uploadCar_img() {
    ctx.drawImage(car_img, carX, carY, car1Width, car1Height);
}
function uploadCar_img2() {
    ctx.drawImage(car_img2, carX2, carY2, car2Width, car2Height);
}

window.addEventListener("keydown", my_Keydown);

function my_Keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);  
    if (keypressed == "38") {
        up1();
        console.log("up arrow key");
    }
    if (keypressed == "40") {
        down1();
        console.log("down arrow key");
    }
    if (keypressed == "37") {
        left1();
        console.log("left arrow key");
    }
    if (keypressed == "39") {
        right1();
        console.log("rightarrow key");
    }
    if (keypressed =="87") {
        up2();
        console.log("w key");
    }
    if (keypressed =="83") {
        down2();
        console.log("s key");
    }
    if (keypressed =="65") {
        left2();
        console.log("a key");
    }
    if (keypressed =="68") {
        right2();
        console.log("d key");
    }
}

