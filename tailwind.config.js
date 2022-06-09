module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px'
      },
      dropShadow: {
        mydrop1: ["0 20px 8px rgba(238, 108, 116, 0.2)", "0 8px 3px rgba(251, 162, 96, 0.2)"],
        mydrop2: ["0 20px 8px rgba(20, 21, 41, 0.2)", "0 8px 3px rgba(20, 21, 41, 0.2)"],
      },
      colors: {
        primary: '#EE6C74',
        secondary: '#FBA260',
        dark: '#2B2E51',
        hitam: '#141529',
        primarytransparan: 'rgba(238, 108, 116, 0.2)',
        bg_color: '#ECEDFF'
      },
    },
  },
  plugins: [],
}
