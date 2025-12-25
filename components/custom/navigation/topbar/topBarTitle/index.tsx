import React from "react";
import { TopBarHeader } from "../../topBarHeader";

function TopBarTitle({ data, url }: { data: TopBarHeader; url: string }) {
    return <p className="text-foreground font-bold text-lg">{data[url]}</p>;
}

export default TopBarTitle;
