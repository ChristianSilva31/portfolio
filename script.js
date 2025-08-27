particlesJS("particles-js", 
    {
    particles: 
    {
        number: { value: 200, density: { enable: true, value_area: 700 } },
        color: { value: ["#ff0000","#00bfff","#ff69b4","#ffa500","#ffff00"] },
        shape: { type: "circle" },
        opacity: { value: 5, random: true },
        size: { value: 3, random: true, anim: { enable: true, speed: 1, size_min: 1, sync: false } },
        line_linked: { enable: true, distance: 70, color: "#444444", opacity: 1, width: 1 },
        move: { enable: true, speed: 0.9, random: true, straight: false, out_mode: "out" }
    },
    interactivity: 
    {
        detect_on: "canvas",
        events: 
        {
            onhover: { enable: true, mode: ["grab","repulse"] },
            onclick: { enable: true, mode: "push" }
        },
        modes: 
        {
            grab: { distance: 100, line_linked: { opacity: 0.8 } },
            repulse: { distance: 100, duration: 0.1 },
            push: { particles_nb: 6}
        }
    },
    retina_detect: true
});
