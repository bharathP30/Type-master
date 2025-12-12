# ⌨️ Typing Speed Test

Test your typing speed and accuracy with random quotes, track your progress, and improve over time!

## 🚀 Demo
Live GitHub page : https://bharathp30.github.io/Type-master/
Live Netlify : https://type-master-p30.netlify.app/

## ✨ Features

- **Real-time Timer** - Starts automatically when you begin typing
- **WPM Calculation** - Measures your words per minute
- **Accuracy Tracking** - Shows percentage of correctly typed characters
- **Fun Feedback** - Get emoji-based feedback on your performance
- **History Tracking** - Stores your last 5 attempts in browser storage
- **Random Quotes** - Practice with different phrases each time
- **Dark Theme** - Easy on the eyes for extended practice sessions


## 🎯 How It Works

1. A random quote appears on the screen
2. Start typing in the textarea - the timer starts automatically
3. Type the exact quote (character for character)
4. When you finish, see your results:
   - Time taken
   - Words per minute (WPM)
   - Accuracy percentage
   - Performance feedback



## 📁 Project Structure

```
typing-speed-test/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and theme
├── script.js       # Core functionality
└── README.md       # You are here!
```

## 🎮 Usage

- **Start Typing** - Just click in the textarea and start typing
- **Restart** - Click "Restart" button to try a new quote
- **View History** - Click "History" to see your last 5 attempts
- **Clear History** - Click "Clear History" to wipe saved data

## 💾 Data Storage

Your typing history is stored locally in your browser using `localStorage`. This means:
- ✅ Your data persists between sessions
- ✅ No server or internet connection needed
- ✅ Your data stays private on your device
- ⚠️ Clearing browser data will erase your history

## 🔧 Customization

Want to add your own quotes? Edit the `quotes` array in `script.js`:

```javascript
const quotes = [
  "the quick brown fox jumps over the lazy dog",
  "practice makes progress not perfect",
  "your custom quote here",
  // Add more quotes...
];
```

Want to change the color scheme? Modify the colors in `style.css`:

```css
body {
  background: #111;  /* Change background */
  color: #fff;       /* Change text color */
}
```

## 🐛 Known Issues

None at the moment! If you find a bug, please open an issue.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add more quotes
- Improve the UI/UX
- Add new features (difficulty levels, themes, etc.)
- Fix bugs
- Improve documentation

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ☕ and ⌨️ by P30

## 🌟 Acknowledgments

- Inspired by typing test websites like Monkeytype and TypeRacer
- Built as a learning project to practice vanilla JavaScript

---

**Happy Typing!** 🎉
