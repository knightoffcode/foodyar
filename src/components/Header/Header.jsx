import React from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import Logo from "../../assets/logo.png";

/**
 *
 * @returns
 */

function Header() {

    const menuPages = [
        {
            id: '01',
            page: 'Home',
            url: '/',
            subPages: [
                {
                    id: null,
                    name: null,
                    url: null
                }
            ]
        },
        {
            id: '02',
            page: 'Home',
            url: '/',
            subPages: [
                {
                    id: '021',
                    name: 'Page 01',
                    url: '/021'
                }
            ]
        },
        {
            id: '03',
            page: 'Home',
            url: '/',
            subPages: [
                {
                    id: '031',
                    name: 'Page 03',
                    url: '/031'
                }
            ]
        }
    ];

    return (
        <header className='header'>
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <img className='header__logo__image' src={Logo} alt="" srcSet="" />
                </div>
                <nav className='header__menu'>
                    <ul className='header__menu__list'>

                        {menuPages.map((page, index) => (
                            <div key={index} className='header__menu__item'>
                                <li className='header__item'>
                                    <a href={page.url} className='header__link active'>
                                        {page.page}
                                    </a>
                                </li>
                            </div>
                        ))}
                        <div className='header__menu__item'>
                            <li className='header__item'>
                                <a
                                    href='{page.url}'
                                    className='header__link header__link--mykitchen'
                                >
                                    My Kitchen
                                </a>
                            </li>
                        </div>
                    </ul>
                </nav>
                <nav className='header__nav'>
                    <ul className='header__list'>
                       
                    </ul>
                    <button className='header__menumobile'>
                        <CiMenuBurger />
                    </button>
                </nav>
                
            </div>
        </header>
    );
};

export default Header;
