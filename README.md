# 📸 InstaClone

A React Native (Expo) app that replicates Instagram's key features, including profile, search, posts, and dark mode.

## 🚀 Features
- 🔍 **Home Screen** – View random posts from the followers and view stories and uploading story.
- 🔍 **Search Screen** – View random posts with a search bar at the top.
- 🏠 **Profile Screen** – Displays user profile and posts.
- 🌗 **Dark Mode** – Toggle between light and dark themes globally.
- 🖼️ **Dummy Posts** – Shows sample posts in a grid layout.
- 📷 **Camera Integration** – (Planned Feature) Capture and upload images.

Note: Most of 'em are only UI because I focused on mimicing insta UI but not their functionality fully but established basic backend using firebase like Sign In etc..

---

## 🛠️ Tech Stack
- **Frontend:** React Native (Expo)
- **Navigation:** React Navigation (Bottom Tab Navigator)
- **Styling:** Material UI,
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
API_KEY=YOUR_API_KEY
PROJECT_ID=YOUR_PROJECT_ID
BUCKET=YOUR_STORAGE_BUCKET
SENDER_ID=YOUR_MESSAGING_SENDER_ID
APP_ID=YOUR_APP_ID
```

### 4️⃣ Start the Expo Server
```bash
expo start
```

---

## 🔧 Project Structure
```
InstaClone/
│── src/
│   ├── config/
│   ├── screens/
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

## 📬 Contact
🔗 GitHub: [TharunYetti](https://github.com/TharunYetti)  
✉️ Email: tharunyetti24@example.com
