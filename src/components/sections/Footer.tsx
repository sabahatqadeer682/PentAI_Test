import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
  IconX,
  IconYoutube,
} from "@/components/icons/SocialIcons";
import { images } from "@/lib/assets";

const socialLinks = [
  { Icon: IconFacebook, label: "Facebook" },
  { Icon: IconInstagram, label: "Instagram" },
  { Icon: IconX, label: "X" },
  { Icon: IconLinkedIn, label: "LinkedIn" },
  { Icon: IconYoutube, label: "YouTube" },
] as const;

export function Footer() {
  return (
    <footer
      id="contact"
      className="site-footer mx-auto w-full min-w-0 max-w-[1440px] box-border px-4 py-10 md:px-8 md:py-12 lg:px-[80px] lg:py-14"
    >
      <div className="site-footer-inner mx-auto flex w-full min-w-0 max-w-[1280px] flex-col">
        <div className="site-footer-top flex w-full min-w-0 flex-col gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6">
          <div className="site-footer-brand flex min-w-0 justify-center lg:justify-self-start">
            <Logo variant="footer" />
          </div>

          <p className="site-footer-copyright type-sm-regular m-0 min-w-0 text-center text-text-contrast lg:justify-self-center lg:text-center">
            © 2024 by PentAi. All rights are reserved.
          </p>

          <div className="site-footer-social flex w-full min-w-0 justify-center lg:w-auto lg:justify-self-end">
            <div
              className="site-footer-social-icons flex flex-wrap items-center justify-center lg:justify-end"
              aria-label="Social media"
            >
              {socialLinks.map(({ Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="site-footer-social-link flex items-center justify-center text-text-contrast transition-colors"
                >
                  <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer-credits flex w-full min-w-0 flex-col">
          <div className="site-footer-divider-wrap w-full min-w-0">
            <div className="site-footer-divider-fade lg:hidden" aria-hidden />
            <div className="site-footer-divider-image hidden w-full lg:block">
              <Image
                src={images.footerDivider}
                alt=""
                width={1280}
                height={17}
                className="block h-auto w-full max-w-full"
                sizes="(max-width: 1023px) 100vw, 1280px"
                aria-hidden
              />
            </div>
          </div>

          <div className="site-footer-bottom flex w-full min-w-0 flex-col gap-[18px] lg:flex-row lg:flex-nowrap lg:items-center lg:justify-between lg:gap-4">
            <p className="site-footer-credit type-sm-medium m-0 text-text-contrast">
              Realised by Right Tail Corp.
            </p>
            <nav
              className="site-footer-links flex items-center"
              aria-label="Legal"
            >
              <Link
                href="#"
                className="site-footer-legal-link type-sm-medium text-text-contrast"
              >
                Privacy Policy
              </Link>
              <span className="site-footer-links-dot" aria-hidden>
                ·
              </span>
              <Link
                href="#"
                className="site-footer-legal-link type-sm-medium text-text-contrast"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
