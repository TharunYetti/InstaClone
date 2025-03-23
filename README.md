# 📸 InstaClone

A React Native (Expo) app that replicates Instagram's key features, including profile, search, posts, and dark mode.

## 🚀 Features
- 🖼️ **Home Screen** – Shows sample posts from the users we follow and shows the stories also.
- 🔍 **Search Screen** – View random posts with a search bar at the top.
- 🏠 **Profile Screen** – Displays user profile and posts.
- 🌗 **Dark Mode** – Toggle between light and dark themes globally.

---

## 🛠️ Tech Stack
- **Frontend:** React Native (Expo)
- **Navigation:** React Navigation (Bottom Tab Navigator)
- **Styling:** Material UI, Tailwind CSS
- **State Management:** Context API
- **Environment Variables:** `react-native-dotenv`

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/TharunYetti/InstaClone.git
cd InstaClone
```

### 2️⃣ Install Dependencies
```bash
npm install
# or
yarn install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root folder and add:
```
API_KEY=YOUR-API-KEY
PROJECT_ID=YOUR-PROJECT-ID
BUCKET=YOUR-BUCKET.firebasestorage.app
SENDER_ID=YOUR-SENDER-ID
APP_ID=YOUR-APP-ID

```

### 4️⃣ Start the Expo Server
```bash
expo start
```

---

## 🎨 Dark Mode
To toggle dark mode, use the switch in the profile screen. The selected theme will persist across all screens.

---

## 🔧 Project Structure - Sample
```
InstaClone/
│── src/
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── ProfileScreen.js
│   │   ├── SearchScreen.js
│   ├── components/
│   ├── navigation/
│── assets/
│── .env
│── App.js
│── package.json
│── babel.config.js
```

---

## 🤝 Contributing
1. Fork the repository 🍴
2. Create a new branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Added new feature"`)
4. Push to GitHub (`git push origin feature-name`)
5. Open a Pull Request 🎉

---

## 📜 License
This project is open-source and free to use.

---

## 📬 Contact
🔗 GitHub: [TharunYetti](https://github.com/TharunYetti)  
✉️ Email: tharunyetti24@example.com
