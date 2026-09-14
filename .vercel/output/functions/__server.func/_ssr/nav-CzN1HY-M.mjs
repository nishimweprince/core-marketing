import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nav-CzN1HY-M.js
var import_jsx_runtime = require_jsx_runtime();
var BRAND = {
	name: "Core Marketing",
	short: "CORE",
	discipline: "MARKETING",
	tagline: "The architecture of attention.",
	year: "2018",
	origin: "Kigali",
	email: "studio@core.marketing",
	web: "core.marketing",
	bookTitle: "The Brand Book",
	edition: "Volume 01"
};
var COLORS = [
	{
		name: "Ink",
		hex: "#0C0B0A",
		rgb: "12  11  10",
		cmyk: "70  65  65  90",
		token: "ink",
		role: "The field. Primary type on light. The outer ring on paper.",
		swatch: "bg-ink text-vellum",
		invertChip: true,
		tall: true
	},
	{
		name: "Night",
		hex: "#161513",
		rgb: "22  21  19",
		cmyk: "65  60  60  80",
		token: "night",
		role: "Elevated surface. Cards, rails, and quiet panels on ink.",
		swatch: "bg-night text-vellum",
		invertChip: true,
		tall: false
	},
	{
		name: "Ash",
		hex: "#6F6B64",
		rgb: "111  107  100",
		cmyk: "45  40  45  20",
		token: "ash",
		role: "Secondary text, captions, construction notes.",
		swatch: "bg-ash text-vellum",
		invertChip: true,
		tall: false
	},
	{
		name: "Limestone",
		hex: "#B7AFA3",
		rgb: "183  175  163",
		cmyk: "28  25  32  0",
		token: "limestone",
		role: "Stone. The inner ring. Hairlines, labels, reverse type on dark.",
		swatch: "bg-limestone text-ink",
		invertChip: false,
		tall: false
	},
	{
		name: "Juniper",
		hex: "#2F7A4E",
		rgb: "47  122  78",
		cmyk: "75  15  75  20",
		token: "juniper",
		role: "The nucleus. The only colour in the mark. Used there, and almost nowhere else.",
		swatch: "bg-juniper text-vellum",
		invertChip: true,
		tall: false
	},
	{
		name: "Vellum",
		hex: "#F3EFE8",
		rgb: "243  239  232",
		cmyk: "4  4  8  0",
		token: "vellum",
		role: "Paper. Primary type on dark. The light field.",
		swatch: "bg-vellum text-ink",
		invertChip: false,
		tall: false
	}
];
var SECTIONS = [
	{
		id: "cover",
		num: "00",
		label: "Cover"
	},
	{
		id: "house",
		num: "01",
		label: "The House"
	},
	{
		id: "position",
		num: "02",
		label: "Position"
	},
	{
		id: "mark",
		num: "03",
		label: "The Mark"
	},
	{
		id: "colour",
		num: "04",
		label: "Colour"
	},
	{
		id: "type",
		num: "05",
		label: "Type"
	},
	{
		id: "voice",
		num: "06",
		label: "Voice"
	},
	{
		id: "image",
		num: "07",
		label: "Image"
	},
	{
		id: "applications",
		num: "08",
		label: "Applications"
	},
	{
		id: "system",
		num: "09",
		label: "System"
	}
];
var PRACTICES = [
	{
		roman: "I",
		name: "Strategy",
		subtitle: "The argument",
		body: "Positioning, narrative, and the decisions that make every other decision cheaper. We write the brief we would want to receive.",
		holds: [
			"The position",
			"The narrative",
			"The brief"
		]
	},
	{
		roman: "II",
		name: "Presence",
		subtitle: "The channels",
		body: "Social architecture, platform roles, and a cadence a brand can actually keep. Not more posts. The right ones, on purpose.",
		holds: [
			"The channels",
			"The cadence",
			"The room on each platform"
		]
	},
	{
		roman: "III",
		name: "Content",
		subtitle: "The evidence",
		body: "Film, stills, and language directed as one system. If it would not survive a quiet room, it does not ship.",
		holds: [
			"Film",
			"Stills",
			"Language"
		]
	},
	{
		roman: "IV",
		name: "Promotion",
		subtitle: "The amplification",
		body: "Paid, launched, and always-on growth built on the strategy — never instead of it. Attention, rented only after it has been earned.",
		holds: [
			"Launch",
			"Always-on",
			"Paid, after it is earned"
		]
	}
];
var TRAITS = [
	{
		name: "Composed",
		body: "We do not rush the room. Urgency is designed; panic is not a process."
	},
	{
		name: "Exact",
		body: "Words, crops, and timings are considered. Approximation is expensive."
	},
	{
		name: "Discerning",
		body: "We take fewer partners so the work can go further. Fit is a discipline."
	},
	{
		name: "Warm at close range",
		body: "The public face is restrained. The working relationship is human, direct, and loyal."
	}
];
var VOICE_RULES = [
	{
		do: "Write as if the reader is intelligent and short on time.",
		dont: "Explain the joke, or pad a sentence to sound bigger."
	},
	{
		do: "Prefer nouns that last over adjectives that shout.",
		dont: "Use ‘bold’, ‘disruptive’, ‘crushing it’, or any word that expired in a pitch deck."
	},
	{
		do: "Describe the work. Let the work sell.",
		dont: "Announce how excited we are. Excitement is a private feeling."
	},
	{
		do: "One idea per sentence. Periods earn their keep.",
		dont: "Stack clauses with emojis, exclamation marks, or hashtags in brand voice."
	}
];
var VOICE_SAMPLES = [
	{
		label: "Launch",
		wrong: "We’re SO excited to finally drop this MEGA launch!! 🚀",
		right: "A new chapter. Introduced quietly, built to last."
	},
	{
		label: "Service",
		wrong: "We’re a full-service agency that does it all for amazing brands!",
		right: "Strategy, presence, content, and promotion — held as one system."
	},
	{
		label: "Result",
		wrong: "We 10x’d their engagement in 30 days, no big deal.",
		right: "The work found the people it was made for. The numbers followed."
	}
];
var IMAGE_RULES = [
	{
		title: "Light is a material",
		body: "Prefer one directional source. Let shadow do half the composition. Avoid even, commercial fill."
	},
	{
		title: "Rooms, not sets",
		body: "Architecture, paper, stone, cloth. Spaces that exist. No stock handshakes, no confetti, no laptops on beaches."
	},
	{
		title: "People, at a distance",
		body: "When figures appear, they are occupied — never posing for the brand. Faces are not the product."
	},
	{
		title: "Quiet colour",
		body: "Photograph toward Ink, Vellum, and Limestone. Remove stray primaries in grade. No teal-and-orange."
	}
];
var TYPE_ROLES = [
	{
		role: "Display",
		family: "Cormorant Garamond Light",
		size: "72–144px",
		tracking: "−0.03em",
		leading: "0.9",
		sample: "Core"
	},
	{
		role: "Headline",
		family: "Cormorant Garamond Regular",
		size: "36–56px",
		tracking: "−0.02em",
		leading: "1.1",
		sample: "The architecture of attention."
	},
	{
		role: "Deck",
		family: "Manrope Regular",
		size: "16–18px",
		tracking: "0",
		leading: "1.55",
		sample: "A house of strategy, presence, and content for brands that already know they are not average."
	},
	{
		role: "Wordmark",
		family: "Manrope Semibold / Regular",
		size: "CORE 1em · MARKETING 0.72em",
		tracking: "0.18em / 0.32em",
		leading: "1",
		sample: "CORE"
	},
	{
		role: "Label",
		family: "Manrope Medium",
		size: "10–11px",
		tracking: "0.32em",
		leading: "1.2",
		sample: "THE BRAND BOOK"
	}
];
var MISUSE = [
	"Do not stretch, rotate, or skew the mark.",
	"Do not add fills, glows, drop shadows, or extra rings.",
	"Do not recolour the juniper nucleus except in single-colour reproduction.",
	"Do not place the mark on busy photography without a field.",
	"Do not offset, replace, or hollow the core.",
	"Do not rearrange the lockup or change the tracking of CORE."
];
var DOWNLOADS = [
	{
		group: "The book",
		items: [{
			href: "/brand/kit/05-brand-book/Core-Marketing-Brand-Book.pdf",
			label: "Brand Book — PDF, 16 pages, A4",
			file: "Core-Marketing-Brand-Book.pdf"
		}]
	},
	{
		group: "Logo only",
		items: [
			{
				href: "/brand/kit/01-logo-only/Core-Mark-On-Ink.svg",
				label: "Mark — SVG on ink",
				file: "Core-Mark-On-Ink.svg"
			},
			{
				href: "/brand/kit/01-logo-only/Core-Mark-On-Vellum.svg",
				label: "Mark — SVG on vellum",
				file: "Core-Mark-On-Vellum.svg"
			},
			{
				href: "/brand/kit/01-logo-only/Core-Mark-Mono.svg",
				label: "Mark — SVG mono",
				file: "Core-Mark-Mono.svg"
			},
			{
				href: "/brand/kit/01-logo-only/Core-Mark-On-Ink.png",
				label: "Mark — PNG on ink",
				file: "Core-Mark-On-Ink.png"
			},
			{
				href: "/brand/kit/01-logo-only/Core-Mark-On-Vellum.png",
				label: "Mark — PNG on vellum",
				file: "Core-Mark-On-Vellum.png"
			}
		]
	},
	{
		group: "Logo with words",
		items: [
			{
				href: "/brand/kit/02-logo-with-words/Core-Lockup-On-Ink.svg",
				label: "Lockup — SVG on ink",
				file: "Core-Lockup-On-Ink.svg"
			},
			{
				href: "/brand/kit/02-logo-with-words/Core-Lockup-On-Vellum.svg",
				label: "Lockup — SVG on vellum",
				file: "Core-Lockup-On-Vellum.svg"
			},
			{
				href: "/brand/kit/02-logo-with-words/Core-Lockup-On-Ink-Transparent.svg",
				label: "Lockup — SVG transparent",
				file: "Core-Lockup-On-Ink-Transparent.svg"
			},
			{
				href: "/brand/kit/02-logo-with-words/Core-Lockup-On-Ink.png",
				label: "Lockup — PNG on ink",
				file: "Core-Lockup-On-Ink.png"
			},
			{
				href: "/brand/kit/02-logo-with-words/Core-Lockup-On-Vellum.png",
				label: "Lockup — PNG on vellum",
				file: "Core-Lockup-On-Vellum.png"
			}
		]
	},
	{
		group: "Business cards",
		items: [
			{
				href: "/brand/kit/03-business-cards/Core-Business-Card-Front.svg",
				label: "Card front — SVG editable",
				file: "Core-Business-Card-Front.svg"
			},
			{
				href: "/brand/kit/03-business-cards/Core-Business-Card-Back.svg",
				label: "Card back — SVG editable",
				file: "Core-Business-Card-Back.svg"
			},
			{
				href: "/brand/kit/03-business-cards/Core-Business-Card-Front.pdf",
				label: "Card front — PDF print",
				file: "Core-Business-Card-Front.pdf"
			},
			{
				href: "/brand/kit/03-business-cards/Core-Business-Card-Back.pdf",
				label: "Card back — PDF print",
				file: "Core-Business-Card-Back.pdf"
			}
		]
	},
	{
		group: "Stationery",
		items: [{
			href: "/brand/kit/04-stationery/Core-Letterhead-A4.svg",
			label: "Letterhead A4 — SVG",
			file: "Core-Letterhead-A4.svg"
		}, {
			href: "/brand/kit/04-stationery/Core-Envelope-DL.svg",
			label: "Envelope DL — SVG",
			file: "Core-Envelope-DL.svg"
		}]
	}
];
var KIT_ZIP = {
	href: "/brand/Core-Marketing-Brand-Kit.zip",
	label: "Download everything — ZIP",
	file: "Core-Marketing-Brand-Kit.zip"
};
var SITE_NAV = [
	{
		id: "rooms",
		label: "Rooms"
	},
	{
		id: "work",
		label: "Work"
	},
	{
		id: "retainers",
		label: "Retainers"
	},
	{
		id: "house",
		label: "The house"
	}
];
var ROOMS = [
	{
		id: "hotels",
		kicker: "Hospitality",
		name: "Hotels & villas",
		image: "/brand/villa.jpg",
		alt: "A private villa terrace at dusk — limestone, linen, one lamp.",
		lede: "A house that is already expensive should not sound like it is asking.",
		body: "Five-star hotels and private villas. We hold the argument, the channels, and the evidence so the house feels inevitable — before the guest arrives, and after they leave. Not more posts. A presence that matches the key."
	},
	{
		id: "motor",
		kicker: "Hire and houses",
		name: "Motor",
		image: "/brand/motor.jpg",
		alt: "A dark car in a limestone courtyard at dusk, one shaft of warm light.",
		lede: "A vehicle is not a thumbnail.",
		body: "Expensive hire, and dealerships that already know they are not a lot. Presence built like the courtyard at dusk: one car, one light, no noise. The marque is described. It is never shouted."
	},
	{
		id: "property",
		kicker: "Land and addresses",
		name: "Property",
		image: "/brand/property.jpg",
		alt: "A stone and glass residence at blue hour, one warm window in a dark garden.",
		lede: "Listings expire. A house of record does not.",
		body: "Developers, private offices, and addresses bought as a life rather than a listing. We treat a property the way we treat a hotel: as a place with a voice, held across seasons."
	}
];
var RETAINERS = [
	{
		id: "prima",
		latin: "Prima",
		means: "The first",
		roman: "I",
		term: "Three months",
		featured: false,
		for: "A house establishing, or correcting, its public face.",
		includes: [
			"Strategy — the argument written as we would want to receive it",
			"Presence — channel architecture and a cadence that can be kept",
			"A monthly senior room"
		],
		typical: "A villa opening a season. A dealership’s first year of seriousness. A property house entering a market."
	},
	{
		id: "altera",
		latin: "Altera",
		means: "The second",
		roman: "II",
		term: "Six months",
		featured: false,
		for: "A house that already has a voice and needs evidence.",
		includes: [
			"Everything in Prima",
			"Content — film, stills, and language directed as one system",
			"Two platforms held with intent"
		],
		typical: "A hotel that already knows its guests. A marque that needs more than posts."
	},
	{
		id: "summa",
		latin: "Summa",
		means: "The highest",
		roman: "III",
		term: "Twelve months",
		featured: true,
		for: "The full architecture. Retained. Always-on.",
		includes: [
			"Everything in Altera",
			"Promotion — paid only after it has been earned",
			"Launch and always-on, a room that does not drop"
		],
		typical: "A hotel of record. A motor house with more than one address. A developer who intends to last."
	}
];
var STEPS = [
	{
		roman: "I",
		name: "Conversation",
		body: "We begin by speaking. Fit is a discipline. We take the work that can be done properly, and we decline the rest."
	},
	{
		roman: "II",
		name: "The argument",
		body: "Positioning and narrative first. The brief we would want to receive — so every later decision is cheaper."
	},
	{
		roman: "III",
		name: "The rooms",
		body: "Channels and cadence. Not more surface. The right ones, on purpose, kept."
	},
	{
		roman: "IV",
		name: "The evidence",
		body: "Film, stills, and language. If it would not survive a quiet room, it does not ship. Promotion, when the retainer is Summa, follows."
	}
];
var MEASURES = [
	{
		figure: "2018",
		caption: "The house opened."
	},
	{
		figure: "Kigali",
		caption: "The city. Work travels."
	},
	{
		figure: "IV",
		caption: "Practices, never sold apart."
	},
	{
		figure: "One",
		caption: "Architecture. Not a menu of trades."
	}
];
var INSIGHT = {
	kicker: "The landscape",
	title: "Discovery has left the directory.",
	body: "A guest, a driver, a buyer — they decide in a quiet room of the phone. A still that survives a second look. A name spoken once. Ranking is not presence. Presence is whether the house is already chosen when the search begins.",
	pull: "The room is decided before the door."
};
var WORK = [
	{
		roman: "01",
		room: "Hospitality",
		title: "A hotel of record",
		image: "/brand/reception.jpg",
		alt: "A hotel lobby at dusk — walnut, limestone, one lamp, an empty chair.",
		body: "A house that is already expensive should not sound like it is asking. Presence held before arrival, and after departure."
	},
	{
		roman: "02",
		room: "Motor",
		title: "One car. One light.",
		image: "/brand/motor.jpg",
		alt: "A dark car in a limestone courtyard at dusk, one shaft of warm light.",
		body: "Hire and houses of the marque. The courtyard at dusk: described, never shouted."
	},
	{
		roman: "03",
		room: "Property",
		title: "An address, not a listing",
		image: "/brand/property.jpg",
		alt: "A stone and glass residence at blue hour, one warm window in a dark garden.",
		body: "Developers and private offices. A place with a voice, held across seasons."
	}
];
var QUESTIONS = [
	{
		num: "01",
		id: "holds",
		q: "What does the house hold?",
		a: "Strategy, presence, content, and promotion — as one architecture. We do not sell them apart. A brand that is loud in one place and absent in another is not a brand. It is noise."
	},
	{
		num: "02",
		id: "retainers",
		q: "What are Prima, Altera, and Summa?",
		a: "Latin. The first, the second, the highest. Three retainers, not packages on a menu. Prima writes the argument and the channels. Altera adds the evidence. Summa is the full architecture — retained, always-on."
	},
	{
		num: "03",
		id: "fees",
		q: "Why is there no rate card?",
		a: "Fees are discussed in conversation. A published menu invites the wrong comparison. Houses that already sell at a premium do not buy marketing by the post."
	},
	{
		num: "04",
		id: "term",
		q: "How long is an engagement?",
		a: "Prima is three months. Altera, six. Summa, twelve. We do not take work that cannot be held for the term. Campaigns expire. A room should not."
	},
	{
		num: "05",
		id: "anyone",
		q: "Will you take anyone?",
		a: "No. Fit is a discipline. We take fewer partners so the work can go further. Hotels, villas, motor, and property of record. We decline the rest."
	},
	{
		num: "06",
		id: "where",
		q: "Where is the house?",
		a: "Kigali. Working wherever the work is serious. Correspondence is by appointment — studio@core.marketing."
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function CoreMark({ className, title = "Core Marketing", field = "ink" }) {
	const outer = field === "ink" ? "stroke-vellum" : field === "vellum" ? "stroke-ink" : "stroke-current";
	const inner = field === "mono" ? "stroke-current" : "stroke-limestone";
	const core = field === "mono" ? "fill-current" : "fill-juniper";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 80",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: cn("block", className),
		role: "img",
		"aria-label": title,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "31.5",
				className: outer,
				strokeWidth: "1.2",
				vectorEffect: "nonScalingStroke"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "18.5",
				className: inner,
				strokeWidth: "1.2",
				vectorEffect: "nonScalingStroke"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "6",
				className: core
			})
		]
	});
}
function CoreMarkConstruct({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 80",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: cn("block", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "40",
				y1: "4",
				x2: "40",
				y2: "76",
				stroke: "currentColor",
				strokeWidth: "0.4",
				opacity: "0.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "4",
				y1: "40",
				x2: "76",
				y2: "40",
				stroke: "currentColor",
				strokeWidth: "0.4",
				opacity: "0.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "31.5",
				stroke: "currentColor",
				strokeWidth: "0.5",
				strokeDasharray: "1.4 2",
				opacity: "0.3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "18.5",
				stroke: "currentColor",
				strokeWidth: "0.5",
				strokeDasharray: "1.4 2",
				opacity: "0.3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "31.5",
				className: "stroke-ink",
				strokeWidth: "1.2",
				vectorEffect: "nonScalingStroke"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "18.5",
				className: "stroke-limestone",
				strokeWidth: "1.2",
				vectorEffect: "nonScalingStroke"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "6",
				className: "fill-juniper"
			})
		]
	});
}
var LOCKUP = {
	sm: {
		mark: "size-8",
		type: "text-sm"
	},
	md: {
		mark: "size-10",
		type: "text-lg"
	},
	lg: {
		mark: "size-12",
		type: "text-xl"
	},
	hero: {
		mark: "size-12 md:size-14",
		type: "text-xl md:text-2xl"
	}
};
function CoreLockup({ className, stacked = false, size = "md", field = "ink" }) {
	const s = LOCKUP[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex", stacked ? "flex-col items-start gap-3" : "flex-row items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreMark, {
			className: cn("shrink-0", s.mark),
			field
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("leading-none", s.type),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-sans font-semibold leading-[0.8] uppercase tracking-brand",
				children: "Core"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-[0.1em] font-sans text-[0.72em] font-normal uppercase tracking-label text-limestone",
				children: "Marketing"
			})]
		})]
	});
}
function CoreWordmark({ className, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("leading-none", compact ? "text-sm" : "text-lg", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-sans font-semibold leading-[0.8] uppercase tracking-brand",
			children: "Core"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-[0.1em] font-sans text-[0.72em] font-normal uppercase tracking-label text-limestone",
			children: "Marketing"
		})]
	});
}
function ProgressBar({ value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed top-0 right-0 left-0 z-50 h-px bg-transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full origin-left bg-limestone",
			style: { transform: `scaleX(${Math.min(Math.max(value, 0), 1)})` }
		})
	});
}
function SideRail({ active, onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "fixed top-0 left-0 z-40 hidden h-dvh w-52 flex-col border-r border-vellum/8 bg-ink px-6 py-8 lg:flex",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onJump("cover"),
				className: "text-left text-vellum transition-[opacity] duration-150 hover:opacity-80",
				"aria-label": "Core Marketing, back to cover",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "sm" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mt-12 flex flex-1 flex-col gap-1",
				"aria-label": "Brand book",
				children: SECTIONS.map((s) => {
					const on = active === s.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onJump(s.id),
						className: cn("flex min-h-10 items-center gap-3 rounded-sm px-1 text-left transition-[color] duration-150", on ? "text-vellum" : "text-ash hover:text-limestone"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-[10px] tabular-nums tracking-wide",
							children: s.num
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-xs",
							children: s.label
						})]
					}, s.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-sans text-[10px] leading-relaxed text-ash",
				children: [
					"Brand Book",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Volume 01"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-4 font-sans text-[10px] tracking-label text-limestone uppercase transition-[color] duration-150 hover:text-vellum",
				children: "The house"
			})
		]
	});
}
function MobileBar({ open, onToggle, onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed top-0 right-0 left-0 z-40 flex h-14 items-center justify-between border-b border-vellum/8 bg-ink/95 px-4 lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onJump("cover"),
			className: "flex items-center gap-2.5 text-vellum",
			"aria-label": "Core Marketing, back to cover",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "sm" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onToggle,
			className: "flex size-11 items-center justify-center text-vellum",
			"aria-expanded": open,
			"aria-label": open ? "Close index" : "Open index",
			children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
		})]
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-30 overflow-y-auto bg-ink px-6 pt-20 pb-12 lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "label text-limestone",
			children: "Index"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mt-8 flex flex-col",
			"aria-label": "Brand book",
			children: [SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onJump(s.id),
				className: "flex min-h-14 items-baseline justify-between border-b border-vellum/8 text-left text-vellum",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl font-light tracking-display",
					children: s.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-sans text-xs tabular-nums text-ash",
					children: s.num
				})]
			}, s.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 flex min-h-14 items-center font-display text-2xl font-light tracking-display text-limestone",
				children: "The house"
			})]
		})]
	}) : null] });
}
//#endregion
export { TRAITS as C, WORK as D, VOICE_SAMPLES as E, cn as O, SideRail as S, VOICE_RULES as T, RETAINERS as _, CoreMarkConstruct as a, SITE_NAV as b, IMAGE_RULES as c, MEASURES as d, MISUSE as f, QUESTIONS as g, ProgressBar as h, CoreMark as i, INSIGHT as l, PRACTICES as m, COLORS as n, CoreWordmark as o, MobileBar as p, CoreLockup as r, DOWNLOADS as s, BRAND as t, KIT_ZIP as u, ROOMS as v, TYPE_ROLES as w, STEPS as x, SECTIONS as y };
