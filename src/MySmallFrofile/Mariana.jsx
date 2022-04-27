
import React from "react";
import style from './Mariana.module.css'
import photo from './img.png'

const Mariana = () => {
    return (

            <section className={style.section}>
                <header className={style.header}>
                    <span className={style.logo}>Mariana's page</span>
                </header>
                <div className={style.hero}>
                    <div className={`${style.container}  ${style.hero__container}`}>
                        <div className={style.hero__about}>
                            <h1 className={style.hero__title}>Mariana Batig</h1>

                            <p className={style.hero__description}>
                                hi, i'm a developer trying to learn everything new and improve my skills.
                            </p>



                        </div>
                        <div className={style.hero__box}>
                            <img src={photo} alt='img'/>
                        </div>
                    </div>

                </div>
            </section>
    );
}

export default Mariana;
