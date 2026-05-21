"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/data";
import { figma } from "@/lib/figma-tokens";
import { cn } from "@/lib/utils";

/** Mobile menu only — no Dashboard (desktop keeps Dashboard in the bar) */
const mobileMenuLinks = [
  { label: "Home", href: "#home", active: true },
  ...navLinks
    .filter((link) => link.label !== "Home")
    .map((link) => ({
      label: link.label,
      href: link.href,
      active: link.active,
    })),
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const h = figma.header;

  const headerVars = {
    ["--header-logo-nav-gap" as string]: `${h.logoNavGap}px`,
    ["--header-nav-inner-gap" as string]: `${h.navInnerGap}px`,
    ["--header-nav-width" as string]: `${h.navWidth}px`,
    ["--header-nav-height" as string]: `${h.navHeight}px`,
    ["--header-nav-padding-x" as string]: `${h.navLinkPaddingX}px`,
    ["--header-nav-link-height" as string]: `${h.navLinkHeight}px`,
    ["--header-nav-link-active-width" as string]: `${h.navLinkActiveWidth}px`,
    ["--header-nav-link-active-height" as string]: `${h.navLinkActiveHeight}px`,
    ["--header-nav-link-active-padding-x" as string]: `${h.navLinkActivePaddingX}px`,
    ["--header-nav-link-active-gap" as string]: `${h.navLinkActiveGap}px`,
    ["--header-nav-link-active-radius" as string]: `${h.navLinkActiveRadius}px`,
    ["--header-nav-link-inactive-width" as string]: `${h.navLinkInactiveWidth}px`,
    ["--header-nav-link-inactive-height" as string]: `${h.navLinkInactiveHeight}px`,
    ["--header-nav-link-inactive-padding-x" as string]: `${h.navLinkInactivePaddingX}px`,
    ["--header-nav-link-inactive-gap" as string]: `${h.navLinkInactiveGap}px`,
    ["--header-nav-link-inactive-radius" as string]: `${h.navLinkInactiveRadius}px`,
    ["--header-nav-font-size" as string]: `${h.navFontSize}px`,
    ["--header-nav-line-height" as string]: `${h.navLineHeight}px`,
    ["--header-nav-font-weight" as string]: String(h.navFontWeight),
    ["--header-nav-letter-spacing" as string]: h.navLetterSpacing,
    ["--header-actions-gap" as string]: `${h.actionsGap}px`,
    ["--header-dashboard-height" as string]: `${h.dashboardHeight}px`,
    ["--header-dashboard-padding-x" as string]: `${h.dashboardPaddingX}px`,
    ["--header-dashboard-font-size" as string]: `${h.dashboardFontSize}px`,
    ["--header-dashboard-line-height" as string]: `${h.dashboardLineHeight}px`,
  } as CSSProperties;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "site-header relative z-50 w-full max-lg:px-0 lg:px-[80px]",
        menuOpen && "site-header--menu-open",
      )}
    >
      <div
        className="site-header-bar relative mx-auto flex w-full max-w-[1280px] items-center backdrop-blur-[4px]"
        style={{
          ...headerVars,
          height: h.height,
          borderRadius: h.borderRadius,
        }}
      >
        <Link
          href="#home"
          className="site-header-logo-link shrink-0"
          onClick={closeMenu}
          aria-label="PentAi home"
        >
          <Logo className="site-header-logo" />
        </Link>

        <nav
          className="header-nav site-header-desktop-nav hidden items-center lg:flex"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "header-nav-link type-header-nav cursor-default",
                link.active
                  ? "header-nav-link--active text-text-contrast"
                  : "text-border-hover",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions flex shrink-0 items-center gap-3 lg:ml-auto">
          <div className="site-header-dashboard-wrap hidden lg:flex">
            <Button size="lg" className="header-btn-dashboard">
              Dashboard
            </Button>
          </div>
          <button
            type="button"
            className={cn(
              "site-header-menu-btn relative flex lg:hidden",
              menuOpen && "site-header-menu-btn--open",
            )}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="site-header-menu-line" />
            <span className="site-header-menu-line" />
            <span className="site-header-menu-line" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className="site-header-backdrop fixed inset-0 z-[35] lg:hidden"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <nav
            className="site-header-drawer site-header-drawer--open absolute left-0 right-0 top-[calc(100%+12px)] z-40 mx-auto flex w-full max-w-[1280px] flex-col lg:hidden"
            aria-label="Mobile menu"
          >
            <ul className="site-header-drawer-list m-0 flex list-none flex-col gap-0.5 p-0">
              {mobileMenuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "site-header-drawer-link type-header-nav block w-full rounded-[10px] px-4 py-3 transition-colors",
                      link.active
                        ? "site-header-drawer-link--active text-text-contrast"
                        : "text-border-hover hover:bg-white/[0.04] hover:text-text-contrast",
                    )}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
