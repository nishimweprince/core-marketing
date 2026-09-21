import { i as __toESM } from "../_runtime.mjs";
import { B as require_jsx_runtime, _ as createRootRoute, b as useRouter, d as HeadContent, g as createFileRoute, h as lazyRouteComponent, m as Outlet, p as createRouter, u as Scripts, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-content-BRW8b6EI.js
var pexelsImage = (id, width = 1400) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
pexelsImage("31466702", 1800);
var HERO_VIDEO = {
	src: "https://videos.pexels.com/video-files/35145696/14888603_1280_720_24fps.mp4",
	srcLarge: "https://videos.pexels.com/video-files/35145696/14888604_1920_1080_24fps.mp4",
	poster: {
		src: "https://images.pexels.com/videos/35145696/4k-drone-abandoned-building-above-city-court-of-law-35145696.jpeg?auto=compress&cs=tinysrgb&w=1920",
		sourcePage: "https://www.pexels.com/video/aerial-view-of-kigali-cityscape-at-twilight-35145696/",
		alt: "Kigali's city centre from the air at twilight, towers lit against the hills.",
		objectPosition: "center"
	},
	sourcePage: "https://www.pexels.com/video/aerial-view-of-kigali-cityscape-at-twilight-35145696/"
};
var HERO = {
	kicker: "Kigali · Est. 2025",
	title: "Presence, made inevitable.",
	deck: "One senior team for the hotels, villas, motor brands, and properties people choose before they arrive.",
	cta: "Start a conversation"
};
var PARTNERS = [
	{
		id: "partner-1",
		name: "Partner one"
	},
	{
		id: "partner-2",
		name: "Partner two"
	},
	{
		id: "partner-3",
		name: "Partner three"
	},
	{
		id: "partner-4",
		name: "Partner four"
	},
	{
		id: "partner-5",
		name: "Partner five"
	},
	{
		id: "partner-6",
		name: "Partner six"
	},
	{
		id: "partner-7",
		name: "Partner seven"
	},
	{
		id: "partner-8",
		name: "Partner eight"
	},
	{
		id: "partner-9",
		name: "Partner nine"
	},
	{
		id: "partner-10",
		name: "Partner ten"
	}
];
var WHAT_WE_DO = {
	title: "What we do",
	pull: "Guests, drivers, and buyers meet you on a screen long before they meet you in person.",
	paragraphs: ["By the time someone walks into your lobby, sits behind the wheel, or stands on the plot, they have already decided how they feel about you. That decision was made in a search result, a reel, a friend's message, a listing photo. It was made quietly, and it was made early.", "Core exists for that early moment. We work with a small number of premium hospitality, motor, and property brands in Rwanda and the region, and we hold strategy, digital presence, content, and promotion together as one senior team, so that everything a person sees of you feels like it came from the same considered hand."]
};
var STUDIO_INDUSTRIES = [
	{
		id: "hotels",
		name: "Hotels & villas",
		lede: "The stay begins with the first photograph.",
		image: {
			src: "/brand/villa.jpg",
			alt: "A villa terrace at night: linen curtains, a single lamp, and the dark garden beyond.",
			objectPosition: "center"
		},
		paragraphs: ["A guest chooses a hotel or a villa on feeling, then justifies it with facts. We work on the feeling: how the property is described, how it is photographed and filmed, which channels carry it, and what happens in the days between booking and arrival.", "The result is a brand that reads the same on the website, on Instagram, on the booking platforms, and in the welcome note on the pillow. Rates hold better when the story is coherent."],
		cares: [
			"Positioning and the language of the property",
			"Direction for film, stills, and social content",
			"Website, booking presence, and guest communication"
		]
	},
	{
		id: "motor",
		name: "Motor",
		lede: "Let the vehicle, and the road around it, lead.",
		image: {
			src: "/brand/motor.jpg",
			alt: "A dark saloon in a stone courtyard at night, held by the light of a single doorway.",
			objectPosition: "center"
		},
		paragraphs: ["Tour operators, premium hire fleets, and dealerships sell a journey, not a spec sheet. We build a presence that gets out of the way of the vehicle: composed imagery, clear offers, and channels that reach the traveller or the buyer at the moment they are planning.", "For operators, that means the itinerary feels as considered as the car. For dealerships, it means the showroom starts online, with the same calm you would expect on the floor."],
		cares: [
			"Brand and offer clarity for fleets and dealerships",
			"Vehicle and journey photography and film",
			"Launch, seasonal, and always-on promotion"
		]
	},
	{
		id: "property",
		name: "Real estate",
		lede: "Sell the life around the address.",
		image: {
			src: "/brand/property.jpg",
			alt: "A stone residence at blue hour, one tall window glowing warm against the evening.",
			objectPosition: "center"
		},
		paragraphs: ["A development or a private residence is bought on a picture of a life. We help developers, private offices, and distinctive properties communicate more than square metres and finishes: a point of view a buyer can see themselves inside.", "That begins with a narrative for the address, continues through the launch, and holds across sales cycles and seasons, so the property is still recognisable two years on."],
		cares: [
			"Narrative and naming for developments and residences",
			"Launch campaigns and sales collateral",
			"Long-run presence across listings, social, and press"
		]
	}
];
pexelsImage("31464449"), pexelsImage("18029636"), pexelsImage("39128396");
pexelsImage("36470601"), pexelsImage("39386240"), pexelsImage("39128405");
pexelsImage("31466706");
var PLANS = {
	title: "Plans",
	intro: "Three plans, named for the three volcanoes on our northern horizon. Each is senior-led and shaped around where your brand is now and how far it needs to go. We discuss fees after the first conversation, once we understand the work."
};
var STUDIO_PLANS = [
	{
		id: "sabyinyo",
		name: "Sabyinyo",
		altitude: 3669,
		means: "A clear beginning",
		featured: false,
		for: "For brands establishing or sharpening their public presence.",
		includes: [
			"Social media management",
			"Content creation (four videos)",
			"Four graphics or carousels",
			"Social media marketing (Meta and TikTok)"
		],
		typical: "A focused foundation for a launch, reset, or first serious marketing system.",
		suitedFor: [
			{
				business: "Boutique hotels",
				why: "A steady social presence between seasons, without hiring a team in-house."
			},
			{
				business: "Private villas",
				why: "Four videos and a month of graphics that keep the house visible while you host."
			},
			{
				business: "Tour & hire operators",
				why: "Vehicles on the feed every week, with offers that read clearly at a glance."
			},
			{
				business: "Real estate listings",
				why: "New listings introduced properly, then kept warm until the right buyer appears."
			}
		]
	},
	{
		id: "muhabura",
		name: "Muhabura",
		altitude: 4127,
		means: "Build the evidence",
		featured: false,
		for: "For brands with a direction that need consistent content and momentum.",
		includes: [
			"Everything in Sabyinyo",
			"Content creation (eight videos)",
			"Google Business Profile (setup & optimization)",
			"Ad campaigns (Google, Meta, TikTok, and more)"
		],
		typical: "A sustained partnership for brands ready to turn their direction into visible proof.",
		suitedFor: [
			{
				business: "Established hotels",
				why: "Double the content plus campaigns that fill the shoulder seasons."
			},
			{
				business: "Motor dealerships",
				why: "Showroom stories plus the Google presence buyers check before visiting."
			},
			{
				business: "Real estate developments",
				why: "A launch rhythm across Google, Meta, and TikTok that compounds over months."
			},
			{
				business: "Villa collections",
				why: "Several houses, one voice, and campaigns that keep occupancy steady."
			}
		]
	},
	{
		id: "karisimbi",
		name: "Karisimbi",
		altitude: 4507,
		means: "Full partnership",
		featured: true,
		for: "For brands ready to hold a complete, always-on marketing system.",
		includes: [
			"Everything in Muhabura",
			"Web development & design",
			"SEO & answer engine optimization (AEO)",
			"Custom application development"
		],
		typical: "The complete Core partnership for brands building long-term recognition and growth.",
		suitedFor: [
			{
				business: "Hotel groups",
				why: "A website, search presence, and campaigns for the whole collection, held as one."
			},
			{
				business: "Regional motor brands",
				why: "Web, SEO, and always-on demand across several markets at once."
			},
			{
				business: "Major developments",
				why: "From the address narrative to the website to a custom sales tool."
			},
			{
				business: "Real estate portfolios",
				why: "Every listing discoverable by search and by answer engines, for years."
			}
		]
	}
];
var PROJECT_CTA = {
	title: "Have a project in mind?",
	body: "A launch, a reset, a season that matters. Tell us what you are trying to change and what a strong result would look like a year from now. We reply to every note with a clear next step.",
	cta: "Start a conversation",
	image: {
		src: "/brand/reception.jpg",
		alt: "A hotel lobby at dusk: walnut, limestone, one lamp, an empty chair.",
		objectPosition: "center"
	}
};
var CONTACT = {
	title: "Start a conversation",
	paragraphs: ["Tell us about the brand, what you are trying to change, launch, or grow, and what a strong result would look like a year from now.", "We reply to every note with a clear next step. If Core is not the right fit, we will say so and, where we can, point you somewhere that is."]
};
var STUDIO_STEPS = [
	{
		roman: "I",
		name: "Conversation",
		body: "We start with a focused conversation about your goals, timing, and fit. You leave knowing the next step."
	},
	{
		roman: "II",
		name: "Direction",
		body: "We clarify your position and build the narrative that will guide the work."
	},
	{
		roman: "III",
		name: "Plan",
		body: "We choose the right channels, roles, and cadence, then shape a plan your team can keep."
	},
	{
		roman: "IV",
		name: "Make and grow",
		body: "We create the film, stills, and language, then promote the work when the foundation is strong."
	}
];
var STUDIO_QUESTIONS = [
	{
		id: "holds",
		q: "What can Core help us with?",
		a: "Strategy, digital presence, content, and promotion. One senior team holds all four, so your brand feels consistent wherever people meet it."
	},
	{
		id: "retainers",
		q: "How do Sabyinyo, Muhabura, and Karisimbi differ?",
		a: "Sabyinyo covers social management, four videos, graphics, and Meta and TikTok promotion. Muhabura doubles the content and adds Google presence and wider ad campaigns. Karisimbi adds web, SEO and answer engine optimization, and custom application development."
	},
	{
		id: "fees",
		q: "How much does an engagement cost?",
		a: "Fees depend on the scope, team, and pace the work needs. We discuss them after the first conversation, once we understand what a strong result requires."
	},
	{
		id: "term",
		q: "How long do you work with clients?",
		a: "For as long as the work needs. Each engagement is scoped around your goals and given the time to become clear, consistent, and useful. There are no fixed terms and no countdowns."
	},
	{
		id: "fit",
		q: "Who is a good fit?",
		a: "Premium hotels, villas, automotive brands, and properties that value considered work and a close senior relationship. We take on fewer partners so we can stay involved."
	},
	{
		id: "where",
		q: "Where do you work?",
		a: "We are based in Kigali and work wherever the partnership is right. Meetings are by appointment, in person or online."
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BjdLsA6f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-BN50hZyb.css";
var APP_NAME = "Core Marketing";
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Core Marketing is a Kigali-based, senior-led marketing studio for premium hotels, villas, motor brands, and properties. Strategy, presence, content, and promotion, held by one team."
			},
			{
				name: "theme-color",
				content: "#0C0B0A"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-ink text-vellum",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$6 = () => import("./routes-MwK4X7SO.mjs");
var Route$6 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./book-D9UFVnLo.mjs");
var Route$5 = createFileRoute("/book")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "The brand book · Core Marketing" }] })
});
var $$splitComponentImporter$4 = () => import("./privacy-ByO53oVW.mjs");
var Route$4 = createFileRoute("/privacy")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "Privacy · Core Marketing" }, {
		name: "description",
		content: "What Core Marketing collects when you write to us, and what happens to it."
	}] })
});
var $$splitComponentImporter$3 = () => import("./sitemap-BHEMARrO.mjs");
var Route$3 = createFileRoute("/sitemap")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Sitemap · Core Marketing" }, {
		name: "description",
		content: "Every page on the Core Marketing site, and every section of the home page."
	}] })
});
var $$splitComponentImporter$2 = () => import("./terms-ClmujCVT.mjs");
var Route$2 = createFileRoute("/terms")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Terms · Core Marketing" }, {
		name: "description",
		content: "The plain-language basis on which Core Marketing works with clients."
	}] })
});
var $$splitComponentImporter$1 = () => import("./plans._planId-C4UyU2my.mjs");
var Route$1 = createFileRoute("/plans/$planId")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: ({ params }) => {
		const plan = STUDIO_PLANS.find((p) => p.id === params.planId);
		return { meta: plan ? [{ title: `${plan.name} · Core Marketing` }, {
			name: "description",
			content: `${plan.means}. ${plan.for}`
		}] : [{ title: "Plan not found · Core Marketing" }] };
	}
});
/**
* "Everything in Muhabura" is a pointer, not a deliverable. Resolve it to the items it stands
* for, grouped by the plan they come from, following the chain down to the first plan.
*/
var $$splitComponentImporter = () => import("./what-we-do._slug-CIV2S7fk.mjs");
var Route = createFileRoute("/what-we-do/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => {
		const industry = STUDIO_INDUSTRIES.find((r) => r.id === params.slug);
		return { meta: industry ? [{ title: `${industry.name} · Core Marketing` }, {
			name: "description",
			content: `${industry.lede} ${industry.paragraphs[0]}`
		}] : [{ title: "Not found · Core Marketing" }] };
	}
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	BookRoute: Route$5.update({
		id: "/book",
		path: "/book",
		getParentRoute: () => Route$7
	}),
	PrivacyRoute: Route$4.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$7
	}),
	SitemapRoute: Route$3.update({
		id: "/sitemap",
		path: "/sitemap",
		getParentRoute: () => Route$7
	}),
	TermsRoute: Route$2.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$7
	}),
	PlansPlanIdRoute: Route$1.update({
		id: "/plans/$planId",
		path: "/plans/$planId",
		getParentRoute: () => Route$7
	}),
	WhatWeDoSlugRoute: Route.update({
		id: "/what-we-do/$slug",
		path: "/what-we-do/$slug",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { HERO as a, PLANS as c, STUDIO_PLANS as d, STUDIO_QUESTIONS as f, CONTACT as i, PROJECT_CTA as l, WHAT_WE_DO as m, Route as n, HERO_VIDEO as o, STUDIO_STEPS as p, Route$1 as r, PARTNERS as s, router_exports as t, STUDIO_INDUSTRIES as u };
