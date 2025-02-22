let img;
const chicago = [
  "portillos",
  "chicago bears",
  "white sox",
  "NOT the weather",
  "deep dish pizza",
];
const num = [1, 2, 3, 4, 5];
const color = ["lime", "cyan", "blue", "red", "orange", "yellow", "magenta"];
function setup() {
  createCanvas(400, 400);
     img = [
  loadImage("image1.webp"),
  loadImage("image.png"),
  loadImage("image2.jpeg"),
  loadImage("download1.png"),
  loadImage("download2.jpeg"),
];
}
function draw() {

  background(220);
  frameRate(1);
  for (number of num) {
    fill(random(color));
    const x = random(50, 350);
    const y = random(50, 350);
    const imgx = random(50, 350);
    const imgy = random(50, 350);
    textSize(20);
    const chic = random(chicago);
    text(chic, x, y);
    const ranImg = random(img);
    image(ranImg, imgx, imgy);
  }
}
