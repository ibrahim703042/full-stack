import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const TopBar = {
  logo: [{ url: '', urlName: 'Logo' }],

  navMenu: [
    { id: 1, url: '/', urlName: 'Home' },
    { id: 2, url: '#about', urlName: 'About' },
    { id: 3, url: '#blog', urlName: 'Blog' },
    { id: 4, url: '#contact', urlName: 'Contact' },
  ],

  socialMenu: [
    { id: 1, url: '', urlName: 'Facebook' },
    { id: 2, url: '', urlName: 'Instagram' },
    { id: 3, url: '', urlName: 'Twitter' },
    { id: 4, url: '', urlName: 'Youtube' },
  ],
};

export const Dashboard = {
  logo: [{ url: '', urlName: 'Logo' }],

  navMenu: [
    { id: 1, icon: '/', iconName: 'Language' },
    { id: 2, icon: '/', iconName: 'DarkMode' },
    { id: 3, icon: '/', iconName: 'Blog' },
    { id: 4, icon: '/', iconName: 'Contact' },
  ],

  sidebarMenu: [
    {
      id: 1,
      title: 'MAIN',
      listItems: [
        {
          id: 1,
          title: 'Dashboard',
          url: '/',
          // icon: <DashboardIcon />,
        },
        // { id: 2, title: 'Profile', url: '/users/1', icon: 'user.svg' },
      ],
    },
    {
      id: 2,
      title: 'LISTS',
      listItems: [
        {
          id: 1,
          title: 'Users',
          url: '/admin/users/list',
          // icon: <PersonOutlineIcon className="icon" />,
        },
        {
          id: 2,
          title: 'Products',
          url: '/admin/products/list',
          // icon: <StoreIcon className="icon" />,
        },
        {
          id: 3,
          title: 'Orders',
          url: '/admin/orders/list',
          // icon: <CreditCardIcon className="icon" />,
        },
        {
          id: 4,
          title: 'Delivery',
          url: '/admin/delivery/list',
          // icon: <LocalShippingIcon className="icon" />,
        },
      ],
    },
    {
      id: 3,
      title: 'USEFUL',
      listItems: [
        {
          id: 1,
          title: 'Stats',
          url: '/',
          // icon: <InsertChartIcon className="icon" />,
        },
        {
          id: 2,
          title: 'Notifications',
          url: '/',
          // icon: <NotificationsNoneIcon className="icon" />,
        },
        {
          id: 1,
          title: 'Settings',
          url: '/',
          // icon: <SettingsApplicationsIcon className="icon" />,
        },
      ],
    },
    {
      id: 4,
      title: 'SERVICE',
      listItems: [
        {
          id: 1,
          title: 'Charts',
          url: '/',
          // icon: <SettingsSystemDaydreamOutlinedIcon className="icon" />,
        },
        {
          id: 2,
          title: 'Logs',
          url: '/',
          // icon: <PsychologyOutlinedIcon className="icon" />,
        },
      ],
    },
    {
      id: 5,
      title: 'USER',
      listItems: [
        {
          id: 1,
          title: 'Profile',
          url: '/',
          // icon: <AccountCircleOutlinedIcon className="icon" />,
        },
        {
          id: 2,
          title: 'Logout',
          url: '/',
          // icon: <ExitToAppIcon className="icon" />,
        },
      ],
    },
  ],
};
