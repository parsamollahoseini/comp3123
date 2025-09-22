# Class Exercise Node Project

- Complete given class exercise
- Follow instructions mentioned as TODO comments in source code files
- Fix any error found in the code
- Use SLACK or email for any question

---

## Summary of Changes
- Added an `Employee` module to manage employee data.
- Defined handlers for each URL:
    - `/` → returns a welcome message.
    - `/employee` → returns all employee details.
    - `/employee/names` → returns employee full names in ascending order.
    - `/employee/totalsalary` → returns the total salary of all employees.
- Properly set response headers for JSON and HTML content.

---

## Installation & Setup

```bash
# Clone the repository
git clone <your-repo-link>
cd <your-project-folder>

# Install dependencies
npm install

# Run with nodemon (auto-restart on changes)
npm run dev

# Or run with plain Node.js
npm start
