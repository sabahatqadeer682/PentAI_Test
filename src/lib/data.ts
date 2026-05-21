export const navLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "SecrtChat", href: "#secrtchat", active: false },
  { label: "GenPen", href: "#genpen", active: false },
  { label: "Contact", href: "#contact", active: false },
] as const;

import type { SecurityIconName } from "@/components/icons/SecurityIcons";

export type { SecurityIconName };

export const securityFeatures: {
  icon: SecurityIconName;
  title: string;
  iconSize: number;
  style: { left: number; top: number; width: number; height: number };
}[] = [
  {
    icon: "lock",
    title: "Lorem Ipsum Dollar",
    iconSize: 40,
    style: { left: 130, top: 24, width: 169, height: 157 },
  },
  {
    icon: "wall",
    title: "Lorem Ipsum Dollar",
    iconSize: 40,
    style: { left: 216, top: 382, width: 169, height: 157 },
  },
  {
    icon: "shield-check",
    title: "Lorem Ipsum Dollar",
    iconSize: 40,
    style: { left: 23, top: 382, width: 169, height: 157 },
  },
  {
    icon: "fingerprint",
    title: "Lorem Ipsum Dollar",
    iconSize: 50,
    style: { left: 130, top: 205, width: 255, height: 157 },
  },
  {
    icon: "security-camera",
    title: "Lorem Ipsum Dollar",
    iconSize: 44,
    style: { left: 323, top: 24, width: 288, height: 157 },
  },
  {
    icon: "shield-warning",
    title: "Lorem Ipsum Dollar",
    iconSize: 50,
    style: { left: 418, top: 205, width: 193, height: 334 },
  },
];

export const featureTabs = [
  {
    id: "feature-1",
    title: "Feature 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.",
    active: true,
  },
  {
    id: "feature-2",
    title: "Feature 2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.",
    active: false,
  },
  {
    id: "feature-3",
    title: "Feature 3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.",
    active: false,
  },
] as const;

export const testimonials = [
  {
    name: "Floyd Miles",
    avatar: "/images/avatar-floyd.png",
    quote:
      "Magnis lacus laoreet pharetra commodo ac semper nam. Malesuada viverra mattis pellentesque consectetur nunc dignissim gravida duis. Ornare at turpis purus leo metus arcu arcu sed faucibus.",
  },
  {
    name: "Esther Howard",
    avatar: "/images/avatar-esther.png",
    quote:
      "Arcu augue egestas nec facilisis volutpat tortor tempus vitae sit.",
  },
  {
    name: "Erat consectetur",
    avatar: "/images/avatar-erat.png",
    quote:
      "Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus sit. Ac enim odio id accumsan pretium quisque venenatis suscipit lobortis.",
  },
  {
    name: "Mauris pulvinar",
    avatar: "/images/avatar-mauris.png",
    quote:
      "Quis ultricies molestie massa elit convallis lectus orci. Accumsan vulputate tempor dapibus nunc.",
  },
  {
    name: "Egestas mauris",
    avatar: "/images/avatar-egestas.png",
    quote:
      "Magna id ut eu amet blandit sit auctor gravida. Massa praesent neque et elementum suspendisse.",
  },
  {
    name: "Aliquet rhoncus",
    avatar: "/images/avatar-aliquet.png",
    quote:
      "Urna pellentesque in elementum lacus amet tristique. Nec elementum lacus urna quis odio. Posuere facilisi ultricies et donec mauris ornare interdum dui ut.",
  },
  {
    name: "Placerat nisl",
    avatar: "/images/avatar-placerat.png",
    quote:
      "Tristique nulla proin augue sit aliquam donec ornare. Aliquam diam egestas egestas feugiat lacinia. Facilisis sagittis nibh morbi ornare nunc luctus sit aliquet. Molestie sed viverra vel integer diam.",
  },
  {
    name: "Magna tellus",
    avatar: "/images/avatar-magna.png",
    quote:
      "Leo praesent quisque placerat adipiscing eget sed rutrum pharetra. Tellus id vitae arcu lobortis. Elementum eu facilisis at quam pellentesque volutpat a. Dictum eleifend nunc aenean auctor.",
  },
] as const;

export const showcaseCheckLines = [
  "Pellentesque odio sit sem nulla fringilla cum",
  "diam morbi at. Consectetur enim nulla risus",
  "elementum mattis.",
] as const;

export const checkItems = [
  showcaseCheckLines,
  showcaseCheckLines,
  showcaseCheckLines,
  showcaseCheckLines,
] as const;
