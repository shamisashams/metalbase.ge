// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     // content: ["./resources/**/*.{html,js}"],
//     content: [
//         "./resources/**/*.blade.php",
//         "./resources/**/*.js",
//         "./resources/**/*.jsx",
//         "./resources/**/*.vue",
//     ],

//     theme: {
//         extend: {},
//     },
//     plugins: [],
// }


const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
    ...defaultColors,
    ...{
        "custom-yellow": {
            500: "#EDAE0A",
        },
        "custom-blue": {
            500: "#2680EB",
            800: "#1C3C51",
            900: "#00223B",
        },
    },
};

module.exports = {
    content: ["./resources/js/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: colors,
        },
    },
    plugins: [],
};
