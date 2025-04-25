import React from 'react'
import resume from '../assets/json/resume.json'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

export default function WorksList() {
    const { t } = useTranslation();

    return (
        <div>
            <div className="containerSection">
                <div className="item-100">
                    <h3 >Works</h3>
                    <ul className="containerGallery">

                        {resume.map((item) => (
                            <li key={item.id}>
                                <Link to={item.rota} rel="noopener noreferrer">
                                    <div className="containerGallery__box">

                                        <motion.div
                                            initial={{ opacity: 0.6, scale: 0.95 }}
                                            transition={{ duration: 0.3 }}
                                            whileHover={{ opacity: 1, scale: 1 }}
                                        >
                                            <img src={item.cover} alt={t(item.nome)} />
                                        </motion.div>
                                        <div className="containerGallery__text">
                                            <p className="containerGallery__title"><strong>{t(item.nome)}</strong></p>
                                            <p className="containerGallery__subtitle">{t(item.descricao)}</p>
                                            <div className="containerGallery__tags">
                                                {item.tags.map((tag, index) => (
                                                    <p key={index}>{tag}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>

        </div>
    )
}
