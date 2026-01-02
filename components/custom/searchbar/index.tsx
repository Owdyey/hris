import SearchIcon from "@/components/icons/search-icon";
import { Input } from "@/components/ui/input";
import React from "react";

function SearchBar() {
    return (
        <div className="w-[250px] relative ">
            <SearchIcon className="absolute left-3 top-1/2 h-5 w-5  -translate-y-1/2 text-gray-400" />
            <Input
                type="search"
                className="h-10 pl-10 placeholder:text-gray-300 bg-gray-400 border-2 border-gray-10"
                placeholder="Search"
            />
        </div>
    );
}

export default SearchBar;
