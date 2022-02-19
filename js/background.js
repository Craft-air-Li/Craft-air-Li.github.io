const backgroundImges = ["back(1).jpg","back(2).jpg","back(3).jpg","back(4).jpg"];

const chosenImage = backgroundImges[Math.floor(Math.random() * backgroundImges.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.prepend(bgImage);