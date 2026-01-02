import SearchBar from "@/components/custom/searchbar";
import AddIcon from "@/components/icons/add-icon";
import FilterIcon from "@/components/icons/filter-icon";
import { Button } from "@/components/ui/button";

export default function Employees() {
    return (
        <div className="flex justify-between items-center w-full">
            <SearchBar />
            <div className="flex justify-center items-center gap-2">
                <Button>
                    <AddIcon />
                    Add New Employee
                </Button>
                <Button variant={"outline"}>
                    <FilterIcon />
                    Filter
                </Button>
            </div>
        </div>
    );
}
