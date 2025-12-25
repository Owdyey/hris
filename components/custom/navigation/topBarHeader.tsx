export type BreadCrumbsData = {
    [key: string]: { title: string; link: string };
};

export const getBreadCrumbsLinks = (
    employeeName?: string,
    departmentName?: string
): BreadCrumbsData => {
    const breadCrumbsLinks: BreadCrumbsData = {
        "/": {
            title: "Good Morning",
            link: "/",
        },
        employees: {
            title: "All Employee Information",
            link: "/employees",
        },
        add: {
            title: "Add New Employee",
            link: "/employees/add",
        },
        departments: {
            title: "All Department Information",
            link: "/departments",
        },
        attendance: {
            title: "All Employee Attendance",
            link: "/attendance",
        },
        payroll: {
            title: "All Employee Payroll",
            link: "/payroll",
        },
        jobs: {
            title: "Show All Jobs",
            link: "/jobs",
        },
        candidates: {
            title: "Show All Candidates",
            link: "/candidates",
        },
        leaves: {
            title: "All Employee Leaves",
            link: "/leaves",
        },
        holidays: {
            title: "All Holiday List",
            link: "/holidays",
        },
        settings: {
            title: "All System Settings",
            link: "/settings",
        },
    };

    if (employeeName && employeeName !== "add") {
        breadCrumbsLinks[employeeName] = {
            title: format(employeeName),
            link: `/employees/${employeeName}`,
        };
    }
    if (departmentName) {
        breadCrumbsLinks[departmentName] = {
            title: format(departmentName),
            link: `/departments/${departmentName}`,
        };
    }

    return breadCrumbsLinks;
};
export type TopBarHeader = {
    [key: string]: string;
};

export const getTopBarHeaders = (
    employeeName?: string,
    departmentName?: string
): TopBarHeader => {
    const topBarHeaders: TopBarHeader = {
        "/": "Hello User",
        "/employees": "Employees",
        "/employees/add": "Employees",
        "/departments": "Departments",
        "/attendance": "Attendance",
        "/payroll": "Payroll",
        "/jobs": "Jobs",
        "/candidates": "Candidates",
        "/leaves": "Leaves",
        "/holidays": "Holidays",
        "/settings": "Settings",
    };

    // Assuming a dynamic route is /path/name-of-employee-or-department-in-lower-case
    if (employeeName && employeeName !== "add") {
        topBarHeaders["/employees/" + employeeName] = format(employeeName);
    }
    if (departmentName) {
        topBarHeaders["/departments/" + departmentName] =
            format(departmentName);
    }

    return topBarHeaders;
};

function format(raw: string): string {
    let formatted: string[] = raw.split("-");

    formatted = formatted.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return formatted.join(" ");
}
