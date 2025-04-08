

var tl = gsap.timeline()
.fromTo(".hand", 
    {
        scale: 0.8,
        
    },
    {
        ease: "power2.out",
        duration: 0.8,
        delay: 0.5,
        repeat: 1,
        scale: 1,
    }
)
.fromTo(".hand", 
    {
        opacity: 1
    },
    {
     
        
        opacity: 0
    }, "-=1"
)

.fromTo(".copy", 
    {
        opacity: 1
    },
    {
       
        delay: 0.5,
        opacity: 0
    }
)

.fromTo(".water", {
    opacity: 0,
    x: 100,
    scale: 0.1,
}, {
    x: 0,
    scale: 1,
    opacity: 1,
    ease: "linear",
    
})


.fromTo(".m5", 
    {
        y: 0
    },
    {
        y: 115,
        rotation: 180,
        ease: "linear",
    }
)
.fromTo(".m0", 
    {
        y: 0
    },
    {
        y: 145,
        rotation: -180,
        ease: "linear"
    }, "-=0.4"
)
.fromTo(".m3", 
    {
        y: 0
    },
    {
        y: 110,
        rotation: -180,
        ease: "linear"
    }, "-=0.3"
)
.fromTo(".m4", 
    {
        y: 0
    },
    {
        y: 160,
        rotation: -180,
        ease: "linear"
    }, "-=0.8"
)
.fromTo(".m2", 
    {
        y: 0
    },
    {
        y: 75,
        rotation: -180,
        ease: "linear"
    }, "-=0.3"
)

.fromTo(".m1", 
    {
        y: 0
    },
    {
        y: 120,
        rotation: -180,
        ease: "linear"
    }, "-=0.4"
)
.fromTo(".m6", 
    {
        y: 0
    },
    {
        y: 30,
        rotation: 180,
        ease: "linear"
    }
)
.fromTo(".water", 
    {
        opacity: 1
    },
    {
        opacity: 0
    }, "-=0.5"
)
.fromTo(".m", 
    {
        opacity: 1,
    },
    {
        opacity: 0
    }
)





    var stl = gsap.timeline();
    stl.fromTo(".text1", 
        {
            opacity: 0,
            y: -10,
        },
        {
            y: 0,
            opacity: 1,
            ease: "power2.out",
           
            
    
        }
    )
    .fromTo(".text2", 
        {
            opacity: 0
        },
        {
    
            opacity: 1
        }
    )
    .fromTo(".text3", 
        {
            opacity: 0
        },
        {
            opacity: 1
        }
    )
    .fromTo(".text4", 
        {
            opacity: 0,
            scale: 1,
        },
        {
            scale: 1.2,
            opacity: 1,
            
        }
    )
    .fromTo(".text4", 
        {
            scale: 1.2,
        },
        {
            scale: 1,
            
        }
    )
    


// const firstSlide = document.querySelector(".firstSlide");
// const secondSlide = document.querySelector(".secondSlide");

// document.addEventListener("DOMLoaded", function() {
//  const firstSlide = document.querySelector(".firstSlide");
// const secondSlide = document.querySelector(".secondSlide");
// function firstSlider() {
// firstSlide.classList.remove("hidden")
// firstSlide.classList.remove("hidden")}
//})