type EmployeeProps = {
    params: Promise<{ employeeName: string }>;
};

async function page({ params }: EmployeeProps) {
    const { employeeName } = await params;
    return <div>{employeeName}</div>;
}

export default page;
