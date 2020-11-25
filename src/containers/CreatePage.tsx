import React from 'react';
import styles from './CreatePage.module.css';
import {CreateHouse} from './CreateHouse';

export const CreatePage = React.memo(function () {
    return <div className={styles.container}>
        <h1>Create House</h1>
        <CreateHouse/>
    </div>
})