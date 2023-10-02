/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'ping-fast': 'ping 0.3s linear'
            }
        },
    },
    plugins: [],
}