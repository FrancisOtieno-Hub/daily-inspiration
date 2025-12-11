# Daily Inspiration — Multi-Category PWA
A Progressive Web App (PWA) that delivers daily motivational quotes across multiple categories. Users can browse, share, and receive daily notifications with inspiring quotes. Perfect for personal growth, mindfulness, and daily motivation.

## Features
- **Multi-category quotes:** Browse quotes by categories like Motivation, Life, Wisdom, etc.  
- **Next / Previous Navigation:** Easily navigate through quotes.   
- **Share Quotes:** Share your favorite quotes as text or images.  
- **Daily Notifications:** Receive daily motivational notifications at your preferred time.  
- **Offline-ready:** Works as a PWA; installable on mobile and desktop.

## Demo
![Screenshot](screenshot.png)  
*Example screenshot of the app in action.*

## Installation
1. **Clone the repository**  
```bash
git clone https://github.com/yourusername/daily-inspiration-pwa.git
cd daily-inspiration-pwa
````
2. **Open in browser**
   Simply open `index.html` in your browser.
3. **Optional:** Serve via local server for full PWA support
```bash
npx http-server
```
Then open `http://localhost:8080`.

## Usage
1. Select a **category** to browse quotes.
2. Use **Next / Previous** to navigate quotes.
3. Click **Share** to share the quote as an image.
4. Enable **Notifications** for daily reminders.

## File Structure
```
daily-inspiration-pwa/
│
├─ index.html        # Main HTML file
├─ manifest.json     # PWA manifest
├─ service-worker.js # Service worker for offline support
├─ quotes.json       # Quotes database (JSON)
├─ icon-512.png      # App icon
└─ README.md         # Project documentation
```

## JSON Structure (`quotes.json`)
```json
{
  "Motivation": [
    {
      "text": "Your limitation—it's only your imagination.",
      "author": "Unknown"
    },
    {
      "text": "Push yourself, because no one else is going to do it for you.",
      "author": "Unknown"
    }
  ],
  "Life": [
    {
      "text": "Life is what happens when you're busy making other plans.",
      "author": "John Lennon"
    }
  ]
}
```

## Contributing
1. Fork the repository.
2. Create a branch (`git checkout -b feature-name`).
3. Make your changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.

## License
MIT License © 2025 Francis Otieno


## Acknowledgements
* Inspired by daily motivational apps and modern PWA design patterns.
* Icons and fonts from [Inter](https://rsms.me/inter/).

