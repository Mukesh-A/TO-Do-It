import React from "react";
import { Home } from "lucide-react";
export const navItems = [{ name: "Home", href: "/dashboard", icon: Home }];

const DashboardNav = () => {
  return <nav className="grid items-start gap-2"></nav>;
};

export default DashboardNav;
