// gsap.registerPlugin(ScrollTrigger);

// const images = [
//   { id: "img1", threshold: 0 },
//   { id: "img2", threshold: 0.11 },
//   { id: "img3", threshold: 0.19 },
//   { id: "img4", threshold: 0.25 },
//   { id: "img5", threshold: 0.3 },
//   { id: "img6", threshold: 0.6 }
//   // Add more images and thresholds if needed
// ];

// let prevProgress = 0;

// let t1 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".banner",
//     pin: true,
//     start: "top top",
//     end: "+=300%",
//     scrub: 0.1,
//     markers: true,
//     ease: "none",
//     onUpdate: (self) => {
//       const totalProgress = self.progress;
//       const direction = totalProgress > prevProgress ? "down" : "up";

//       images.forEach((image, index) => {
//         const { id, threshold } = image;
//         const nextThreshold = images[index + 1]?.threshold || 1;

//         if (
//           (direction === "down" && totalProgress >= threshold && totalProgress < nextThreshold) ||
//           (direction === "up" && totalProgress >= threshold && totalProgress < nextThreshold)
//         ) {
//           gsap.to(`#${id}`, { autoAlpha: 1, zIndex: 9999 });
//         } else {
//           gsap.to(`#${id}`, { autoAlpha: 0, zIndex: -1 });
//         }
//       });

//       const lastImage = images[images.length - 1];
//       if (totalProgress >= lastImage.threshold) {
//         gsap.set(`#${lastImage.id}`, { autoAlpha: 1 });
//       }

//       prevProgress = totalProgress;
//     }
//   }
// });

// t1.to(".bannertext", { y: -400, scale: 0.6 }, "abc")
// .to(".bannerimg",{x:-50},"a")
//   .to(".bannertext", { x: -200 },"a")
//   .to(".bannerimg", { scale: 0.1 }, "abc")

gsap.registerPlugin(ScrollTrigger);

const images = [
  { id: "img1", threshold: 0 },
  { id: "img2", threshold: 0.11 },
  { id: "img3", threshold: 0.19 },
  { id: "img4", threshold: 0.25 },
  { id: "img5", threshold: 0.3},
  { id: "img6", threshold: 0.6 }
];

let prevProgress = 0;

let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner",
    pin: true,
    start: "top top",
    end: "+=200%",
    scrub: 0.1,
    markers: true,
    ease: "none",
    onUpdate: (self) => {
      const totalProgress = self.progress;
      const direction = totalProgress > prevProgress ? "down" : "up";

      images.forEach((image, index) => {
        const { id, threshold } = image;
        const nextThreshold = images[index + 1]?.threshold || 1;

        if (
          (direction === "down" && totalProgress >= threshold && totalProgress < nextThreshold) ||
          (direction === "up" && totalProgress >= threshold && totalProgress < nextThreshold)
        ) {
          gsap.to(`#${id}`, { autoAlpha: 1, zIndex: 9999 });
        } else {
          gsap.to(`#${id}`, { autoAlpha: 0, zIndex: -1 });
        }
      });

      const banner = document.querySelector('.banner');
      const bannertext = document.querySelector('.bannertext');

      if (totalProgress >= 0.19 && totalProgress < 0.25) {
        banner.classList.add('green-background');
        bannertext.classList.add('grey-text');
      } else if (totalProgress >= 0.25 && totalProgress < 0.3) {
        banner.classList.remove('green-background');
        banner.classList.add('light-green-background');
        bannertext.classList.remove('grey-text');
        bannertext.classList.add('black-text');
      } else if (totalProgress >= 0.6) {
        banner.classList.remove('light-green-background');
        bannertext.classList.remove('black-text');
        banner.classList.add('white-background');
        bannertext.classList.add('black-text');
      } else {
        banner.classList.remove('green-background', 'light-green-background', 'white-background');
        bannertext.classList.remove('grey-text', 'black-text');
      }

      prevProgress = totalProgress;
    }
  }
});

t1.to(".bannertext", { y: -400, scale: 0.6 }, "abc")
  .to(".bannertext", { x: -100 })
  .to(".bannerimg", { scale: 0.2 }, "abc");
