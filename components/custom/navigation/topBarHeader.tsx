export type TopBarHeader = {
    url: string,
    title: string,
    subtitle: string
};

export const topBarHeaders: TopBarHeader[] = [
    { url:"/", title: "Hello User", subtitle: "Good Morning" },
    { url:"/employees", title: "Employees", subtitle: "All Employee Information" },
    { url:"/departments", title: "Departments", subtitle: "All Department Information" },
    { url:"/attendance", title: "Attendance", subtitle: "All Employee Attendance" },
    { url:"/payroll", title: "Payroll", subtitle: "All Employee Payroll" },
    { url:"/jobs", title: "Jobs", subtitle: "Show All Jobs" },
    { url:"/candidates", title: "Candidates", subtitle: "Show All Candidates" },
    { url:"/leaves", title: "Leaves", subtitle: "All Employee Leaves" },
    { url:"/holidays", title: "Holidays", subtitle: "All Holiday List" },
    { url:"/settings", title: "Settings", subtitle: "All System Settings" },  
];