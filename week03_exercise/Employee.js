

let employees = [
    { id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", salary: 5000 },
    { id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", salary: 4000 },
    { id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", salary: 5500 },
    { id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", salary: 9000 }
];

// Return all employees
function getAllEmployees() {
    return employees;
}

// Return full names sorted
function getEmployeeNames() {
    return employees
        .map(e => `${e.firstName} ${e.lastName}`)
        .sort();
}

// Return total salary
function getTotalSalary() {
    return employees.reduce((sum, e) => sum + e.salary, 0);
}

module.exports = {
    getAllEmployees,
    getEmployeeNames,
    getTotalSalary
};
