var slideIndex = 1;
//Show first slide on start up:

function changeSlide(step) {
    showSlide(slideIndex += step);
}

function showSlide(index)
{
    var slideGroup = document.getElementsByClassName('slide');
    
    if (index > slideGroup.length) {
        slideIndex = 1;
    }
    if (index < 1) {
        slideIndex = slideGroup.length;
    }
    
    //Hide all first:

    for (var i = 0; i < slideGroup.length; i++) {
        slideGroup[i].style.display = "none"
    }
    //Show the correct slide:
    slideGroup[slideIndex - 1].style.display = "block";
}

showSlide(slideIndex);