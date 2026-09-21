export type StudioImage = {
  src: string;
  sourcePage?: string;
  alt: string;
  objectPosition: string;
};

const pexelsImage = (id: string, width = 1400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

export const HERO_IMAGE: StudioImage = {
  src: pexelsImage("31466702", 1800),
  sourcePage: "https://www.pexels.com/photo/aerial-view-of-kigali-s-modern-skyline-31466702/",
  alt: "An aerial view over Kigali's modern skyline, rooftops and green ridges under a bright sky.",
  objectPosition: "center",
};

export type StudioVideo = {
  /** Default (720p) rendition. */
  src: string;
  /** Larger rendition, used on wide viewports and fast connections. */
  srcLarge: string;
  poster: StudioImage;
  sourcePage: string;
};

// Pexels Video, hotlinked from the Pexels CDN. Move the files to /public/video and point
// these at "/video/hero-720.mp4" if self-hosting is preferred later.
export const HERO_VIDEO: StudioVideo = {
  src: "https://videos.pexels.com/video-files/35145696/14888603_1280_720_24fps.mp4",
  srcLarge: "https://videos.pexels.com/video-files/35145696/14888604_1920_1080_24fps.mp4",
  poster: {
    src: "https://images.pexels.com/videos/35145696/4k-drone-abandoned-building-above-city-court-of-law-35145696.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage:
      "https://www.pexels.com/video/aerial-view-of-kigali-cityscape-at-twilight-35145696/",
    alt: "Kigali's city centre from the air at twilight, towers lit against the hills.",
    objectPosition: "center",
  },
  sourcePage: "https://www.pexels.com/video/aerial-view-of-kigali-cityscape-at-twilight-35145696/",
};

export const HERO = {
  kicker: "Kigali · Est. 2025",
  title: "Presence, made inevitable.",
  deck: "One senior team for hotels, motor, and real estate in Kigali.",
  cta: "Start a conversation",
} as const;

export type Partner = {
  id: string;
  name: string;
  /** Path or URL to a logo. Until one is set the carousel shows a placeholder slot. */
  logo?: string;
};

export const PARTNERS: Partner[] = [
  { id: "partner-1", name: "Partner one" },
  { id: "partner-2", name: "Partner two" },
  { id: "partner-3", name: "Partner three" },
  { id: "partner-4", name: "Partner four" },
  { id: "partner-5", name: "Partner five" },
  { id: "partner-6", name: "Partner six" },
  { id: "partner-7", name: "Partner seven" },
  { id: "partner-8", name: "Partner eight" },
  { id: "partner-9", name: "Partner nine" },
  { id: "partner-10", name: "Partner ten" },
];

export const WHAT_WE_DO = {
  title: "What we do",
  pull: "Guests, drivers, and buyers meet you on a screen long before they meet you in person.",
  paragraphs: [
    "We work with a small number of premium hospitality, motor, and real estate brands in Rwanda, and hold strategy, presence, content, and promotion as one senior team, so everything a person sees of you comes from the same hand.",
  ],
} as const;

export const STUDIO_INDUSTRIES = [
  {
    id: "hotels",
    name: "Hotels & villas",
    lede: "The stay begins with the first photograph.",
    image: {
      src: pexelsImage("37790193", 1800),
      sourcePage:
        "https://www.pexels.com/photo/luxury-outdoor-patio-at-modern-safari-lodge-37790193/",
      alt: "A lodge terrace at the end of the day: thatched roof, timber pergola, loungers in low light.",
      objectPosition: "center",
    },
    second: {
      src: pexelsImage("18328707", 1800),
      sourcePage:
        "https://www.pexels.com/photo/light-of-the-setting-sun-streaming-into-the-lobby-through-the-glass-double-doors-18328707/",
      alt: "Low sun through the glass doors of a hotel lobby, striping the floor and the timber screens.",
      objectPosition: "center",
      caption: "The lobby, an hour before check-in.",
    },
    paragraphs: [
      "A guest chooses on feeling, then justifies it with facts. We work on the feeling: how the property is described, photographed, and filmed, which channels carry it, and what happens between booking and arrival.",
    ],
    cares: [
      "Positioning and the language of the property",
      "Direction for film, stills, and social content",
      "Website, booking presence, and guest communication",
    ],
  },
  {
    id: "motor",
    name: "Motor",
    lede: "Let the vehicle, and the road around it, lead.",
    image: {
      src: pexelsImage("35870484", 1800),
      sourcePage: "https://www.pexels.com/photo/safari-vehicle-on-winding-forest-road-35870484/",
      alt: "A Rwandan-plated Land Cruiser with its roof raised, climbing a forest road in soft light.",
      objectPosition: "center",
    },
    second: {
      src: pexelsImage("39386240", 1800),
      sourcePage:
        "https://www.pexels.com/photo/rural-dirt-road-in-kigali-surrounded-by-walls-39386240/",
      alt: "A quiet red-earth road winding between brick walls and homes in Kigali.",
      objectPosition: "center",
      caption: "Kigali, off the tarmac.",
    },
    paragraphs: [
      "Tour operators, hire fleets, and dealerships sell a journey, not a spec sheet. We build a presence that gets out of the vehicle's way: composed imagery, clear offers, and channels that reach the traveller or buyer while they are still planning.",
    ],
    cares: [
      "Brand and offer clarity for fleets and dealerships",
      "Vehicle and journey photography and film",
      "Launch, seasonal, and always-on promotion",
    ],
  },
  {
    id: "property",
    name: "Real estate",
    lede: "Sell the life around the address.",
    image: {
      src: pexelsImage("31737860", 1800),
      sourcePage: "https://www.pexels.com/photo/modern-luxury-house-at-night-with-lights-31737860/",
      alt: "A modern stone-and-timber house at blue hour, warm light through the glass, a wet forecourt.",
      objectPosition: "center 55%",
    },
    second: {
      src: pexelsImage("34662920", 1800),
      sourcePage:
        "https://www.pexels.com/photo/cozy-armchair-and-lamp-in-warm-sunset-light-34662920/",
      alt: "A brass reading lamp over an armchair by a window, the city going soft in the dusk outside.",
      objectPosition: "center",
      caption: "What a buyer is actually buying.",
    },
    paragraphs: [
      "A development or a residence is bought on a picture of a life. We help developers, private offices, and distinctive properties say more than square metres and finishes: a point of view a buyer can see themselves inside, held from launch through every sales cycle.",
    ],
    cares: [
      "Narrative and naming for developments and residences",
      "Launch campaigns and sales collateral",
      "Long-run presence across listings, social, and press",
    ],
  },
] as const;

export type StudioIndustry = (typeof STUDIO_INDUSTRIES)[number];

export const STUDIO_ROOMS = [
  {
    id: "hotels",
    kicker: "Hospitality",
    name: "Hotels & villas",
    image: {
      src: pexelsImage("31464449"),
      sourcePage:
        "https://www.pexels.com/photo/scenic-view-of-kigali-city-rooftops-in-rwanda-31464449/",
      alt: "Sunlit Kigali rooftops and green ridges under a bright sky.",
      objectPosition: "center",
    },
    lede: "Make the experience begin before arrival.",
    body: "We bring positioning, content, and digital presence together so every touchpoint feels as considered as the stay.",
  },
  {
    id: "motor",
    kicker: "Automotive",
    name: "Motor",
    image: {
      src: pexelsImage("18029636"),
      sourcePage: "https://www.pexels.com/photo/tourist-bus-in-rwanda-18029636/",
      alt: "A white Tembera U Rwanda tour coach parked and ready for the road.",
      objectPosition: "center",
    },
    lede: "Give the journey the attention it deserves.",
    body: "For tour operators, premium hire, and dealerships, we build a clear, composed presence that lets the vehicle—and the experience around it—lead.",
  },
  {
    id: "property",
    kicker: "Property",
    name: "Places worth choosing",
    image: {
      src: pexelsImage("39128396"),
      sourcePage: "https://www.pexels.com/photo/scenic-view-of-kigali-s-urban-landscape-39128396/",
      alt: "Kigali homes and rooftops among greenery, glowing in warm evening light.",
      objectPosition: "center",
    },
    lede: "Sell the life around the address.",
    body: "We help developers, private offices, and distinctive properties communicate more than features: a point of view people can picture themselves in.",
  },
] as const;

export const STUDIO_WORK = [
  {
    id: "hospitality",
    room: "Hospitality",
    title: "Somewhere worth remembering",
    image: {
      src: pexelsImage("36470601"),
      sourcePage:
        "https://www.pexels.com/photo/aerial-view-of-kigali-city-landscape-rwanda-36470601/",
      alt: "A wide green valley of Kigali rooftops beneath soft daylight.",
      objectPosition: "center",
    },
    body: "We shape one recognizable story from first discovery to post-stay follow-up, so the experience feels consistent at every step.",
  },
  {
    id: "motor",
    room: "Motor",
    title: "Built for the road ahead",
    image: {
      src: pexelsImage("39386240"),
      sourcePage:
        "https://www.pexels.com/photo/rural-dirt-road-in-kigali-surrounded-by-walls-39386240/",
      alt: "A quiet red-earth road winding past brick walls and homes in Kigali.",
      objectPosition: "center",
    },
    body: "A focused content and channel system keeps the journey moving, without crowding the road with campaign noise.",
  },
  {
    id: "property",
    room: "Property",
    title: "More than a listing",
    image: {
      src: pexelsImage("39128405"),
      sourcePage:
        "https://www.pexels.com/photo/aerial-view-of-urban-rooftops-with-hilly-backdrop-39128405/",
      alt: "Dense Kigali rooftops rising toward tree-lined hills.",
      objectPosition: "center",
    },
    body: "We build a lasting narrative around the address—one that can hold attention across launches, seasons, and sales cycles.",
  },
] as const;

export const HOUSE_IMAGE: StudioImage = {
  src: pexelsImage("31466706"),
  sourcePage: "https://www.pexels.com/photo/aerial-view-of-kigali-city-in-daylight-31466706/",
  alt: "Home ground: a tree-lined Kigali boulevard in full daylight.",
  objectPosition: "center",
};

export const STUDIO_MEASURES = [
  { figure: "2025", caption: "Working with ambitious brands since." },
  { figure: "Kigali", caption: "Based here. Working wherever the fit is right." },
  { figure: "IV", caption: "Four disciplines, led as one." },
  { figure: "One", caption: "Senior team, from first conversation to final detail." },
] as const;

export const STUDIO_INSIGHT = {
  kicker: "How people choose",
  title: "The decision starts long before the visit.",
  body: "Guests, drivers, and buyers meet your brand on a screen before they meet it in person. We make every message, image, and channel feel considered—so choosing you feels natural.",
  pull: "Be the name they already trust.",
  note: "Clear strategy turns attention into confidence.",
} as const;

export const STUDIO_PRACTICES = [
  {
    name: "Strategy",
    subtitle: "Find the clearest position",
    body: "We define the audience, point of view, and narrative that guide every decision that follows.",
    holds: ["Positioning", "Narrative", "A useful creative brief"],
  },
  {
    name: "Presence",
    subtitle: "Show up with purpose",
    body: "We give every channel a clear role and build a cadence your team can sustain.",
    holds: ["Channel roles", "Content cadence", "A consistent digital presence"],
  },
  {
    name: "Content",
    subtitle: "Create proof people can feel",
    body: "We direct film, stills, and language as one system, so every piece feels unmistakably yours.",
    holds: ["Creative direction", "Film and stills", "Brand language"],
  },
  {
    name: "Promotion",
    subtitle: "Reach the right people",
    body: "We launch and grow strong work with considered paid support, once the foundation is ready.",
    holds: ["Launch planning", "Always-on growth", "Paid promotion"],
  },
] as const;

export const PLANS = {
  title: "Plans",
  intro:
    "Three plans, named for the volcanoes on our northern horizon. Fees are discussed after the first conversation, once we understand the work.",
} as const;

export const STUDIO_PLANS = [
  {
    id: "sabyinyo",
    name: "Sabyinyo",
    altitude: 3669,
    image: {
      src: pexelsImage("33439499", 1800),
      sourcePage: "https://www.pexels.com/photo/scenic-view-of-mount-bisoke-in-rwanda-33439499/",
      alt: "A jagged volcanic crown in the Virunga range above a concrete track through green scrub.",
      objectPosition: "center 40%",
    },
    means: "A clear beginning",
    featured: false,
    for: "For brands establishing or sharpening their public presence.",
    includes: [
      "Social media management",
      "Content creation (four videos)",
      "Four graphics or carousels",
      "Social media marketing (Meta and TikTok)",
    ],
    typical: "A focused foundation for a launch, reset, or first serious marketing system.",
    suitedFor: [
      {
        business: "Boutique hotels",
        why: "A steady social presence between seasons, without hiring a team in-house.",
      },
      {
        business: "Private villas",
        why: "Four videos and a month of graphics that keep the house visible while you host.",
      },
      {
        business: "Tour & hire operators",
        why: "Vehicles on the feed every week, with offers that read clearly at a glance.",
      },
      {
        business: "Real estate listings",
        why: "New listings introduced properly, then kept warm until the right buyer appears.",
      },
    ],
  },
  {
    id: "muhabura",
    name: "Muhabura",
    altitude: 4127,
    image: {
      src: pexelsImage("19755751", 1800),
      sourcePage:
        "https://www.pexels.com/photo/landscape-with-a-mountain-lake-and-clouds-19755751/",
      alt: "A volcano's cone under cloud, seen across the still water and green headlands of Lake Burera.",
      objectPosition: "center 35%",
    },
    means: "Build the evidence",
    featured: false,
    for: "For brands with a direction that need consistent content and momentum.",
    includes: [
      "Everything in Sabyinyo",
      "Content creation (eight videos)",
      "Google Business Profile (setup & optimization)",
      "Ad campaigns (Google, Meta, TikTok, and more)",
    ],
    typical: "A sustained partnership for brands ready to turn their direction into visible proof.",
    suitedFor: [
      {
        business: "Established hotels",
        why: "Double the content plus campaigns that fill the shoulder seasons.",
      },
      {
        business: "Motor dealerships",
        why: "Showroom stories plus the Google presence buyers check before visiting.",
      },
      {
        business: "Real estate developments",
        why: "A launch rhythm across Google, Meta, and TikTok that compounds over months.",
      },
      {
        business: "Villa collections",
        why: "Several houses, one voice, and campaigns that keep occupancy steady.",
      },
    ],
  },
  {
    id: "karisimbi",
    name: "Karisimbi",
    altitude: 4507,
    image: {
      src: pexelsImage("34784514", 1800),
      sourcePage:
        "https://www.pexels.com/photo/beautiful-landscape-with-tree-and-mount-karisimbi-in-rwanda-34784514/",
      alt: "A lone tree over terraced fields, a volcano rising into cloud behind it.",
      objectPosition: "center 45%",
    },
    means: "Full partnership",
    featured: true,
    for: "For brands ready to hold a complete, always-on marketing system.",
    includes: [
      "Everything in Muhabura",
      "Web development & design",
      "SEO & answer engine optimization (AEO)",
      "Custom application development",
    ],
    typical: "The complete Core partnership for brands building long-term recognition and growth.",
    suitedFor: [
      {
        business: "Hotel groups",
        why: "A website, search presence, and campaigns for the whole collection, held as one.",
      },
      {
        business: "Regional motor brands",
        why: "Web, SEO, and always-on demand across several markets at once.",
      },
      {
        business: "Major developments",
        why: "From the address narrative to the website to a custom sales tool.",
      },
      {
        business: "Real estate portfolios",
        why: "Every listing discoverable by search and by answer engines, for years.",
      },
    ],
  },
] as const;

export type StudioPlan = (typeof STUDIO_PLANS)[number];

export const PLANS_BAND_IMAGE: StudioImage = {
  src: pexelsImage("33596470", 1800),
  sourcePage:
    "https://www.pexels.com/photo/sacks-of-potatoes-in-kinigi-with-mountain-view-33596470/",
  alt: "Sacks of potatoes stacked in a Kinigi field, the Virunga ridge dark against the evening cloud.",
  objectPosition: "center 60%",
};

export const CONTACT = {
  title: "Start a conversation",
  paragraphs: [
    "Tell us about the brand and what a strong result would look like a year from now. We reply to every note with a clear next step, and we say so if Core is not the right fit.",
  ],
} as const;

export const STUDIO_STEPS = [
  {
    roman: "I",
    name: "Conversation",
    body: "We start with a focused conversation about your goals, timing, and fit. You leave knowing the next step.",
  },
  {
    roman: "II",
    name: "Direction",
    body: "We clarify your position and build the narrative that will guide the work.",
  },
  {
    roman: "III",
    name: "Plan",
    body: "We choose the right channels, roles, and cadence, then shape a plan your team can keep.",
  },
  {
    roman: "IV",
    name: "Make and grow",
    body: "We create the film, stills, and language, then promote the work when the foundation is strong.",
  },
] as const;

export const STUDIO_TRAITS = [
  { name: "Composed", body: "We keep the work calm, even when the schedule is not." },
  {
    name: "Exact",
    body: "We pay attention to the words, crops, timing, and details people notice.",
  },
  {
    name: "Discerning",
    body: "We take on fewer partners so each engagement gets senior attention.",
  },
  {
    name: "Human at close range",
    body: "The public work is refined. The working relationship is direct, warm, and honest.",
  },
] as const;

export const STUDIO_QUESTIONS = [
  {
    id: "holds",
    q: "What can Core help us with?",
    a: "Strategy, digital presence, content, and promotion, held by one senior team so your brand reads the same wherever people meet it.",
  },
  {
    id: "retainers",
    q: "How do Sabyinyo, Muhabura, and Karisimbi differ?",
    a: "Sabyinyo covers social management, four videos, graphics, and Meta and TikTok promotion. Muhabura doubles the content and adds Google presence and wider campaigns. Karisimbi adds web, SEO and answer engine optimization, and custom application development.",
  },
  {
    id: "fees",
    q: "How much does an engagement cost?",
    a: "Fees depend on scope, team, and pace. We discuss them after the first conversation, once we understand what a strong result requires.",
  },
  {
    id: "where",
    q: "Where do you work?",
    a: "We are based in Kigali and work wherever the partnership is right. Meetings are by appointment, in person or online.",
  },
] as const;
