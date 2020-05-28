import React from 'react';

const Footer = () => (
    <div className="site-footer">
        <h4 className="text-center">
            demkantor blog
        </h4>
        <p className="text-center">
            Check me out!
        </p>
        <div className="footer-social-links">
            <ul className="social-links-list">
                <li>
                    <a href="https://github.com/demkantor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github">
                            <i className="fab fa-github fa-2x" />
                    </a>
                </li>
                <li>
                    <a href="https://demkantor.github.io/david-dot-com.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="www">
                            <i className="fas fa-globe fa-2x" />
                    </a>
                </li>
                <li>
                    <a href="https://forum.xda-developers.com/member.php?u=4334383"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="xda">
                            <i className="fab fa-android fa-2x" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/demkantor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="google">
                            <i className="fab fa-codepen fa-2x" />
                    </a>
                </li>
                <li>
                    <a href="www.linkedin.com/in/david-edward-kantor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin">
                            <i className="fab fa-linkedin fa-2x" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
);


export default Footer;
