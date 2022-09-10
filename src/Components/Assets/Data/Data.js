import {
    UilEstate,
    UilFocusAdd,
    UilUserPlus,
    UilHeartAlt,
    UilUserSquare,
    UilUsersAlt,
    UilDesktop,
    UilUniversity
} from '@iconscout/react-unicons';
import logo from '../Images/logo.jpeg';


export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Home",
        href: "/"
    },
    {
        icon: UilUserPlus,
        heading: "Employee",
        href: "/AddEmployee"
    },
    {
        icon: UilFocusAdd,
        heading: "New Job",
        href: '/AddJopOffer'
    },
    {
        icon: UilHeartAlt,
        heading: "Favorite",
        href: "#"
    },
    {
        icon: UilUserSquare,
        heading: "Profile",
        href: "#"
    },
];

// Analytics Cards Data
export const cardsData = [
    {
      title: "Employees",
      color: {
        backGround: "linear-gradient(180deg, #1B668E 0%, #1B668E 100%)",
        boxShadow: "0px 10px 20px 0px #E1EAF5",
      },
      barValue: 70,
      value: "500",
      png: UilUsersAlt,
      series: [
        {
          name: "Employees",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Partnership",
      color: {
        backGround: "linear-gradient(180deg, #FFD24C 0%, #FFD24C 100%)",
        boxShadow: "0px 10px 20px 0px #E1EAF5",
      },
      barValue: 80,
      value: "30",
      png: UilUniversity,
      series: [
        {
          name: "Partnership",
          data: [2, 4, 5, 4, 3, 5, 7],
        },
      ],
    },
    {
      title: "My Jobs",
      color: {
        backGround:
          "linear-gradient(180deg,rgb(174 210 249) 0%, rgb(174 210 249) 100%)",
        boxShadow: "0px 10px 20px 0px #E1EAF5",
      },
      barValue: 60,
      value: "100",
      png: UilDesktop,
      series: [
        {
          name: "My Jobs",
          data: [5, 15, 18, 10, 10, 17, 25],
        },
      ],
    },
  ];

  // Recent Request Card Data
export const RequestData = [
  {
    img: logo,
    name: "STC",
    noti: "has a new request",
    time: "25 seconds ago",
  },
  {
    img: logo,
    name: "SDAIA",
    noti: "has a new request.",
    time: "30 minutes ago",
  },
];