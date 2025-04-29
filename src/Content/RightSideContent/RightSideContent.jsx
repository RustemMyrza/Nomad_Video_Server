import VideoPlaylist from "./VideoPlaylist"
import DateTime from "./DateTime"

function RightSideContent () {
    return (
        <div className="right-block h-[100%] flex flex-col justify-around rounded-xl object-cover">
            <div className="video-block flex justify-center">
                <VideoPlaylist/>
            </div>
            <div className="date-time-block">
                <DateTime/>
            </div>
        </div>
    )
}

export default RightSideContent