const YoutubePlayer = (props) => {
    const {videoId} = props;
    return (
        <iframe title="MyFrame" width='560' height='315' src={'https://www.youtube.com/embed/' + videoId}></iframe>
    )
}
export default YoutubePlayer;