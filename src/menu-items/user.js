// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const user = {
    id: 'user',
    title: <FormattedMessage id="user" />,
    type: 'group',
    children: [
        {
            id: 'userSettings',
            title: <FormattedMessage id="userSettings" />,
            type: 'item',
            url: '/user/account-profile/profile1',
            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false
        },
        {
            id: 'userProfil',
            title: <FormattedMessage id="userProfil" />,
            type: 'item',
            url: '/user/social-profile/posts',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default user;
