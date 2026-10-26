import Link from 'next/link';

import { ImageBox } from '../common/ImageBox';
import { Column, Row } from '../common/common.container.flex';
import { IconProps, Icons } from '../common/common.icon';
import { Text } from '../common/common.text';

interface SimpleFooterProps {
  id?: string;
  companyName: string;
  companyLogoUrl?: string;
  companyWebsite?: string;
  companyEmail?: string;
  companyPhone?: string;
  companyAddress?: string;
  socialInstagram?: string;
  socialLinkedIn?: string;
  socialTwitter?: string;
  socialWhatsapp?: string;
  termsUrl?: string;
  privacyUrl?: string;

  year: number;
}

const FooterLink = (props: {
  href: string;
  iconType: IconProps['iconType'];
  children: React.ReactNode;
}) => {
  const { href, iconType, children } = props;
  return (
    <Link href={href} className="line-bottom-hover">
      <Row gap={2}>
        <Icons iconType={iconType} iconSize="1rem" />
        <Text>{children}</Text>
      </Row>
    </Link>
  );
};

export const SimpleFooter = (props: SimpleFooterProps) => {
  const { id } = props;

  return (
    <footer id={id} className="w-full p-8 bg-gray-800 text-gray-300 text-sm">
      <Row responsive="md" gap={8} className="md:justify-center items-start">
        <Column flexX="start" className="w-full">
          <Row gap={4} className="text-nowrap mb-4">
            <ImageBox width={30} src={props.companyLogoUrl} alt={props.companyName} />
            <Text size="md">{props.companyName}</Text>
          </Row>
        </Column>

        <Column flexX="start" className="w-full md:max-w-40">
          <Text bold size="xs" opacity="50">
            Social Links
          </Text>
          <FooterLink href={props.companyWebsite || '#'} iconType="website">
            Website
          </FooterLink>
          <FooterLink href={props.socialWhatsapp || '#'} iconType="whatsapp">
            WhatsApp
          </FooterLink>
          <FooterLink href={props.socialInstagram || '#'} iconType="instagram">
            Instagram
          </FooterLink>
        </Column>

        <Column flexX="start" className="w-full md:max-w-40">
          <Text bold size="xs" opacity="50">
            Terms & Policies
          </Text>
          <FooterLink href={props.privacyUrl || '#'} iconType="link">
            Privacy Policy
          </FooterLink>
          <FooterLink href={props.termsUrl || '#'} iconType="link">
            Terms of Use
          </FooterLink>
        </Column>

        <Column flexX="start" className="w-full md:max-w-lg">
          <Text bold size="xs" opacity="50">
            Contact
          </Text>
          <FooterLink href={`mailto:${props.companyEmail || '#'}`} iconType="email">
            {props.companyEmail}
          </FooterLink>
          <FooterLink href={`tel:${props.companyPhone || '#'}`} iconType="phone">
            {props.companyPhone}
          </FooterLink>
          <FooterLink
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.companyAddress || '')}`}
            iconType="map"
          >
            {props.companyAddress}
          </FooterLink>
        </Column>
      </Row>
      <Text centered size="xs" opacity="70" className="text-nowrap mt-16">
        &copy; {props.year} {props.companyName}. All rights reserved.
      </Text>
    </footer>
  );
};
