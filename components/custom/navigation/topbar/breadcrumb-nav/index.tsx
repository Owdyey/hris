import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react/jsx-runtime";
import { BreadCrumbsData } from "../../topBarHeader";

function BreadCrumbNav({ data, url }: { data: BreadCrumbsData; url: string }) {
    const paths = url === "/" ? ["/"] : url.split("/").filter(Boolean);
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {paths.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={data[item].link}>
                                    {data[item].title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {index + 1 !== paths.length ? (
                                <BreadcrumbSeparator />
                            ) : (
                                ""
                            )}
                        </Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}

export default BreadCrumbNav;
