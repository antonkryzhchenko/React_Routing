const CustomButton = (props) => {
    return(
        <button onClick={() => {
            console.log('Push on button');
            props.onClick?.();
        }}>
            ПОДРОБНЕЕ
        </button>
    )
}
export default CustomButton