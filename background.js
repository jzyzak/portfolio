// vanta-setup.js
var setVanta = () => {
  if (window.VANTA) window.VANTA.NET({
    el: "body", // Targeting the body element
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: window.innerHeight,
    minWidth: window.innerWidth,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3fffdd,
    backgroundColor: 0x0,
    points: 9.00,
    maxDistance: 16.00,
    spacing: 14.00
  })
}
