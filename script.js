gsap.fromTo(".hand", 
    {
        scale: 0.8,
        
    },
    {
        ease: "linear",
        duration: 1,
        repeat: 1,
        scale: 1,
    }
)
gsap.fromTo(".hand", 
    {
        opacity: 1
    },
    {
     
        delay: 0.5,
        opacity: 0
    }
)

gsap.fromTo(".copy", 
    {
        opacity: 1
    },
    {
       
        delay: 0.5,
        opacity: 0
    }
)

