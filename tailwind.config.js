 
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0B0924",
      },
      fontFamily: {
         jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
       },
      backgroundColor:{
        custom: 'rgba(40, 146, 243, .1333333333)',
      },
      borderColor: {
        custom: 'rgb(221, 221, 221)'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90.69deg, #9945FF -0.25%, #20E19F 100%)',
        'custom-one': 'linear-gradient(90.69deg, #9945FF -0.25%, #20E19F 100%)',
        'custom-two': 'linear-gradient(180deg, #EAE9FF 0%, rgba(234, 233, 255, 0) 100%)',
        'custom-three': 'linear-gradient(90deg, #954AFC 0%, #E0CAFF 100%)',
        'custom-four': 'linear-gradient(90.69deg, #9945FF -0.25%, #20E19F 100%)',
      },
      boxShadow:{
        'custom': '0px 4px 200px 0px #E8F9F733',
       },
      screens: {
        'xs': '480px', // Example: Extra small devices (phones)
        'sm': '640px', // Small devices (tablets)
        'md': '768px', // Medium devices (desktops)
        'lg': '1024px', // Large devices (desktops)
        'xlg': '1120px', // Large devices (desktops)
        'xl': '1280px', // Extra large devices (large desktops)
        '2xl': '1536px', // 2X Large devices (extra large desktops)
      },
    },
  },
  plugins: [],
};
export default config;
