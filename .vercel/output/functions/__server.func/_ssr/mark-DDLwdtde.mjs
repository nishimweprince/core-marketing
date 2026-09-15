import { z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mark-DDLwdtde.js
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
		body: "Social architecture, platform roles, and a cadence a brand can keep. Fewer posts, placed on purpose.",
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
		body: "Paid, launched, and always-on growth built on the strategy, never instead of it. Attention, rented only after it has been earned.",
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
		body: "We hold the room steady. Urgency is designed; panic stays outside."
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
		right: "Strategy, presence, content, and promotion, held as one system."
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
		body: "When figures appear, they are occupied, never posing for the brand. Faces are not the product."
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
			label: "Brand Book: PDF, 16 pages, A4",
			file: "Core-Marketing-Brand-Book.pdf"
		}]
	},
	{
		group: "Logo only",
		items: [
			{
				href: "/brand/kit/01-logo-only/Core-Mark-On-Ink.svg",
				label: "Mark: SVG on ink",
				file: "Core-Mark-On-Ink.svg"
			},
			{
				href: "/brand/kit/01-logo-only/Core-Mark-On-Vellum.svg",
				label: "Mark: SVG on vellum",
				file: "Core-Mark-On-Vellum.svg"
			},
			{
				href: "/brand/kit/01-logo-only/Core-Mark-Mono.svg",
				label: "Mark: SVG mono",
				file: "Core-Mark-Mono.svg"
			},
			{
				href: "/brand/kit/01-logo-only/Core-Mark-On-Ink.png",
				label: "Mark: PNG on ink",
				file: "Core-Mark-On-Ink.png"
			},
			{
				href: "/brand/kit/01-logo-only/Core-Mark-On-Vellum.png",
				label: "Mark: PNG on vellum",
				file: "Core-Mark-On-Vellum.png"
			}
		]
	},
	{
		group: "Logo with words",
		items: [
			{
				href: "/brand/kit/02-logo-with-words/Core-Lockup-On-Ink.svg",
				label: "Lockup: SVG on ink",
				file: "Core-Lockup-On-Ink.svg"
			},
			{
				href: "/brand/kit/02-logo-with-words/Core-Lockup-On-Vellum.svg",
				label: "Lockup: SVG on vellum",
				file: "Core-Lockup-On-Vellum.svg"
			},
			{
				href: "/brand/kit/02-logo-with-words/Core-Lockup-On-Ink-Transparent.svg",
				label: "Lockup: SVG transparent",
				file: "Core-Lockup-On-Ink-Transparent.svg"
			},
			{
				href: "/brand/kit/02-logo-with-words/Core-Lockup-On-Ink.png",
				label: "Lockup: PNG on ink",
				file: "Core-Lockup-On-Ink.png"
			},
			{
				href: "/brand/kit/02-logo-with-words/Core-Lockup-On-Vellum.png",
				label: "Lockup: PNG on vellum",
				file: "Core-Lockup-On-Vellum.png"
			}
		]
	},
	{
		group: "Business cards",
		items: [
			{
				href: "/brand/kit/03-business-cards/Core-Business-Card-Front.svg",
				label: "Card front: SVG editable",
				file: "Core-Business-Card-Front.svg"
			},
			{
				href: "/brand/kit/03-business-cards/Core-Business-Card-Back.svg",
				label: "Card back: SVG editable",
				file: "Core-Business-Card-Back.svg"
			},
			{
				href: "/brand/kit/03-business-cards/Core-Business-Card-Front.pdf",
				label: "Card front: PDF print",
				file: "Core-Business-Card-Front.pdf"
			},
			{
				href: "/brand/kit/03-business-cards/Core-Business-Card-Back.pdf",
				label: "Card back: PDF print",
				file: "Core-Business-Card-Back.pdf"
			}
		]
	},
	{
		group: "Stationery",
		items: [{
			href: "/brand/kit/04-stationery/Core-Letterhead-A4.svg",
			label: "Letterhead A4: SVG",
			file: "Core-Letterhead-A4.svg"
		}, {
			href: "/brand/kit/04-stationery/Core-Envelope-DL.svg",
			label: "Envelope DL: SVG",
			file: "Core-Envelope-DL.svg"
		}]
	}
];
var KIT_ZIP = {
	href: "/brand/Core-Marketing-Brand-Kit.zip",
	label: "Download everything: ZIP",
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
//#endregion
export { VOICE_SAMPLES as _, CoreMarkConstruct as a, IMAGE_RULES as c, PRACTICES as d, SECTIONS as f, VOICE_RULES as g, TYPE_ROLES as h, CoreMark as i, KIT_ZIP as l, TRAITS as m, COLORS as n, CoreWordmark as o, SITE_NAV as p, CoreLockup as r, DOWNLOADS as s, BRAND as t, MISUSE as u, cn as v };
