document.addEventListener("DOMContentLoaded", function() {
    const foldButton = document.getElementById("fold-button");
    const lgList = document.getElementById("lg-list");

    foldButton.addEventListener("click", function() {
        lgList.classList.toggle("active");

        if (lgList.classList.contains("active")) {
            foldButton.src = "./img/media/fold_up_button.png";
        } else {
            foldButton.src = "./img/media/fold_down_button.png";
        }
    });
});