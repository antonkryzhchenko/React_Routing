const Search = (props) => {
    const {onChange} = props;
    return (
        <>
        <input
        type='text'
        placeholder='Поиск по имени'
        name='serach'
        onChange={onChange}
        />
        </>
    )
}
export default Search;