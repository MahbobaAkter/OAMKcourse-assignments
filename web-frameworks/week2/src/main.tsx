import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'


// course data
const courses = [
  { name: "HTML", courseId: "Y242-444", studentPositions: 30 },
  { name: "JavaScript Basics", courseId: "Y242-445", studentPositions: 35 },
  { name: "JavaScript Advanced", courseId: "Y242-446", studentPositions: 40 },
  { name: "React", courseId: "Y242-447", studentPositions: 25 }
];





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App courses={courses}/>
  </StrictMode>,
)
