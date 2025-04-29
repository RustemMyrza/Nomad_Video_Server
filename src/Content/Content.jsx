import TicketsBlock from "./Tickets/TicketsBlock";
import RightSideContent from "./RightSideContent/RightSideContent";
import { useParams } from "react-router-dom";

function Content () {
    const { branchId } = useParams();

    return (
        <div className="flex w-screen">
            <div className="w-1/2 text-white">
                <TicketsBlock branchId={branchId} />
            </div>
            <div className="w-[48%] pl-2 text-white">
                <RightSideContent/>
            </div>
        </div>
    )
}

export default Content;
