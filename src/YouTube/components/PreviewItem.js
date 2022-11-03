const PreviewItem = (props) => {
    const {onClick, id} = props;
    
    return (
        <img
        onClick={() => onClick(id.videoId)}
        src={props.snippet.thumbnails.default.url}
        alt='preview'
        style={{margin: '0 20px', cursor: 'pointer'}}
        />
    )
}
export default PreviewItem;