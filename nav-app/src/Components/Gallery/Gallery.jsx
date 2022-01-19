import styles from './Gallery.module.scss'

export const Gallery = props => {
    return (
        <>
            <h1>Galleri</h1>
            <div className={styles.galleryContioner}>
                {props && props.imgList && props.imgList.map(item =>{
                    return (
                        <div className={styles.imgWrapper}>
                            <p>{item.name}</p>
                            <img key={item.id} src={item.image} alt={item.name} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}