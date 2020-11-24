import React from 'react';
import styles from './HomePage.module.css'
import {Link} from 'react-router-dom';

type PropsType = {}

export const HomePage = React.memo(function (props: PropsType) {
    return <div className={styles.container}>
        <div className={styles.block}>
            <div className={styles.block1}><h1>Kilka slow o nas</h1>
                <h3>Czuj kim jestesmy i Dokad zmierzamy</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue libero sit amet velit tempor,
                    at maximus diam consectetur. Aliquam ullamcorper lectus malesuada venenatis mollis. Aenean rutrum
                    diam eget dictum iaculis. Donec vitae convallis nisi. Nam lobortis velit dui. Suspendisse volutpat
                    sed enim id laoreet. Fusce accumsan tincidunt lectus, quis efficitur elit fringilla in. Mauris porta
                    augue pharetra mauris molestie cursus. Sed vulputate scelerisque enim, a vehicula turpis condimentum
                    quis. Nulla eu feugiat lacus. Sed lectus justo, ullamcorper ut fringilla maximus, suscipit ornare
                    dolor. Mauris pretium neque vel imperdiet viverra.</p>
                <Link to="/houses">MORE</Link></div>
        </div>
        <div className={styles.block2}>
            <div className={styles.item}><img
                src={'https://img.pngio.com/family-clipart-transparent-family-png-icon-transparent-cartoon-family-clipart-png-920_948.png'}
                alt='img'/><p>fsfs</p></div>
            <div className={styles.item}>2</div>
            <div className={styles.item}>3</div>
            <div className={styles.item}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue libero sit amet velit tempor,
                    at maximus diam consectetur. Aliquam ullamcorper lectus malesuada venenatis mollis. Aenean rutrum
                    diam eget dictum iaculis. Donec vitae convallis nisi. Nam lobortis velit dui. Suspendisse volutpat
                    sed enim id laoreet. Fusce accumsan tincidunt lectus, quis efficitur elit fringilla in.</p>
            </div>
        </div>
        <div className={styles.block3}>Block3</div>

        <div className={styles.block4}>Block4</div>
    </div>
})