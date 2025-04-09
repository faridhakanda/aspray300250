function firstSlide() {
  const firstSlide = document.querySelector(".firstSlide");
  const secondSlide = document.querySelector(".secondSlide");
  firstSlide.classList.remove("hidden");
  secondSlide.classList.add("hidden");
  console.log("first slide");
  var tl = gsap.timeline();

  tl.fromTo(
    ".hand",
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
    .fromTo(
      ".hand",
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
      "-=1"
    )

    .fromTo(
      ".copy",
      {
        opacity: 1,
      },
      {
        delay: 0.5,
        opacity: 0,
      }
    )

    .fromTo(
      ".spray",
      {
        opacity: 0,
        x: 135,
        y: 3,
        scale: 0.1,
      },
      {
        x: -30,
        scale: 1.2,
        opacity: 1,
        duration: 2.5,
      }
    )
    .from(".spray", {
      opacity: 0,
      ease: "linear",
    })

    .fromTo(
      ".m5",
      {
        y: 0,
      },
      {
        y: 115,
        rotation: 180,
        ease: "linear",
      },
      "-=1.5"
    )
    .fromTo(
      ".m0",
      {
        y: 0,
      },
      {
        y: 145,
        rotation: -180,
        ease: "linear",
      },
      "-=1.6"
    )
    .fromTo(
      ".m3",
      {
        y: 0,
      },
      {
        y: 110,
        rotation: -180,
        ease: "linear",
      },
      "-=1.7"
    )
    .fromTo(
      ".m4",
      {
        y: 0,
      },
      {
        y: 160,
        rotation: -180,
        ease: "linear",
      },
      "-=1.6"
    )
    .fromTo(
      ".m2",
      {
        y: 0,
      },
      {
        y: 75,
        rotation: -180,
        ease: "linear",
      },
      "-=1.6"
    )

    .fromTo(
      ".m1",
      {
        y: 0,
      },
      {
        y: 120,
        rotation: -180,
        ease: "linear",
      },
      "-=1.6"
    )
    .fromTo(
      ".m6",
      {
        y: 0,
      },
      {
        y: 30,
        rotation: 180,
        ease: "linear",
      },
      "-=1.7"
    )

    .fromTo(
      ".m",
      {
        opacity: 1,
      },
      {
        opacity: 0,
      }
    );

  setTimeout(secondSlide, 0);
}
function secondSlide() {
  console.log("second slide is running!");
  //const firstSlide = document.querySelector(".firstSlide");
  const secondSlide = document.querySelector(".secondSlide");

  secondSlide.classList.remove("hidden");

  var tl = gsap.timeline();

  tl.fromTo(".family", { opacity: 0, y: -10 }, { opacity: 1, y: 0 })
    .fromTo(".aci", { opacity: 0 }, { opacity: 1 })
    .fromTo(".mosquito", { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 0.5 })
    //.fromTo(".aci", {opacity: 0}, {opacity: 1})
    .fromTo(".batch", { opacity: 0 }, { opacity: 1 })
    .fromTo(
      ".batch",
      { scale: 0.5 },
      { scale: 0.6, ease: "power1.in", duration: 1.5, repeat: -1, yoyo: true }
    );
  setTimeout(secondSlide, 3000);
}
firstSlide();
