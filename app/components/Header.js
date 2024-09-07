"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Notification from "./Notification";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const pathname = usePathname();

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleClickOutside = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setIsNotificationOpen(false);
    }
  };

  useEffect(() => {
    if (isNotificationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotificationOpen]);

  const sidebarLinks = [
    {
      title: "General",
      links: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: "/assets/dashboard.svg",
        },
        {
          href: "/chatapp",
          label: "Notification",
          icon: "/assets/inbox.svg",
        },
        {
          href: "/settings",
          label: "Settings",
          icon: "/assets/settings.svg",
        },
        {
          href: "/Docs",
          label: "Docs",
          icon: "/assets/docs.svg",
        },
      ],
    },
    {
      title: "Buy to Let",
      links: [
        {
          href: "/marketplace",
          label: "Marketplace",
          icon: "/assets/icons/sidebar-5.svg",
        },
        {
          href: "/upcoming",
          label: "Upcoming",
          icon: "/assets/icons/sidebar-6.svg",
        },
        {
          href: "/secondary-market",
          label: "Secondary Market",
          icon: "/assets/icons/sidebar-7.svg",
        },
        {
          href: "/favorites",
          label: "Favorites",
          icon: "/assets/icons/sidebar-8.svg",
        },
      ],
    },
    {
      title: "Defi",
      links: [
        {
          href: "/overview",
          label: "Overview",
          icon: "/assets/icons/sidebar-9.svg",
        },
        {
          href: "/farm-liquidity",
          label: "Liquidity Pool",
          icon: "/assets/icons/sidebar-10.svg",
        },
        {
          href: "/printer",
          label: "Printer",
          icon: "/assets/icons/sidebar-11.svg",
        },
      ],
    },
    {
      title: "My Profile",
      links: [
        {
          href: "/my-properties",
          label: "Portfolio",
          icon: "/assets/icons/sidebar-12.svg",
        },
        {
          href: "/voting",
          label: "Governance",
          icon: "/assets/icons/star.svg",
        },
        {
          href: "/Payouts",
          label: "Payouts",
          icon: "/assets/icons/sidebar-13.svg",
        },
      ],
    },
    {
      title: "Join the team",
      links: [
        {
          href: "/estate-agent",
          label: "Estate Agent",
          icon: "/assets/icons/sidebar-14.svg",
        },
      ],
    },
  ];

  return (
    <header className="bg-white fixed z-50 lg:static border-b border-[#EEEEEE] w-full px-3 sm:px-[35px] h-[100px] flex justify-between items-center">
      <div className="flex items-center gap-2 sm:gap-4">
        <button onClick={toggleMobileMenu} className="lg:hidden block">
          <IoMenu className="w-[35px] h-[35px]" />
        </button>
        {pathname === "/details" && (
          <Link href="/dashboard">
            <Image
              src="/assets/Logo.svg"
              alt="avatar"
              width={149}
              height={32}
            />
          </Link>
        )}
      </div>

      <div className="flex items-center gap-5">
        <Link href="/settings">
          <Image
            src="/assets/icons/setting-icon.svg"
            alt="setting-icon"
            width={28}
            height={28}
          />
        </Link>
        <div className="flex items-center justify-center relative">
          <button onClick={toggleNotification}>
            <Image
              src="/assets/icons/bell-icon.svg"
              alt="bell-icon"
              width={28}
              height={28}
            />
          </button>
          {/* notification */}
          {isNotificationOpen && (
            <div
              ref={notificationRef}
              className="notification z-[99999] w-[320px] sm:w-[390px] absolute top-14 sm:-right-14 -right-40 py-[22px] px-[24px] border border-[#00000026]"
            >
              <Notification />
            </div>
          )}
        </div>
        <button className="bg-custom-gradient text-white h-[50px] w-[170px] px-[14px] rounded-[1111px] md:text-[14px] text-[16px] font-jakarta leading-[20px] font-semibold flex items-center justify-between">
          <Image
            src="/assets/profile.svg"
            alt="wallet"
            width={30}
            height={30}
            className="md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
          />
          1ygqYRB7Q..
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[100px] left-0 w-full h-full overflow-scroll bg-white shadow-lg flex-col flex transform py-6 pb-72 px-4 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <div className="mb-6 flex items-center gap-3">
          <Image src="/assets/Logo.svg" alt="avatar" width={149} height={32} />
        </div>

        <div className="my-4 sm:my-14">
          <div className="flex flex-col gap-6 w-full">
            {sidebarLinks.map((section, index) => (
              <div key={index} className="flex flex-col gap-[15px] w-full">
                <h3 className="text-[16px] font-bold text-[#0C0839] font-jakarta">
                  {section.title}
                </h3>
                <div className="flex flex-col gap-[15px]">
                  {section.links.map((link, idx) => (
                    <Link key={idx} href={link.href}>
                      <div className="flex items-center gap-2 w-full rounded-[10px]">
                        {link.icon && (
                          <Image
                            src={link.icon}
                            alt="icon"
                            width={22}
                            height={22}
                          />
                        )}
                        <h2 className="text-[16px] leading-[20px] font-medium text-[#0C0839] font-jakarta text-opacity-60">
                          {link.label}
                        </h2>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
