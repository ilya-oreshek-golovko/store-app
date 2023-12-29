import React from 'react'
import { useAppSelector } from '../../hooks/hooks'
import styles from './Product.module.scss';

export default function Product() {

    const {list} = useAppSelector(({products}) => products);

    return (
        <div className={styles.products}>Product</div>
    )
}
