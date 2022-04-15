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

const projects = {
    id: 'projects',
    title: <FormattedMessage id="projects" />,
    type: 'group',
    children: [
        {
            id: 'mypojects',
            title: <FormattedMessage id="myprojects" />,
            type: 'item',
            url: '/projects/me',
            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false
        },
        {
            id: 'findProjects',
            title: <FormattedMessage id="findProjects" />,
            type: 'item',
            url: '/projects/find',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'savedProjects',
            title: <FormattedMessage id="savedProjects" />,
            type: 'item',
            url: '/dashboard/analytics',
            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false
        }
    ]
};

export default projects;
