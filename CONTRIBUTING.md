# Contributing Guide — How to Collaborate Perfectly 🤝

Follow these steps every time you work on a task. Skipping steps (especially step 8) is the #1 cause of merge conflicts!

---

## Step 1 — Create an Issue & Branch
Each task **must** have an assigned issue. Once assigned, create a branch based on the issue name/title:

```bash
git checkout -b branchName
```

> 💡 Use a clear, descriptive branch name that reflects the issue (e.g., `fix-login-bug`, `feature-user-profile`).

---

## Step 2 — Sync with the Staging Branch
Fetch the latest updates from the staging branch:

```bash
git fetch origin stagingBranch
```

---

## Step 3 — Pull Latest Changes
Pull the updated code from staging into your branch:

```bash
git pull origin stagingBranch
```

---

## Step 4 — Switch Back to Your Branch 
```bash
git checkout branchName 
```

---

## Step 5 — Start Working
You're now good to go — write your beautiful code 😍

---

## Step 6 — Stage Your Changes
```bash
git add .
```

---

## Step 7 — Commit Your Changes
```bash
git commit -m "your descriptive message"
```

> 💡 Write meaningful commit messages that explain *what* and *why*, not just *what*.

---

## Step 8 — Re-sync Before Pushing ⚠️ VERY IMPORTANT!!
Before pushing, **always** fetch and pull from the staging branch again.
This ensures you have the latest updates and helps prevent conflicts if others have pushed changes while you were working.

```bash
git fetch origin stagingBranch
git pull origin stagingBranch
```

---

## Step 9 — Push Your Branch
```bash
git push origin branchName
```

---

## Step 10 — Create a Pull Request
Create a merge/pull request on GitHub. If there are no conflicts, it will be reviewed and approved by the team. ✅

---

> ⚡ **Quick Reminder:** Always sync (Steps 2–3 and Step 8) before pushing. It saves everyone time and keeps the codebase clean!
