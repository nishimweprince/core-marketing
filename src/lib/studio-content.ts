export type StudioImage = {
  src: string;
  sourcePage: string;
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
    lede: "Give the car the attention it deserves.",
    body: "For premium hire and dealerships, we build a clear, composed presence that lets the marque—and the experience around it—lead.",
  },
  {
    id: "property",
    kicker: "Property",
    name: "Places worth choosing",
    image: {
      src: pexelsImage("39128396"),
      sourcePage:
        "https://www.pexels.com/photo/scenic-view-of-kigali-s-urban-landscape-39128396/",
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
    title: "A hotel people remember",
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
    title: "The marque, clearly framed",
    image: {
      src: pexelsImage("39386240"),
      sourcePage:
        "https://www.pexels.com/photo/rural-dirt-road-in-kigali-surrounded-by-walls-39386240/",
      alt: "A quiet red-earth road winding past brick walls and homes in Kigali.",
      objectPosition: "center",
    },
    body: "A focused content and channel system lets the vehicle lead, without crowding it with campaign noise.",
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
  { figure: "2018", caption: "Working with ambitious brands since." },
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

export const STUDIO_RETAINERS = [
  {
    id: "prima",
    latin: "Prima",
    means: "A clear beginning",
    term: "Three months",
    featured: false,
    for: "For brands establishing or sharpening their public presence.",
    includes: [
      "Positioning and narrative",
      "Channel strategy and a sustainable content cadence",
      "A monthly senior working session",
    ],
    typical: "A focused foundation for a launch, reset, or first serious marketing system.",
  },
  {
    id: "altera",
    latin: "Altera",
    means: "Build the evidence",
    term: "Six months",
    featured: false,
    for: "For brands with a direction that need consistent content and momentum.",
    includes: [
      "Everything in Prima",
      "Creative direction for film, stills, and language",
      "Two priority channels managed with intent",
    ],
    typical: "A sustained partnership for brands ready to turn their direction into visible proof.",
  },
  {
    id: "summa",
    latin: "Summa",
    means: "Full partnership",
    term: "Twelve months",
    featured: true,
    for: "For brands ready to hold a complete, always-on marketing system.",
    includes: [
      "Everything in Altera",
      "Campaign and paid-promotion strategy",
      "Launch and always-on planning",
    ],
    typical: "The complete Core partnership for brands building long-term recognition and growth.",
  },
] as const;

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
    a: "Strategy, digital presence, content, and promotion. One senior team holds all four, so your brand feels consistent wherever people meet it.",
  },
  {
    id: "retainers",
    q: "How do Prima, Altera, and Summa differ?",
    a: "Prima builds the strategic foundation. Altera adds ongoing content and channel direction. Summa is the full, always-on partnership, including promotion.",
  },
  {
    id: "fees",
    q: "How much does an engagement cost?",
    a: "Fees depend on the scope, team, and pace the work needs. We discuss them after the first conversation, once we understand what a strong result requires.",
  },
  {
    id: "term",
    q: "How long do you work with clients?",
    a: "Prima runs for three months, Altera for six, and Summa for twelve. Each term gives the work enough time to become clear, consistent, and useful.",
  },
  {
    id: "fit",
    q: "Who is a good fit?",
    a: "Premium hotels, villas, automotive brands, and properties that value considered work and a close senior relationship. We take on fewer partners so we can stay involved.",
  },
  {
    id: "where",
    q: "Where do you work?",
    a: "We are based in Kigali and work wherever the partnership is right. Meetings are by appointment, in person or online.",
  },
] as const;
