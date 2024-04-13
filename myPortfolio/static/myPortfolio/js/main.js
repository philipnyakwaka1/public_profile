document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll(".testimony");
    testimonials[0].style.display = "block";
    for (let i = 1; i < testimonials.length; i++)
    {
        testimonials[i].style.display = "none";
    }
    const buttonPrev = document.getElementById("prevBtn");
    const buttonNext = document.getElementById("nextBtn");
    let index = 0;   
    function displayNext() {
      if (index < testimonials.length - 1) {
        testimonials[index].style.display = "none";
        testimonials[index + 1].style.display = "block";
        index += 1;
      }
    }
  
    function displayPrev() {
      if (index >= 1) {
        testimonials[index].style.display = "none";
        testimonials[index - 1].style.display = "block";
        index -= 1;
      }
    }
  
    buttonPrev.addEventListener("click", () => displayPrev());
    buttonNext.addEventListener("click", () => displayNext());
  });
  