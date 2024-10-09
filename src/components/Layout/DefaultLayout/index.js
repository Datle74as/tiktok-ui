import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import Header from '~/components/Layout/components/Header'
import Sidebar from './Sidebar'

const cx = classNames.bind(styles)

function DedaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    )
}

export default DedaultLayout
