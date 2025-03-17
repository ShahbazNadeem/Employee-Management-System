const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Design Homepage",
                "taskDescription": "Create a responsive homepage UI",
                "date": "2025-03-14",
                "category": "UI/UX",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Fix Navbar Bug",
                "taskDescription": "Resolve the issue with the navbar not displaying properly",
                "date": "2025-03-13",
                "category": "Bug Fixing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Database Optimization",
                "taskDescription": "Optimize database queries for faster load times",
                "date": "2025-03-12",
                "category": "Backend",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Implement Authentication",
                "taskDescription": "Integrate Firebase authentication into the project",
                "date": "2025-03-11",
                "category": "Security",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Write API Documentation",
                "taskDescription": "Document all available API endpoints",
                "date": "2025-03-10",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Create Landing Page",
                "taskDescription": "Develop a landing page with animations",
                "date": "2025-03-14",
                "category": "Frontend",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Optimize Images",
                "taskDescription": "Compress and optimize images for faster loading",
                "date": "2025-03-13",
                "category": "Performance",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Testing User Flow",
                "taskDescription": "Perform end-to-end testing of the application",
                "date": "2025-03-12",
                "category": "Testing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Improve SEO",
                "taskDescription": "Optimize site for better search engine rankings",
                "date": "2025-03-10",
                "category": "SEO",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Setup CI/CD",
                "taskDescription": "Implement continuous integration and deployment",
                "date": "2025-03-15",
                "category": "DevOps",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Monitor Server Logs",
                "taskDescription": "Check server logs for any critical issues",
                "date": "2025-03-14",
                "category": "Infrastructure",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    return { employees, admin };
}
