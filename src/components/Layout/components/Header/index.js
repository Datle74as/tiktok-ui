import React, { useEffect, useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleXmark,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Header.module.scss'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function Header() {
    const [accountResults, setAccountResults] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setAccountResults([1, 2, 3])
        }, 3000)
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    visible={accountResults.length > 0}
                    interactive
                    render={(attrs) => (
                        <div
                            className={cx('search-drop')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>My tippy box</PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            className={cx('search-input')}
                            type="text"
                            placeholder="Search"
                        />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <button className={cx('search-close-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('navbar')}></div>
            </div>
        </header>
    )
}

export default Header
