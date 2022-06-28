import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/8c17e1321a9ce7afca9e43cb78b4d230.jpeg?x-expires=1656468000&x-signature=tWEtiQ5myRnONg1dNMr5PJ5wiFY%3D"
                alt="Hoa"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>NguyenNhuQuynh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <span className={cx('username')}>Như Quỳnh</span>
            </div>
        </div>
    );
}

export default AccountItem;
