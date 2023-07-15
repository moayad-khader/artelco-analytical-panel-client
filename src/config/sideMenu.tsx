import { NavItems } from "lib/types/sidebar.types";
import { Icons } from "components/icons";

export const sideMenu: NavItems[] = [
  {
    label: "Master Data",
    icon: undefined,
    link: "javascript:;",
    isParent: false,
  },
  {
    label: "Master Korcam",
    icon: <Icons.chart className="w-4 h-4" />,
    link: "/dashboard/master-korcam",
    isParent: false,
  }
  // },
  // {
  //   label: "Settings",
  //   icon: <Icons.settings className="w-4 h-4" />,
  //   link: "/settings",
  //   isParent: true,
  //   subMenu: [
  //     {
  //       label: "Profile",
  //       link: "/settings/profile",
  //     },
  //     {
  //       label: "Preferences",
  //       link: "/settings/preferences",
  //     },
  //   ],
  // },
]