import { Container } from "@/components/ui/container";
import type { FooterProps } from "./footer.types";
import { footerStyles as s } from "./footer.styles";

export function Footer({ content, businessName }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={s.wrapper}>
      <Container>
        <div className={s.grid}>
          {/* Brand */}
          <div className={s.brandCol}>
            <div className={s.brandName}>{businessName}</div>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Crafted with care. Powered by WebAAS.
            </p>
          </div>

          {/* Links */}
          {content.links && content.links.length > 0 && (
            <div className={s.linksCol}>
              <div className={s.linksTitle}>Quick Links</div>
              {content.links.map((link, i) => (
                <a key={i} href={link.href} className={s.link}>
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* Socials */}
          {content.socials && content.socials.length > 0 && (
            <div className={s.socialsCol}>
              <div className={s.linksTitle}>Follow Us</div>
              <div className={s.socialRow}>
                {content.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.socialLink}
                    aria-label={social.platform}
                  >
                    {social.icon || social.platform.charAt(0).toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom */}
        <div className={s.bottom}>
          {content.copyrightText || `© ${currentYear} ${businessName}. All rights reserved.`}
        </div>
      </Container>
    </footer>
  );
}
