gsap.fromTo(".first", { x: 1, opacity: "0" }, { duration: 6, rotate: 360, scale: 2, ease: "back", borderRadius: "50%", y: 200, border: "4px inset black", opacity: "1" });
gsap.fromTo(".stars", { x: 1, opacity: "0" }, { duration: 6, rotate: 360, scale: 2, borderRadius: "50%", y: -10, opacity: "1" });
gsap.to(".second", { duration: 2, y: 200 });

gsap.fromTo(".coco", { color: "blue" }, { duration: 8, y: 200, color: "green", textShadow: "5px 5px black", fontSize: "60px", fontWeight: "900", fontFamily: "fantasy" });
gsap.to(".brian", { duration: 3, y: 300, color: "gold", backgroundColor: "black", ease: "bounce", padding: "20", borderRadius: "15" })