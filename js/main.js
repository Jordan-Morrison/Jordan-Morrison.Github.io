const Jordan = {

    main: function(){
        Jordan.addEventListeners();
        Jordan.addSiemas();
    },

    addSiemas: function(){
        const siemas = document.querySelectorAll('.siema');
        for(const siema of siemas) {
            new Siema({
                selector: siema,
                onInit: () => {
                    let div = document.createElement("div");
                    div.classList.add("slideIndicator");
                    siema.firstChild.childNodes.forEach(slide => {
                        div.innerHTML += `<i class="fas fa-circle"></i>`;
                    });
                    div.firstChild.classList.add("active");
                    siema.insertAdjacentElement("afterend", div);
                },
                onChange: Jordan.changeSlideIndicator
            })
        }
    },

    changeSlideIndicator: function(){
        this.selector.nextSibling.childNodes.forEach(indicator => {
            indicator.classList.remove("active");
        })
        this.selector.nextSibling.childNodes[this.currentSlide].classList.add("active");
    },

    addEventListeners: function(){
        document.addEventListener("scroll", function(){
            if (scrollY > document.getElementById("welcomeScreen").clientHeight * 0.50){
                document.body.classList.replace("redTheme", "blueTheme");
                document.querySelector(".fa-chevron-down").classList.add("up");
                document.querySelector(".fa-chevron-down").setAttribute("onclick", "Jordan.scrollToScreen('welcomeScreen')");
            }
            else{
                document.body.classList.replace("blueTheme", "redTheme");
                document.querySelector(".fa-chevron-down").classList.remove("up");
                document.querySelector(".fa-chevron-down").setAttribute("onclick", "Jordan.scrollToScreen('portfolioScreen')");
            }
        });
    },

    scrollToScreen: function(screen){
        zenscroll.center(document.getElementById(screen));
    }
}


window.addEventListener('DOMContentLoaded', (event) => {
    Jordan.main();
});