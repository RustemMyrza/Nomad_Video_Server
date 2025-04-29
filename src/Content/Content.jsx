import TicketsBlock from "./Tickets/TicketsBlock";
import RightSideContent from "./RightSideContent/RightSideContent";

function Content () {
    return (
        <div className="flex w-screen">
            <div className="w-1/2 text-white">
                <TicketsBlock/>
            </div>
            <div className="w-[48%] pl-2 text-white">
                <RightSideContent/>
            </div>
        </div>
    )
}

export default Content;
