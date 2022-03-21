module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: { bounce_right: 'bounce_right 1s ease-in-out infinite',      },
      backgroundImage: { 
      'login': "url('/src/assets/login.jpg')", 
      'register': "url('/src/assets/register.jpg')", 
      'pattern': "url('/src/assets/bg.svg')",
      'task': "url('/src/assets/task.jpg')",
    },

      keyframes: {bounce_right : { '0%, 100%': { transform: 'translateX(-25%)' },'50%': { transform: 'none' },}},
      colors: {'primary': '#02b3c5',},

    },
  },
  plugins: [],
}


