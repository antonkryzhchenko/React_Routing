import styles from './styles/catItem.module.css';

const CatItem = (props) => {
    const {name, shortInfo, id, toBuy, toDeleteCat} = props;
    return(
        <div className={styles.cat}>
            <div>
                <h4>{name}</h4>
                <p>{shortInfo}</p>
                <button
                className={styles.buyCat}
                onClick={() => toBuy(id)}
                >Купить</button>
                <button
                className={styles.catItemBtn}
                onClick={() => toDeleteCat()}
                >Пометить на удаление</button>
            </div>
        </div>
    )
}
export default CatItem;