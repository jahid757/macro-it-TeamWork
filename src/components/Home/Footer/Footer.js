import React from 'react';

const Footer = () => {
    return (
        <div className="footer py-2 bg-dark">
            <div className="text-center footer_icon">
                <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                <a href="https://youtube.com/"><i class="fab fa-youtube"></i></a>
                <a href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a>
            </div>
            <p className="text-center text-secondary">&copy; 2021-{new Date().getFullYear()} All Right Reserved learning Team </p>
        </div>
    );
};

export default Footer;