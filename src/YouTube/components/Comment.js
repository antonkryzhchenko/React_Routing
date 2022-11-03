// функция для даты
const getDate = () => {
    let date = new Date();
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}

const Comment = (props) => {
    const {element} = props;

    return (
        <>
        <li>{element}
            {getDate()}
            </li>
        </>
    )
}
export default Comment;