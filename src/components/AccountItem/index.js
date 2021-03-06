import PropType from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img src={data.avatar} alt={data.full_name} className={cx('avatar')} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </p>
                <span className={cx('username')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

AccountItem.propType = {
    data: PropType.object,
};

export default AccountItem;
