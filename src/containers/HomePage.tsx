import React from 'react';
import styles from './HomePage.module.css'
import {Link} from 'react-router-dom';

export const HomePage = React.memo(function () {
    return <div className={styles.container}>
       <div className={styles.block} >
           <span className={styles.block1}>
               <Link to="/houses">Houses</Link>
           </span>
           <span className={styles.block2}>
               BLock2
           </span>
           <span className={styles.block3}>
               BLock3
           </span>
           <span className={styles.block4}>
               BLock4
           </span>
       </div>
    </div>
})