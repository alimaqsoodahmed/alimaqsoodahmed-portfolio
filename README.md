# Muhammad Ali - AI Portfolio Website

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

A modern AI Portfolio built with **Next.js 16**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

This portfolio showcases my research, AI projects, machine learning work, publications, skills, and professional experience.

---

# Live Website

https://alimaqsoodahmed-portfolio.vercel.app

---

# GitHub Repository

https://github.com/alimaqsoodahmed/alimaqsoodahmed-portfolio

---

# Tech Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Lucide Icons

---

# Project Structure

```
alimaqsoodahmed-portfolio/

│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── loading.tsx
│
├── components/
│
│   ├── layout/
│   │      Navbar.tsx
│   │      Footer.tsx
│   │
│   ├── sections/
│   │      Hero.tsx
│   │      About.tsx
│   │      Skills.tsx
│   │      Projects.tsx
│   │      Research.tsx
│   │      Github.tsx
│   │      Contact.tsx
│   │
│   └── ui/
│          Aurora.tsx
│          Background.tsx
│          Counter.tsx
│
├── data/
│      personal.ts
│      projects.ts
│
├── public/
│      profile.png
│
│      resume/
│          Muhammad_Ali_CV.pdf
│
│      projects/
│          hems.png
│          yolo.png
│          rag.png
│
├── styles/
│      theme.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

---

# Installation

Clone repository

```bash
git clone https://github.com/alimaqsoodahmed/alimaqsoodahmed-portfolio.git
```

Open project

```bash
cd alimaqsoodahmed-portfolio
```

Install packages

```bash
npm install
```

Start development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# Build Project

Always verify before pushing.

```bash
npm run build
```

If the build finishes successfully, the project is ready to deploy.

---

# Git Workflow

Check status

```bash
git status
```

Stage changes

```bash
git add .
```

Commit

```bash
git commit -m "Describe your changes"
```

Push

```bash
git push origin main
```

Vercel automatically deploys every push to the **main** branch.

---

# Editing the Portfolio

## Hero Section

```
components/sections/Hero.tsx
```

Update:

- Name
- Typing animation
- Introduction
- Buttons
- Statistics
- Social links

---

## About Section

```
components/sections/About.tsx
```

Update:

- Education
- Experience
- Timeline
- Biography

---

## Skills

```
components/sections/Skills.tsx
```

Add or remove technologies.

---

## Projects

```
data/projects.ts
```

Example

```ts
{
 title:"Project",
 description:"Description",
 tech:["Python","TensorFlow","FastAPI"]
}
```

Projects update automatically.

---

## Research

```
components/sections/Research.tsx
```

Add

- Publications
- Thesis
- Journal papers
- Conferences

---

## Contact

```
components/sections/Contact.tsx
```

Update

- Email
- Phone
- GitHub
- LinkedIn

---

## Navbar

```
components/layout/Navbar.tsx
```

Update navigation links.

---

## Footer

```
components/layout/Footer.tsx
```

Update copyright and links.

---

# Images

Profile image

```
public/profile.png
```

Project images

```
public/projects/
```

Resume

```
public/resume/Muhammad_Ali_CV.pdf
```

---

# Colors

Tailwind classes

```
text-indigo-500

text-gray-400

bg-black

bg-white

bg-indigo-600
```

---

# Fonts

Configured in

```
app/layout.tsx
```

Uses

- Geist Sans
- Geist Mono

---

# Animations

Library

```
Framer Motion
```

Used in

- Hero
- About
- Skills
- Projects
- Timeline

---

# Counter Component

```
components/ui/Counter.tsx
```

Usage

```tsx
<Counter end={25} />
```

---

# Aurora Background

```
components/ui/Aurora.tsx
```

Included inside

```
app/layout.tsx
```

---

# Useful Commands

Run development server

```bash
npm run dev
```

Production build

```bash
npm run build
```

Install packages

```bash
npm install
```

Update packages

```bash
npm update
```

---

# Common Fixes

## Delete cache

Windows

```cmd
rmdir /s /q .next
```

Linux/macOS

```bash
rm -rf .next
```

---

## Install missing package

```bash
npm install react-icons

npm install framer-motion

npm install lucide-react
```

---

## View Git History

```bash
git log --oneline
```

---

## Latest Commit

```bash
git log -1
```

---

# Deployment

Hosting

- Vercel

Deployment

Automatic after every push to GitHub.

---

# Future Roadmap

- AI Chat Assistant
- Blog
- Certificates Section
- GitHub Contribution Graph
- Project Detail Pages
- Visitor Analytics
- EmailJS Contact Form
- Dark/Light Theme
- SEO Optimization
- CMS Support

---

# Workflow Checklist

Whenever making changes:

✅ Edit code

↓

✅ Run

```bash
npm run dev
```

↓

✅ Test website

↓

✅ Build

```bash
npm run build
```

↓

✅ Commit

```bash
git add .
git commit -m "Describe changes"
git push origin main
```

↓

✅ Wait for Vercel Deployment

↓

✅ Verify Live Website

---

# Author

**Muhammad Ali**

AI Researcher

Machine Learning Engineer

LLM Developer

GitHub

https://github.com/alimaqsoodahmed

LinkedIn

https://linkedin.com/in/muhammad-ali-76b938182

Email

malipallandri@gmail.com

---

© 2026 Muhammad Ali. All Rights Reserved.