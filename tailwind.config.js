/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary:"#19D3AE",
          accent:"#3A4256",
          neutral:"#3D4451",
          "base-100":"#FFFFFF"
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/bg.png')",
        'doctor': "url('/src/assets/images/appointment.png')",
        'footer': "url('/src/assets/images/footer.png')",
      }
    },
  },
  plugins: [require("daisyui")],
};
