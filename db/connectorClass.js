const connection = require("./connection");

/**
 * DB Class for perform CRUD operation.
 */
class DB {
    constructor(connection) {
        this.connection = connection;
    }

    /**
     * Fetch all employee query with join
     */
    viewAllEmployees() {
        return this.connection.query(
            `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
             FROM employee
             LEFT JOIN role 
             ON employee.role_id = role.id
             LEFT JOIN department 
             ON role.department_id = department.id 
             LEFT JOIN employee manager 
             ON manager.id = employee.manager_id;
             `
        );
    }

    /**
     * Fetch department wise employee query
     */
    viewEmployeesByDepartment(id) {
        return this.connection.query(
            `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
      FROM employee
      LEFT JOIN role 
      ON employee.role_id = role.id
      LEFT JOIN employee manager 
      ON manager.id = employee.manager_id
      LEFT JOIN department 
      ON role.department_id = department.id 
      WHERE department.id = ?;
      `,
            [id]
        );
    }

    /**
     * Fetch role wise employee query
     */
    viewEmployeesByRole(id) {
        return this.connection.query(
            `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
      FROM employee
      LEFT JOIN role 
      ON employee.role_id = role.id
      LEFT JOIN department 
      ON role.department_id = department.id 
      LEFT JOIN employee manager 
      ON manager.id = employee.manager_id
      WHERE role.id = ?;
      `,
            [id]
        );
    }

    /**
     * Get all departments
     */
    viewAllDepartments() {
        return this.connection.query("SELECT * from department");
    }

    /**
     * Get all roles
     */
    viewAllRoles() {
        return this.connection.query(
            `SELECT role.id, role.title, role.salary, department.name AS department
        FROM role 
        LEFT JOIN department
        ON role.department_id = department.id;`
        );
    }

    /**
     * Insert new employee
     */
    addEmployee(first_name, last_name, role_id, manager_id) {
        return this.connection.query("INSERT INTO employee SET ?", {
            first_name: first_name,
            last_name: last_name,
            role_id: role_id,
            manager_id: manager_id
        });
    }

    /**
     * Insert new department
     */
    addDepartment(department) {
        return this.connection.query("INSERT INTO department SET ?", {
            name: department
        });
    }

    /**
     * Insert new role
     */
    addRole(role, salary) {
        return this.connection.query("INSERT INTO role SET ?", {
            title: role,
            salary: salary
        });
    }

    /**
     * Find Employee query
     */
    findEmployee() {
        return this.connection.query(
            "SELECT id, first_name, last_name FROM employee"
        );
    }

    /**
     * Find roles query
     */
    findRoles() {
        return this.connection.query("SELECT id, title FROM role");
    }

    /**
     * Update employee role query
     */
    updateEmployeeRole(role_id, id) {
        return this.connection.query(
            `UPDATE employee
        SET role_id = ? 
        WHERE id = ?;`,
            [role_id, id]
        );
    }

    /**
     * Remove employee query
     */
    deleteEmployee(id) {
        return this.connection.query(
            "DELETE FROM employee WHERE id = ?", [id]
        );
    }

    /**
     * Remove department query
     */
    deleteDepartment(id) {
        return this.connection.query(
            "DELETE FROM department WHERE id = ?", [id]
        );
    }

    /**
     * Remove role query
     */
    deleteRole(id) {
        return this.connection.query(
            "DELETE FROM role WHERE id = ?", [id]
        );
    }

    /**
     * Exit DB connection
     */
    exit() {
        return this.connection.end();
    }
}

module.exports = new DB(connection);