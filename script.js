particlesJS("particles-js", {
    particles: {
        number: { value: 120, density: { enable: true, value_area: 800 } },
        color: { value: ["#ff0000","#00bfff","#ff69b4","#ffa500","#ffff00"] },
        shape: { type: "circle" },
        opacity: { value: 2, random: true },
        size: { value: 3, random: true, anim: { enable: true, speed: 3, size_min: 1, sync: false } },
        line_linked: { enable: true, distance: 90, color: "#444444", opacity: 1, width: 1 },
        move: { enable: true, speed: 1.2, random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: ["grab","repulse"] },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            grab: { distance: 200, line_linked: { opacity: 0.5 } },
            repulse: { distance: 120, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});
