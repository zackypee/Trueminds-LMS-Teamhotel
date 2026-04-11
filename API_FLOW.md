LMS Frontend API Architecture Flow

> Purpose

This guide defines the standard structure and flow for handling API calls across all features in the LMS project (Users, Instructors, Admin, Courses, Learning, Auth).
The goal is to:
•	Maintain clean and scalable code
•	Ensure consistency across the team
•	Make features easy to build, debug, and extend


> Core Principle

All features must follow this flow:
API Layer → Hook → UI Component
Responsibilities:
•	API Layer → Handles HTTP requests only
•	Hook Layer → Handles logic, state, and side effects
•	Component Layer → Handles UI rendering only

NOTE: Components should NEVER call APIs directly.

>API Layer Pattern
Each feature has its own API file.


Rules FOR API FILE:
•	No state management here
•	No UI logic
•	Keep functions simple and reusable

> Hook Layer Pattern
Hooks manage:
•	Data state
•	Loading state
•	Error handling

Rules For hook file:
•	All logic lives here
•	Always handle loading + error
•	Keep hooks focused (avoid overly large hooks)


>Component Usage Pattern
Components should only:
•	Call hooks
•	Render UI


>Recommended Hook Splitting
For scalability, split hooks by responsibility:
useUsers.js          → fetch users
useCreateUser.js     → create user
useUpdateUser.js     → update user
useDeleteUser.js     → delete user


> Standard Workflow for Any Feature
1.	Create API functions
2.	Create hook to manage logic
3.	Use hook inside component
4.	Render UI

>What to Avoid
•	Calling APIs directly inside components 
•	Mixing UI and business logic 
•	Creating large, unmanageable hooks 
•	Duplicating API logic across files 

>Summary
This structure ensures:
•	Clean separation of concerns
•	Reusable and testable logic
•	Consistent codebase across the team







