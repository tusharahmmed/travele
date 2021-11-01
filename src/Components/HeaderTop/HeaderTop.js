import './HeaderTop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt , faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const HeaderTop = () => {
    return (
        <div className="hidden header-top flex  justify-between px-44 items-center md:px-20 lg:flex">
                    <div className="header-top-left py-3">
                        <span><FontAwesomeIcon icon={faPhoneAlt} /> +01 (977) 2599 12 </span>
                        <span><FontAwesomeIcon icon={faEnvelope} /> constacts@travele.com </span>
                        <span><FontAwesomeIcon icon={faMapMarkerAlt} /> 3146 Koontz Lane, California</span>
                    </div>
                    <div className="header-top-right">
                        <span><i className="fab fa-facebook py-3"></i></span>
                        <span><i className="fab fa-twitter py-3"></i></span>
                        <span><i className="fab fa-youtube py-3"></i></span>
                        <span><i className="fab fa-twitter py-3"></i></span>
                        <span><i className="fab fa-instagram py-3"></i></span>
                        <span className="search p-3"><i className="fas fa-search"></i></span>
                    </div>

                </div>
    );
};

export default HeaderTop;