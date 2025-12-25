type DepartmentProps = {
    params: Promise<{ departmentName: string }>;
};

async function page({ params }: DepartmentProps) {
    const { departmentName } = await params;
    return <div>{departmentName}</div>;
}

export default page;
