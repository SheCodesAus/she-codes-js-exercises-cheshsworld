function getImage() {
    let imageURL = document.getElementById("image-url").value;

    let imageBox = document.createElement('img');
    imageBox.id = 'meme-image';
    imageBox.src = imageURL;
    document.getElementById("meme-builder").style.display = "block";
    
}

function addTopText() {
    let topText = document.getElementById("top-text-input").value;
    document.getElementById("top-text").innerText = topText;
}

function addBottomText() {
    let bottomText = document.getElementById("top-text-input").value;
    document.getElementById("top-text").innerText = bottomText;
}