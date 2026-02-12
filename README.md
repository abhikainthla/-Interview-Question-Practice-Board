# 🎯 Interview Preparation Board

A structured and interactive Interview Preparation Board built with **React + Context API + MUI** to help developers track their progress while preparing for technical interviews.

This app allows users to organize questions by topics and mark each question based on their preparation status.

---

## 🚀 Live Demo

🔗 [Hosted Link](https://interview-question-practice-board.vercel.app/)

---

## 📌 Features

- 📂 Topic-wise interview question organization
- 📄 Detailed question view
- 🔄 Status tracking:
  - Unread
  - Practiced
  - Confident
- 📊 Progress tracking per topic
- ⚡ Fast and responsive UI
- 🎨 Styled using Material UI (MUI)
- 🌐 Client-side routing using React Router
- 🧠 Global state management using Context API

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Context API
- Material UI (MUI)
- React Icons

### Styling
- MUI `sx` styling
- Tailwind CSS (if used)

---

## 📁 Project Structure

src/
│
├── components/
│ ├── QuestionCard.jsx
│ ├── ProgressBar.jsx
| ├── Navbar.jsx
| ├── ProgressSummary.jsx
| ├── StatusBadge.jsx
│
├── context/
│ └── InterviewContext.jsx
│
├── pages/
│ ├── TopicQuestions.jsx
│ ├── QuestionDetail.jsx
| ├── TopicDashboard.jsx
│
├── data/
│ └── topicsData.js
│
└── App.jsx

## 🧠 How It Works

- Each topic contains multiple questions.
- Every question has a `status` field.
- Status can be updated using buttons:
  - `unread`
  - `practiced`
  - `confident`
- Context API manages global state.
- Progress is calculated dynamically based on question statuses.

---

## 📊 Status Logic

| Status      | Meaning |
|------------|----------|
| Unread     | Not started |
| Practiced  | Attempted at least once |
| Confident  | Fully prepared |

---
## 📸 Screenshots

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/e538cb31-0ab1-47b2-bf09-98e887975734" />

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/ffd2decd-5011-465d-a89f-7a2af11664c6" />

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/5c1b7b7a-f22b-4d55-89ea-b1af68266a86" />

## 💻 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/interview-prep-board.git
```
### 2️⃣ Navigate to project folder

```bash
cd interview-board
```
### 3️⃣ Install dependencies

```bash
npm install
```
### 4️⃣ Run development server

```bash
npm run dev
```

## 🎯 Future Improvements

- ✅ Add local storage persistence
- 🔐 Add authentication
- ☁️ Backend integration (MERN / Firebase)
- 📈 Advanced analytics dashboard
- 🌙 Dark mode support

## 📚 Learning Outcomes

Through this project, I strengthened my understanding of:
- React state management
- Context API vs Redux
- Component reusability
- Dynamic routing with React Router
- UI design using MUI
- Application state modeling
