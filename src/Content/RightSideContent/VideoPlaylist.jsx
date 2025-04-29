function VideoPlaylist () {
    return (
        <video
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-[90%] rounded-xl object-cover"
        />
    )
}

export default VideoPlaylist;