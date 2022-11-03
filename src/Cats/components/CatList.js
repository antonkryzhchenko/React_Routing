import { memo } from 'react';
import styles from './styles/catList.module.css';
import CatItem from './CatItem';

const CatList = (props) => {
    console.log('List render');
    const {cats, toBuy, toDeleteCat} = props;

    const allCats = cats.map(cat => 
        <CatItem key={cat.id} {...cat} toBuy={toBuy} toDelete={toDeleteCat} />
    )
    return(
        <div className={styles.listBlock}>
            {/* <h1>Список кошек</h1> */}
            <div className={styles.allCats}>
                {allCats}
            </div>
        </div>
    )
}
export default memo(CatList);