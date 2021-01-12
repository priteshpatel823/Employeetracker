/**
 *  Insert query for department
 */
INSERT INTO
    department (name)
VALUES
    ("Engineering"),
    ("Sales"),
    ("Finance"),
    ("Legal");

/**
 *  Select query for department
 */
SELECT
    *
FROM
    department;

/**
 *  Insert query for role
 */
INSERT INTO
    role (title, salary, department_id)
VALUES
    ("Lead Engineer", 250000, 1),
    ("Software Engineer", 150000, 1),
    ("Sales Lead", 200000, 2),
    ("Salesperson", 750000, 2),
    ("Accountant", 950000, 3),
    ("Legal Team Lead", 250000, 4),
    ("Lawyer", 100000, 4);

/**
 *  Select query for role
 */
SELECT
    *
FROM
    role;

/**
 *  Insert query for employee
 */
INSERT INTO
    employee (first_name, last_name, role_id)
VALUES
    ("Harry", "Potter", 3),
    ("Hermione", "Granger", 6),
    ("Ginny", "Weasley", 7),
    ("Luna", "Lovegood", 1);

/**
 *  Select query for employee
 */
SELECT
    *
FROM
    employee