/** Design tokens from Figma node 1:805 */

const T_CARD_W = 305;
const T_CARD_GAP = 16;
const T_FIGMA_CARD_W = 320;
const T_LAYOUT_SCALE = T_CARD_W / T_FIGMA_CARD_W;

/** Figma 1:1036 positions — scaled for 271px card width */
const FIGMA_TESTIMONIAL_POSITIONS = [
  { left: 0, top: 0 },
  { left: 336, top: 0 },
  { left: 672, top: 0 },
  { left: 1008, top: 0 },
  { left: 0, top: 325 },
  { left: 336.5, top: 213.51 },
  { left: 672.5, top: 269.51 },
  { left: 1008.5, top: 230.51 },
] as const;

function buildTestimonialCardPositions() {
  return FIGMA_TESTIMONIAL_POSITIONS.map((_, i) => {
    const col = i % 4;
    const left = col * (T_CARD_W + T_CARD_GAP) + (i >= 4 && col > 0 ? 0.5 : 0);
    const top =
      Math.round(FIGMA_TESTIMONIAL_POSITIONS[i].top * T_LAYOUT_SCALE * 100) /
      100;
    return { left, top };
  });
}

export const figma = {
  pageWidth: 1440,
  /** Default symmetric horizontal gutter (80px ×2 on 1440 frame) */
  pageGutter: 80,
  /** Centered content — equal margin L/R: (1440 − width) / 2 */
  contentInset: (width: number) => (1440 - width) / 2,
  colors: {
    bgSubtle: "#1C1C1C",
    bg: "#232323",
    bgHover: "#282828",
    bgActive: "#2E2E2E",
    line: "#343434",
    tabLine: "#313538",
    textContrast: "#ECEDEE",
    textMuted: "#9BA1A6",
    textSecondary: "#A0A0A0",
    borderHover: "#4C5155",
    solid: "#707070",
    white: "#FFFFFF",
    glowGrey: "#7F7F7F",
    glowSpot: "#505050",
    /** Figma hero wash — rgba(0, 2, 18, 0.07) */
    heroWash: "#00021212",
  },
  gradients: {
    heading: "linear-gradient(212deg, #7E7E7E 0%, #FFFFFF 100%)",
    headingAlt: "linear-gradient(162deg, #7E7E7E 0%, #FFFFFF 100%)",
    primaryButton: "linear-gradient(-41deg, #301A3A 7%, #442155 60%)",
    logoA: "linear-gradient(-37deg, #301A3A 0%, #7938B2 52%)",
    logoBar: "linear-gradient(113deg, #7938B2 0%, #301A3A 100%)",
    tabActive: "linear-gradient(-2deg, #8E4EC8 0%, #B77DDD 8%, #F7ECFC 94%)",
    heroVignette:
      "linear-gradient(180deg, rgba(80, 80, 80, 0.05) 0%, rgba(80, 80, 80, 0.02) 35%, rgba(255, 255, 255, 0) 72%)",
    /** Figma 1:833 — border-image-source */
    dashboardBorder:
      "linear-gradient(300.14deg, rgba(80, 80, 80, 0) 1.68%, #505050 69.44%)",
    /** Figma angular gradient — supporters / hero */
    angularConic:
      "conic-gradient(from 179.91deg at 49.93% 55.43%, rgba(27, 20, 29, 0.4) -0.07deg, rgba(67, 33, 85, 0.4) 0.29deg, rgba(67, 33, 85, 0.4) 0.56deg, rgba(67, 33, 85, 0.4) 16.02deg, rgba(34, 21, 39, 0.4) 128.39deg, rgba(34, 21, 39, 0.4) 144.61deg, rgba(34, 21, 39, 0.4) 157.3deg, rgba(34, 21, 39, 0.4) 188.67deg, rgba(34, 21, 39, 0.4) 211.58deg, rgba(27, 20, 29, 0.4) 222.07deg, rgba(27, 20, 29, 0.4) 271.11deg, rgba(27, 20, 29, 0.4) 281.12deg, rgba(27, 20, 29, 0.4) 287.98deg, rgba(27, 20, 29, 0.4) 316.97deg, rgba(27, 20, 29, 0.4) 342.5deg, rgba(27, 20, 29, 0.4) 359.93deg, rgba(67, 33, 85, 0.4) 360.29deg)",
    /** Grey state when scrolled */
    angularConicGrey:
      "conic-gradient(from 179.91deg at 49.93% 55.43%, rgba(28, 28, 28, 0.45) -0.07deg, rgba(127, 127, 127, 0.4) 0.29deg, rgba(127, 127, 127, 0.4) 16.02deg, rgba(80, 80, 80, 0.4) 128.39deg, rgba(80, 80, 80, 0.4) 188.67deg, rgba(80, 80, 80, 0.4) 211.58deg, rgba(28, 28, 28, 0.45) 222.07deg, rgba(28, 28, 28, 0.45) 271.11deg, rgba(28, 28, 28, 0.45) 316.97deg, rgba(28, 28, 28, 0.45) 359.93deg, rgba(127, 127, 127, 0.4) 360.29deg)",
  },
  /** Figma 1:828–832 dashboard intro copy */
  dashboardIntro: {
    width: 1024,
    copyWidth: 640,
    gap: 12,
    heading: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "0.005em",
      gradient: "linear-gradient(162deg, #7E7E7E 0%, #FFFFFF 100%)",
    },
    body: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 28,
      letterSpacing: "0.005em",
      /** Same as supporters 1:818 — fg/text-contrast */
      color: "#ECEDEE",
    },
  },
  /** Figma 1:834–874 stats row */
  stats: {
    sectionPaddingY: 64,
    headingWidth: 768,
    rowWidth: 1024,
    rowGap: 36,
    cardGap: 10,
    cardWidth: 317.33331298828125,
    cardHeight: 200,
    cardRadius: 24,
    cardPadding: 30,
    cardBorderWidth: 1,
    borderGradient:
      "linear-gradient(180.42deg, #505050 0.37%, rgba(80, 80, 80, 0) 45.29%)",
    backdropBlur: 86.5,
    bg: "#1C1C1C",
    /** Figma Union 1:841 — five concentric curves, secondary/line */
    union: {
      x: -49,
      y: 89,
      width: 415.45,
      height: 254.47,
      color: "#343434",
    },
    description: {
      fontFamily: "DM Sans",
      /** 15/22 — 2 lines at full card width 317.33px (16/24 wraps to 3) */
      fontSize: 15,
      lineHeight: 22,
      fontWeight: 400,
      boldWeight: 700,
      letterSpacing: "0.005em",
      textAlign: "center" as const,
      color: "#ECEDEE",
      maxWidth: 317.33331298828125,
    },
  },
  /** Figma 1:825–833 dashboard block */
  dashboard: {
    width: 1024,
    height: 691,
    /** Scaled preview — Figma 1024×691, slightly smaller on page */
    displayWidth: 900,
    displayHeight: 608,
    radius: 7.060172080993652,
    innerRadius: 6.060172080993652,
    /** Figma 1:833 stroke fill_MHWEV3 — bottom-right edge */
    cornerGradient:
      "linear-gradient(-46deg, rgba(80, 80, 80, 0) 0%, rgba(80, 80, 80, 0.72) 52%, rgba(80, 80, 80, 0.95) 70%, #505050 100%)",
    /** 1:826 glow — positioned relative to preview (57.4% / 60.8% of frame) */
    seamGlow: {
      leftPercent: 57.4,
      topPercent: 60.8,
      widthPercent: 73.4,
      heightPercent: 34.6,
      color: "#7F7F7F",
      opacity: 0.5,
      blur: 300,
    },
  },
  content: {
    sm: 768,
    md: 1024,
    lg: 1280,
  },
  space: {
    sectionY: 80,
    sectionY64: 64,
    /** Figma 1:807 layout_0MPIYM */
    heroBgFrame: { width: 1440, paddingY: 32 },
    heroShell: { width: 1440, height: 737, paddingY: 16 },
    heroY: { top: 100, bottom: 30 },
    /** Figma 1:811–816 — layout_QDHMQ3 / POASA4 / THK0XE / J1271G */
    hero: {
      contentWidth: 768,
      paddingY: { top: 100, bottom: 30 },
      stackGap: 40,
      copyGap: 12,
      heading: {
        fontSize: 60,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: "0.005em",
      },
      body: {
        fontSize: 24,
        fontWeight: 400,
        lineHeight: 32,
        letterSpacing: "0.005em",
      },
      cta: {
        height: 44,
        paddingX: 24,
        fontSize: 15,
        lineHeight: 20,
        opacity: 0.9,
      },
    },
    /** Figma 1:808 layout_DTWTV2 — Angular gradient 1st version export */
    heroGradient: {
      left: 0,
      top: 99,
      width: 1440,
      height: 1132,
    },
    angularGradient: {
      left: 0,
      top: 99,
      width: 1440,
      height: 1132,
    },
    /** Figma 1:817 layout_KQEE31 + layout_07MR39 */
    supporters: {
      width: 1440,
      paddingTop: 130,
      paddingRight: 10,
      paddingBottom: 128,
      paddingLeft: 10,
      gap: 47,
      logosWidth: 1280,
      logosGap: 45,
      title: {
        fontSize: 24,
        fontWeight: 600,
        lineHeight: 32,
        letterSpacing: "0.005em",
        /** Figma 1:818 — fg/text-contrast */
        color: "#ECEDEE",
      },
      logo: {
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 28,
        letterSpacing: "0.005em",
        color: "#FFFFFF",
      },
    },
    /** Figma 1:826 — center bulb (#7F7F7F, 752×239, blur 300px) */
    supportersGlow: {
      width: 752,
      height: 239,
      color: "#7F7F7F",
      opacity: 0.5,
      blur: 300,
    },
    /** Figma blur on supporters — filter 100px + backdrop 234px / 100px */
    supportersBlur: {
      deepBackdrop: 234,
      midBackdrop: 100,
      filter: 100,
    },
    supportersScrollGlow: {
      scrollStartVH: 0.9,
      scrollEndVH: 0.2,
    },
    supportersTopLine:
      "linear-gradient(90deg, transparent 0%, rgba(183, 125, 221, 0.7) 50%, transparent 100%)",
    supportersTopGlow:
      "radial-gradient(ellipse 78% 62% at 50% 0%, rgba(67, 33, 85, 0.32) 0%, rgba(121, 56, 178, 0.2) 28%, rgba(34, 21, 39, 0.14) 48%, rgba(127, 127, 127, 0.12) 62%, transparent 82%)",
    gap12: 12,
    gap14: 14,
    gap30: 30,
    gap36: 36,
    gap40: 40,
    gap45: 45,
    gap48: 48,
    gap64: 64,
  },
  /** Figma desktop-header 1:810 — layout_L0DVQU / layout_3ZDZHR / layout_UIIW3Q */
  header: {
    barWidth: 1280,
    height: 64,
    borderRadius: 24,
    logoNavGap: 32,
    navInnerGap: 24,
    /** Figma nav row Home→Contact — 632×64 */
    navWidth: 632,
    navHeight: 64,
    navLinkPaddingX: 40,
    navLinkHeight: 64,
    /** Figma active nav link (Home) — 137×64, padding 0 10, gap 8, rounded-full */
    navLinkActiveWidth: 137,
    navLinkActiveHeight: 64,
    navLinkActivePaddingX: 10,
    navLinkActiveGap: 8,
    navLinkActiveRadius: 9999,
    /** Figma inactive nav link (SecrtChat/GenPen/Contact) — 179×64, padding 0 10, gap 8, rounded-full, disabled state */
    navLinkInactiveWidth: 179,
    navLinkInactiveHeight: 64,
    navLinkInactivePaddingX: 10,
    navLinkInactiveGap: 8,
    navLinkInactiveRadius: 9999,
    /** Input/Large Semi Bold — 18px keeps Figma spacing at 40px pad */
    navFontSize: 18,
    navLineHeight: 24,
    navFontWeight: 600,
    navLetterSpacing: "0.005em",
    actionsGap: 16,
    dashboardHeight: 48,
    dashboardPaddingX: 24,
    dashboardFontSize: 15,
    dashboardLineHeight: 20,
    backdropBlur: 4,
  },
  radius: {
    header: 24,
    card: 24,
    feature: 16,
    security: 15.7,
    dashboard: 7.06,
    button: 9999,
  },
  /** Figma 1:876 — Lorem Ipsum Dollar + lock + feature cards */
  security: {
    sectionPaddingY: 80,
    contentWidth: 1024,
    columnGap: 7,
    copyWidth: 380,
    copyGap: 30,
    heading: { fontSize: 48, lineHeight: 1, fontWeight: 600, width: 330 },
    body: { fontSize: 16, lineHeight: 24, fontWeight: 400, width: 263 },
    cardLabel: { fontSize: 20, lineHeight: 28, fontWeight: 600, width: 146.53 },
    lockSize: 286.04,
    gridWidth: 637,
    gridHeight: 566,
    cardRadius: 15.69999885559082,
    cardInnerRadius: 14.39166557788849,
    cardBorder: 1.3083332777023315,
    cardGap: 9.158332824707031,
    cardBlur: 5.233333110809326,
    /** Figma fill_PO8V8H — faint rim at bottom-right (239.29deg spec) */
    borderGradient:
      "linear-gradient(239.29deg, #3D3D3D 9.45%, rgba(160, 160, 160, 0.04) 66.55%)",
    cardFill: "#282828",
    glow: {
      left: 40,
      top: "38%",
      width: 340.17,
      height: 294.65,
      color: "#FFF9F9",
      opacity: 0.5,
      blur: 392.5,
    },
    cardGlow: {
      left: 115.19,
      top: -341.48,
      width: 246.3,
      height: 367.88,
    },
  },
  logo: {
    width: 120,
    height: 53.16,
    textTop: 12.15,
    fontSize: 38.577,
    dot: { left: 98.73, top: 4.56, width: 21.27, height: 21.89 },
    bar: { left: 107.09, top: 28.1, width: 5.32, height: 20.51 },
    footer: {
      width: 84,
      height: 12,
      fontSize: 25.396825790405273,
      offsetX: -10,
      offsetY: -10,
    },
  },
  featuresShowcase: {
    /** Figma layout_KEKI84 — Header / 103 / frame 1:907 (90% compact) */
    sectionWidth: 1440,
    sectionMinHeight: 1540,
    compactScale: 0.9,
    spacing16: 48,
    /** Two steps below spacing16 — section padding-bottom */
    sectionPaddingBottom: 24,
    sectionGap: 48,
    contentWidth: 1024,
    /** 3XL/Semi Bold — one step below Figma 4XL */
    headingType: {
      fontSize: 30,
      lineHeight: 34,
      fontWeight: 600,
      letterSpacing: "0.005em",
    },
    /** LG/Regular — one step below Figma XL */
    checkType: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: 400,
      letterSpacing: "0.005em",
    },
    checkIconSize: 32,
    columnGap: 32,
    columnGapInner: 32,
    textBlockGap: 12,
    textBlockPaddingBottom: 0,
    checkRowGap: 8,
    checkListGap: 12,
    panelHeight: 432,
    panelRadius: 14,
    /** Column width in 1024 row: (1024 − 32) / 2 */
    panelWidth: 496,
    /** Figma 1:916 image 9 — frame + fill crop (STRETCH) */
    singleImage: {
      x: 66,
      y: 57,
      width: 538,
      height: 351,
      /** 432 − 57 − 316 @ 0.9 scale */
      panelBottomGap: 59,
      scale: 0.9,
      intrinsicWidth: 1000,
      intrinsicHeight: 750,
      /** Figma fill_N09CZS cropTransform */
      crop: {
        x: 0.05875,
        y: 0.10854089260101318,
        width: 0.8725001811981201,
        height: 0.7589777112007141,
      },
    },
    /** Figma Group 1 — sparkles over panel images */
    panelSparkles: {
      single: { left: 14, top: 0, width: 426, height: 432 },
      collage: { left: 8, top: 21, width: 419, height: 413 },
    },
    imageRadius: 11,
    sectionPaddingY: 48,
    contentPaddingY: 64,
    /** Figma layout_EW3RB2 — Group 2 sparkles */
    sparkle: {
      width: 699.633056640625,
      height: 298.53125,
      opacity: 1,
      /** Top padding above sparkle band — gradient unchanged */
      paddingTop: 64,
    },
    bowlSceneHeight: 355,
    decorHeight: 355,
    arcHeight: 133,
    decorOverlap: 50,
    /** Glow cluster width — flat #1C1C1C outside this */
    decorBloomWidth: 699.633056640625,
    glow: {
      width: 491.58,
      height: 466.09,
      color: "#FFF9F9",
      opacity: 0.5,
      blur: 392.4999694824219,
      backdropBlur: 392.4999694824219,
    },
    /** Figma extra-glow + Vector 1:911 — top-center soft radial */
    bowlGlow: {
      width: 491.58,
      height: 466.09,
      offsetTop: -72,
      assetWidth: 1050,
      assetHeight: 360,
    },
    arcStroke: {
      width: 2,
      gradient: "linear-gradient(180deg, #A0A0A0 0%, rgba(80, 80, 80, 0) 25.05%)",
    },
    bowlBg: "#1C1C1C",
    curve: { width: 1022, height: 520, marginX: 11 },
  },
  featureTabs: {
    /** Figma layout_HL78UW — 1024 row in 1440 frame → 208px inset each side */
    contentWidth: 1024,
    pageInsetX: (1440 - 1024) / 2,
    headingGap: 36,
    rowGap: 32,
    listGap: 24,
    rowHeight: 350,
    listWidth: 460, // contentWidth − imageWidth − rowGap
    tabPaddingY: 20,
    tabPaddingX: 14,
    tabInnerGap: 8,
    /** 14/20 — full copy wraps to 2 lines in 492px tab (16px runs to 3 lines) */
    descType: { fontSize: 14, lineHeight: 20 },
    tabRadius: 6,
    imageWidth: 500,
    imageHeight: 350,
    imageRadius: 12,
  },
  cta: {
    sectionPaddingTop: 0,
    sectionPaddingBottom: 64,
    pageMarginX: 80,
    cardWidth: 1280,
    cardRadius: 24,
    cardPaddingY: 64,
    cardGap: 10,
    contentGap: 24,
    bodyMaxWidth: 820,
    /** One step down: 4XL heading, Base body (Figma was 5XL 48 + LG 18) */
    headingType: {
      fontSize: 36,
      lineHeight: 40,
      fontWeight: 600,
      letterSpacing: "0.005em",
      maxWidth: 640,
    },
    bodyType: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 500,
      letterSpacing: "0.005em",
    },
    /** One step below default md button (15px / 44px) */
    button: {
      fontSize: 14,
      lineHeight: 20,
      height: 40,
      paddingX: 20,
    },
    /** Figma effect_E6NX6N — softened for light shadow */
    boxShadow:
      "0 0 5px 6px rgba(80, 80, 80, 0.05), 0 4px 48px 0 rgba(80, 80, 80, 0.06)",
    curve: {
      marginX: 129,
      top: 51,
      width: 1022,
      height: 626,
      stroke: "#2E2E2E",
    },
    curveMobile: {
      marginX: 16,
      height: 360,
    },
  },
  testimonials: {
    paddingTop: 64,
    paddingBottom: 48,
    contentWidth: 1280,
    pageMarginX: 80,
    /** Figma fog-container 1:1076 */
    containerWidth: 1280,
    containerHeight: 573,
    gridHeight: 525,
    fogBottomHeight: 220,
    fogSideWidth: 48,
    fogSideWidthLeft: 20,
    /** 271px wide — scaled from Figma 320px */
    cardWidth: T_CARD_W,
    cardGap: T_CARD_GAP,
    layoutScale: T_LAYOUT_SCALE,
    /** Figma card padding 32px — scaled */
    cardPadding: Math.round(32 * T_LAYOUT_SCALE),
    /** Figma gap between header block and quote */
    cardContentGap: Math.round(8 * T_LAYOUT_SCALE),
    /** Figma gap between avatar and name */
    cardHeaderGap: Math.round(16 * T_LAYOUT_SCALE),
    /** Figma avatar 48px — scaled */
    avatarSize: Math.round(48 * T_LAYOUT_SCALE),
    cardRadius: 16,
    cardNameType: {
      fontSize: Math.round(18 * T_LAYOUT_SCALE * 10) / 10,
      lineHeight: Math.round(28 * T_LAYOUT_SCALE * 10) / 10,
      fontWeight: 700,
      letterSpacing: "0.005em",
    },
    cardQuoteType: {
      fontSize: Math.round(16 * T_LAYOUT_SCALE * 10) / 10,
      lineHeight: Math.round(24 * T_LAYOUT_SCALE * 10) / 10,
      fontWeight: 500,
      letterSpacing: "0.005em",
    },
    cards: buildTestimonialCardPositions(),
  },
  footer: {
    paddingY: 56,
    contentWidth: 1280,
    blockGap: 16,
    creditsGap: 12,
    topRowHeight: 24,
    socialGap: 12,
    linksWidth: 268,
    dividerPaddingY: 8,
  },
} as const;
