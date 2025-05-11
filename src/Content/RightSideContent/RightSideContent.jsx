import VideoPlaylist from "./VideoPlaylist"
import DateTime from "./DateTime"

function RightSideContent () {
    return (
        <div className="right-block h-[100%] flex flex-col rounded-xl object-cover">
            <div className="video-block flex justify-center mb-1">
                <VideoPlaylist/>
            </div>
            <div className="date-time-block">
                <DateTime/>
            </div>
        </div>
    )
}

export default RightSideContent