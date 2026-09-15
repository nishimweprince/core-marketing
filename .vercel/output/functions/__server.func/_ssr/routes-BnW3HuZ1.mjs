import { i as __toESM } from "../_runtime.mjs";
import { R as require_react, v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as SITE_NAV, r as CoreLockup, t as BRAND, v as cn } from "./mark-DDLwdtde.mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BnW3HuZ1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var pexelsImage = (id, width = 1400) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
var HERO_IMAGE = {
	src: pexelsImage("31466702", 1800),
	sourcePage: "https://www.pexels.com/photo/aerial-view-of-kigali-s-modern-skyline-31466702/",
	alt: "An aerial view over Kigali's modern skyline, rooftops and green ridges under a bright sky.",
	objectPosition: "center"
};
var STUDIO_ROOMS = [
	{
		id: "hotels",
		kicker: "Hospitality",
		name: "Hotels & villas",
		image: {
			src: pexelsImage("31464449"),
			sourcePage: "https://www.pexels.com/photo/scenic-view-of-kigali-city-rooftops-in-rwanda-31464449/",
			alt: "Sunlit Kigali rooftops and green ridges under a bright sky.",
			objectPosition: "center"
		},
		lede: "Make the experience begin before arrival.",
		body: "We bring positioning, content, and digital presence together so every touchpoint feels as considered as the stay."
	},
	{
		id: "motor",
		kicker: "Automotive",
		name: "Motor",
		image: {
			src: pexelsImage("18029636"),
			sourcePage: "https://www.pexels.com/photo/tourist-bus-in-rwanda-18029636/",
			alt: "A white Tembera U Rwanda tour coach parked and ready for the road.",
			objectPosition: "center"
		},
		lede: "Give the car the attention it deserves.",
		body: "For premium hire and dealerships, we build a clear, composed presence that lets the marque—and the experience around it—lead."
	},
	{
		id: "property",
		kicker: "Property",
		name: "Places worth choosing",
		image: {
			src: pexelsImage("39128396"),
			sourcePage: "https://www.pexels.com/photo/scenic-view-of-kigali-s-urban-landscape-39128396/",
			alt: "Kigali homes and rooftops among greenery, glowing in warm evening light.",
			objectPosition: "center"
		},
		lede: "Sell the life around the address.",
		body: "We help developers, private offices, and distinctive properties communicate more than features: a point of view people can picture themselves in."
	}
];
var STUDIO_WORK = [
	{
		id: "hospitality",
		room: "Hospitality",
		title: "A hotel people remember",
		image: {
			src: pexelsImage("36470601"),
			sourcePage: "https://www.pexels.com/photo/aerial-view-of-kigali-city-landscape-rwanda-36470601/",
			alt: "A wide green valley of Kigali rooftops beneath soft daylight.",
			objectPosition: "center"
		},
		body: "We shape one recognizable story from first discovery to post-stay follow-up, so the experience feels consistent at every step."
	},
	{
		id: "motor",
		room: "Motor",
		title: "The marque, clearly framed",
		image: {
			src: pexelsImage("39386240"),
			sourcePage: "https://www.pexels.com/photo/rural-dirt-road-in-kigali-surrounded-by-walls-39386240/",
			alt: "A quiet red-earth road winding past brick walls and homes in Kigali.",
			objectPosition: "center"
		},
		body: "A focused content and channel system lets the vehicle lead, without crowding it with campaign noise."
	},
	{
		id: "property",
		room: "Property",
		title: "More than a listing",
		image: {
			src: pexelsImage("39128405"),
			sourcePage: "https://www.pexels.com/photo/aerial-view-of-urban-rooftops-with-hilly-backdrop-39128405/",
			alt: "Dense Kigali rooftops rising toward tree-lined hills.",
			objectPosition: "center"
		},
		body: "We build a lasting narrative around the address—one that can hold attention across launches, seasons, and sales cycles."
	}
];
var HOUSE_IMAGE = {
	src: pexelsImage("31466706"),
	sourcePage: "https://www.pexels.com/photo/aerial-view-of-kigali-city-in-daylight-31466706/",
	alt: "Home ground: a tree-lined Kigali boulevard in full daylight.",
	objectPosition: "center"
};
var STUDIO_MEASURES = [
	{
		figure: "2018",
		caption: "Working with ambitious brands since."
	},
	{
		figure: "Kigali",
		caption: "Based here. Working wherever the fit is right."
	},
	{
		figure: "IV",
		caption: "Four disciplines, led as one."
	},
	{
		figure: "One",
		caption: "Senior team, from first conversation to final detail."
	}
];
var STUDIO_INSIGHT = {
	kicker: "How people choose",
	title: "The decision starts long before the visit.",
	body: "Guests, drivers, and buyers meet your brand on a screen before they meet it in person. We make every message, image, and channel feel considered—so choosing you feels natural.",
	pull: "Be the name they already trust.",
	note: "Clear strategy turns attention into confidence."
};
var STUDIO_PRACTICES = [
	{
		name: "Strategy",
		subtitle: "Find the clearest position",
		body: "We define the audience, point of view, and narrative that guide every decision that follows.",
		holds: [
			"Positioning",
			"Narrative",
			"A useful creative brief"
		]
	},
	{
		name: "Presence",
		subtitle: "Show up with purpose",
		body: "We give every channel a clear role and build a cadence your team can sustain.",
		holds: [
			"Channel roles",
			"Content cadence",
			"A consistent digital presence"
		]
	},
	{
		name: "Content",
		subtitle: "Create proof people can feel",
		body: "We direct film, stills, and language as one system, so every piece feels unmistakably yours.",
		holds: [
			"Creative direction",
			"Film and stills",
			"Brand language"
		]
	},
	{
		name: "Promotion",
		subtitle: "Reach the right people",
		body: "We launch and grow strong work with considered paid support, once the foundation is ready.",
		holds: [
			"Launch planning",
			"Always-on growth",
			"Paid promotion"
		]
	}
];
var STUDIO_RETAINERS = [
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
			"A monthly senior working session"
		],
		typical: "A focused foundation for a launch, reset, or first serious marketing system."
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
			"Two priority channels managed with intent"
		],
		typical: "A sustained partnership for brands ready to turn their direction into visible proof."
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
			"Launch and always-on planning"
		],
		typical: "The complete Core partnership for brands building long-term recognition and growth."
	}
];
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
var STUDIO_TRAITS = [
	{
		name: "Composed",
		body: "We keep the work calm, even when the schedule is not."
	},
	{
		name: "Exact",
		body: "We pay attention to the words, crops, timing, and details people notice."
	},
	{
		name: "Discerning",
		body: "We take on fewer partners so each engagement gets senior attention."
	},
	{
		name: "Human at close range",
		body: "The public work is refined. The working relationship is direct, warm, and honest."
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
		q: "How do Prima, Altera, and Summa differ?",
		a: "Prima builds the strategic foundation. Altera adds ongoing content and channel direction. Summa is the full, always-on partnership, including promotion."
	},
	{
		id: "fees",
		q: "How much does an engagement cost?",
		a: "Fees depend on the scope, team, and pace the work needs. We discuss them after the first conversation, once we understand what a strong result requires."
	},
	{
		id: "term",
		q: "How long do you work with clients?",
		a: "Prima runs for three months, Altera for six, and Summa for twelve. Each term gives the work enough time to become clear, consistent, and useful."
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
function BrandImage({ src, alt, frameClassName, imageClassName, objectPosition = "center", priority = false, tone = "dark" }) {
	const [status, setStatus] = (0, import_react.useState)("loading");
	const imageRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setStatus("loading");
		const image = imageRef.current;
		if (image?.complete) setStatus(image.naturalWidth > 0 ? "loaded" : "error");
	}, [src]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("brand-photo relative isolate overflow-hidden", tone === "light" ? "bg-limestone" : "bg-night", frameClassName),
		"data-image-state": status,
		children: [
			status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("brand-image-skeleton absolute inset-0", tone === "light" ? "brand-image-skeleton-light" : "brand-image-skeleton-dark"),
				"aria-hidden": "true"
			}) : null,
			status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("absolute inset-0 flex items-center justify-center", tone === "light" ? "bg-limestone text-ink" : "bg-night text-limestone"),
				role: "img",
				"aria-label": `${alt} The image is currently unavailable.`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-juniper" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-sans text-xs font-medium tracking-brand uppercase",
						children: "Image unavailable"
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				ref: imageRef,
				src,
				alt,
				loading: priority ? "eager" : "lazy",
				fetchPriority: priority ? "high" : "auto",
				decoding: "async",
				onLoad: () => setStatus("loaded"),
				onError: () => setStatus("error"),
				style: { objectPosition },
				className: cn("absolute inset-0 size-full object-cover transition-opacity duration-300", status === "loaded" ? "opacity-100" : "opacity-0", imageClassName)
			})
		]
	});
}
var ROOMS_OPTIONS = [
	{
		value: "",
		label: "Select a focus area"
	},
	...STUDIO_ROOMS.map((r) => ({
		value: r.id,
		label: r.name
	})),
	{
		value: "other",
		label: "Something else"
	}
];
var RETAINER_OPTIONS = [{
	value: "",
	label: "I’m not sure yet"
}, ...STUDIO_RETAINERS.map((r) => ({
	value: r.id,
	label: `${r.latin}: ${r.means}`
}))];
function Inquiry() {
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		if (busy) return;
		const data = new FormData(e.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const house = String(data.get("house") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const room = String(data.get("room") ?? "").trim();
		const retainer = String(data.get("retainer") ?? "").trim();
		const note = String(data.get("note") ?? "").trim();
		if (!name || !email) {
			toast.error("Add your name and email to continue.");
			return;
		}
		const roomLabel = ROOMS_OPTIONS.find((o) => o.value === room)?.label ?? room;
		const retainerLabel = RETAINER_OPTIONS.find((o) => o.value === retainer)?.label ?? retainer;
		const subject = `New conversation: ${house || name}`;
		const body = [
			`Name: ${name}`,
			`Brand or property: ${house || "-"}`,
			`Email: ${email}`,
			`Focus area: ${roomLabel || "-"}`,
			`Preferred retainer: ${retainerLabel || "I’m not sure yet"}`,
			"",
			note || "No additional context provided."
		].join("\n");
		const href = `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		setBusy(true);
		window.location.href = href;
		window.setTimeout(() => {
			setBusy(false);
			setSent(true);
			toast.success("Your email draft is ready. If it did not open, email us directly.");
		}, 400);
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-vellum/12 pt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl font-normal",
				children: "Your email is ready."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "body-copy-compact mt-4 max-w-md text-limestone",
				children: [
					"If your mail app did not open, email us directly at ",
					BRAND.email,
					". We read every note and reply when the fit is clear."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${BRAND.email}`,
				className: "mt-8 inline-flex min-h-11 items-center bg-vellum px-5 font-sans text-[13px] font-medium text-ink transition-[opacity] duration-150 hover:opacity-90",
				children: BRAND.email
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-8",
		noValidate: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 md:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label text-limestone",
						children: "Your name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field mt-4",
						name: "name",
						autoComplete: "name",
						required: true,
						suppressHydrationWarning: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label text-limestone",
						children: "Brand or property"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field mt-4",
						name: "house",
						autoComplete: "organization",
						placeholder: "Hotel, villa, automotive brand, or property",
						suppressHydrationWarning: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label text-limestone",
						children: "Work email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field mt-4",
						name: "email",
						type: "email",
						autoComplete: "email",
						required: true,
						suppressHydrationWarning: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label text-limestone",
						children: "Focus area"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "field mt-4",
						name: "room",
						defaultValue: "",
						suppressHydrationWarning: true,
						children: ROOMS_OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: o.value,
							className: "bg-ink text-vellum",
							children: o.label
						}, o.value || "none"))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label text-limestone",
						children: "Preferred retainer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "field mt-4",
						name: "retainer",
						defaultValue: "",
						suppressHydrationWarning: true,
						children: RETAINER_OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: o.value,
							className: "bg-ink text-vellum",
							children: o.label
						}, o.value || "none"))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label text-limestone",
						children: "A little context"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: "field mt-4 min-h-32 resize-y",
						name: "note",
						rows: 4,
						placeholder: "What would you like to change, launch, or grow?",
						suppressHydrationWarning: true
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "body-copy-compact max-w-sm text-limestone",
				children: [
					"This opens a draft email to ",
					BRAND.email,
					". We’ll discuss scope and fees in the first conversation."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: busy,
				className: "inline-flex min-h-11 items-center bg-vellum px-6 font-sans text-[13px] font-medium text-ink transition-[opacity] duration-150 hover:opacity-90 disabled:opacity-60",
				children: busy ? "Opening your email…" : "Start the conversation"
			})]
		})]
	});
}
function Studio() {
	const [active, setActive] = (0, import_react.useState)("cover");
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const els = [
			"cover",
			"rooms",
			"work",
			"retainers",
			"house",
			"conversation"
		].map((id) => document.getElementById(id)).filter((el) => Boolean(el));
		const io = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-30% 0px -50% 0px",
			threshold: [.1, .35]
		});
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
	function jump(id) {
		setOpen(false);
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-ink text-vellum",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "bottom-right",
				toastOptions: { className: "!bg-night !text-vellum !border-vellum/10 !font-sans !rounded-md !shadow-none" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				active,
				open,
				onToggle: () => setOpen((v) => !v),
				onJump: jump
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { onJump: jump }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Measures, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Insight, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rooms, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Practices, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Retainers, { onJump: jump }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Approach, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Questions, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Close, { onJump: jump }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Conversation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { onJump: jump })
		]
	});
}
function Header({ active, open, onToggle, onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 right-0 left-0 z-40 border-b border-vellum/8 bg-ink/95",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:h-16 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onJump("cover"),
					className: "text-left text-vellum transition-[opacity] duration-150 hover:opacity-80",
					"aria-label": "Core Marketing, back to cover",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "sm" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Studio",
					children: [
						SITE_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onJump(item.id),
							className: cn("inline-flex min-h-11 items-center px-3 font-sans text-xs transition-[color] duration-150", active === item.id ? "text-vellum" : "text-ash hover:text-limestone"),
							children: item.label
						}, item.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "inline-flex min-h-11 items-center px-3 font-sans text-xs text-ash transition-[color] duration-150 hover:text-limestone",
							children: "The book"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onJump("conversation"),
							className: "ml-2 inline-flex min-h-11 items-center bg-vellum px-4 font-sans text-[13px] font-medium text-ink transition-[opacity] duration-150 hover:opacity-90",
							children: "Start a conversation"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onToggle,
					className: "flex size-11 items-center justify-center text-vellum lg:hidden",
					"aria-expanded": open,
					"aria-label": open ? "Close menu" : "Open menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		})
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-30 overflow-y-auto bg-ink px-6 pt-20 pb-12 lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "label text-limestone",
			children: "Index"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mt-8 flex flex-col",
			"aria-label": "Studio",
			children: [
				SITE_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onJump(item.id),
					className: "flex min-h-14 items-center border-b border-vellum/8 text-left font-display text-2xl font-normal text-vellum",
					children: item.label
				}, item.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/book",
					className: "flex min-h-14 items-center border-b border-vellum/8 font-display text-2xl font-normal text-vellum",
					onClick: () => onToggle(),
					children: "The book"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onJump("conversation"),
					className: "mt-8 inline-flex min-h-12 items-center justify-center bg-vellum font-sans text-[13px] font-medium text-ink",
					children: "Start a conversation"
				})
			]
		})]
	}) : null] });
}
function Hero({ onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cover",
		className: "relative bg-ink pt-14 md:pt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-h-[calc(100dvh-3.5rem)] lg:min-h-dvh lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative order-2 flex flex-col justify-between px-6 py-10 md:px-12 lg:order-1 lg:px-16 lg:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rise label relative text-limestone",
						children: [BRAND.origin, " · Senior-led, by appointment"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "sr-only",
								children: "Core Marketing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rise rise-2 max-w-lg font-display text-4xl font-light leading-[1.05] text-vellum md:text-6xl",
								children: "Make your presence impossible to overlook."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rise rise-3 body-copy mt-6 max-w-md text-limestone",
								children: "Core brings strategy, digital presence, content, and promotion together for exceptional hotels, villas, automotive brands, and properties."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise rise-5 relative flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onJump("conversation"),
							className: "inline-flex min-h-11 items-center bg-vellum px-5 font-sans text-[13px] font-medium text-ink transition-[opacity] duration-150 hover:opacity-90",
							children: "Start a conversation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onJump("work"),
							className: "inline-flex min-h-11 items-center border border-vellum/20 px-5 font-sans text-[13px] font-medium text-vellum transition-[border-color,background-color] duration-150 hover:border-vellum/40 hover:bg-vellum/5",
							children: "See our work"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative order-1 min-h-[42vh] lg:order-2 lg:min-h-dvh",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandImage, {
					src: HERO_IMAGE.src,
					alt: HERO_IMAGE.alt,
					objectPosition: HERO_IMAGE.objectPosition,
					frameClassName: "absolute inset-0 rounded-none",
					priority: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/20" })]
			})]
		})
	});
}
function Measures() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-vellum/8 bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-2 gap-px bg-vellum/8 md:grid-cols-4",
			children: STUDIO_MEASURES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "bg-ink px-6 py-8 md:px-8 md:py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-normal text-vellum md:text-4xl",
					children: m.figure
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-copy-compact mt-3 max-w-56 text-limestone",
					children: m.caption
				})]
			}, m.figure))
		})
	});
}
function Insight() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-night px-6 py-20 text-vellum md:px-12 md:py-28 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-limestone",
						children: STUDIO_INSIGHT.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 max-w-3xl font-display text-4xl font-light md:text-5xl",
						children: STUDIO_INSIGHT.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy mt-6 max-w-xl text-limestone",
						children: STUDIO_INSIGHT.body
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "border-t border-vellum/12 pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-normal text-vellum md:text-4xl",
					children: STUDIO_INSIGHT.pull
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-copy-compact mt-6 text-limestone",
					children: STUDIO_INSIGHT.note
				})]
			})]
		})
	});
}
function Rooms() {
	const [hotels, motor, property] = STUDIO_ROOMS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "rooms",
		className: "scroll-mt-14 bg-vellum px-6 py-20 text-ink md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label",
					children: "Our rooms"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-3xl font-display text-4xl font-light md:text-5xl",
					children: "Where we do our best work."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-copy mt-6 max-w-xl text-ash",
					children: "We partner with a small number of premium brands in hospitality, motor, and property."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mt-16 grid items-center gap-10 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandImage, {
							src: hotels.image.src,
							alt: hotels.image.alt,
							objectPosition: hotels.image.objectPosition,
							frameClassName: "aspect-video w-full rounded-lg",
							tone: "light"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label",
								children: hotels.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-3xl font-normal",
								children: hotels.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-xl font-normal",
								children: hotels.lede
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy-compact mt-4 text-ash",
								children: hotels.body
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-10 md:grid-cols-2",
					children: [motor, property].map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandImage, {
							src: room.image.src,
							alt: room.image.alt,
							objectPosition: room.image.objectPosition,
							frameClassName: "aspect-[3/2] w-full rounded-lg",
							tone: "light"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label mt-5",
							children: room.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-3xl font-normal",
							children: room.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-xl font-normal",
							children: room.lede
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy-compact mt-3 text-ash",
							children: room.body
						})
					] }, room.id))
				})
			]
		})
	});
}
function Work() {
	const [featured, ...rest] = STUDIO_WORK;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "scroll-mt-14 border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-limestone",
					children: "Work"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-3xl font-display text-4xl font-light md:text-5xl",
					children: "A closer look at the work."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-copy mt-6 max-w-xl text-limestone",
					children: "Our client work stays confidential. These selected studies show the thinking, mood, and outcomes we build toward."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mt-16 grid items-end gap-10 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "lg:col-span-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandImage, {
							src: featured.image.src,
							alt: featured.image.alt,
							objectPosition: featured.image.objectPosition,
							frameClassName: "aspect-[16/10] w-full rounded-lg"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label text-limestone",
								children: featured.room
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-3xl font-normal",
								children: featured.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy-compact mt-4 text-limestone",
								children: featured.body
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-10 md:grid-cols-2",
					children: rest.map((plate) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandImage, {
							src: plate.image.src,
							alt: plate.image.alt,
							objectPosition: plate.image.objectPosition,
							frameClassName: "aspect-[3/2] w-full rounded-lg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label mt-5 text-limestone",
							children: plate.room
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-3xl font-normal",
							children: plate.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy-compact mt-3 text-limestone",
							children: plate.body
						})
					] }, plate.id))
				})
			]
		})
	});
}
function Practices() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-limestone",
					children: "Practices"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-3xl font-display text-4xl font-light md:text-5xl",
					children: "Four disciplines, one clear direction."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-copy mt-6 max-w-xl text-limestone",
					children: "Strategy, presence, content, and promotion work better when the same senior team holds the whole picture."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-px bg-vellum/10 md:grid-cols-2",
					children: STUDIO_PRACTICES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bg-ink p-8 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-3xl font-normal",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy-compact mt-1 text-limestone",
								children: p.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy-compact mt-6 text-limestone",
								children: p.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8",
								children: p.holds.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "body-copy-compact border-t border-vellum/10 py-3 text-vellum",
									children: h
								}, h))
							})
						]
					}, p.name))
				})
			]
		})
	});
}
function Retainers({ onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "retainers",
		className: "scroll-mt-14 border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-limestone",
					children: "Retainers"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-3xl font-display text-4xl font-light md:text-5xl",
					children: "Choose the level of support you need."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-copy mt-6 max-w-xl text-limestone",
					children: "Prima, Altera, and Summa are senior-led retainers shaped around where your brand is now and how far it needs to go. We discuss fees after we understand the work."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-4 lg:grid-cols-3",
					children: STUDIO_RETAINERS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: cn("flex flex-col rounded-lg p-7 md:p-8", r.featured ? "bg-vellum text-ink" : "bg-night text-vellum"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("label", r.featured ? "text-ash" : "text-limestone"),
									children: r.means
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-ash",
									children: r.term
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-4xl font-normal",
								children: r.latin
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("body-copy-compact mt-4", r.featured ? "text-ash" : "text-limestone"),
								children: r.for
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 flex flex-1 flex-col gap-3",
								children: r.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: cn("body-copy-compact border-t pt-3", r.featured ? "border-ink/10 text-ink" : "border-vellum/12 text-vellum"),
									children: item
								}, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("body-copy-compact mt-8", r.featured ? "text-ash" : "text-limestone"),
								children: r.typical
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onJump("conversation"),
								className: cn("mt-8 inline-flex min-h-11 items-center justify-center px-5 font-sans text-[13px] font-medium transition-[opacity,background-color,border-color] duration-150", r.featured ? "bg-ink text-vellum hover:opacity-90" : "border border-vellum/20 text-vellum hover:border-vellum/40 hover:bg-vellum/5"),
								children: ["Talk about ", r.latin]
							})
						]
					}, r.id))
				})
			]
		})
	});
}
function Approach() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-limestone",
					children: "Approach"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-3xl font-display text-4xl font-light md:text-5xl",
					children: "What working together looks like."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4",
					children: STUDIO_STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl text-limestone",
							children: s.roman
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-2xl font-normal",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy-compact mt-4 text-limestone",
							children: s.body
						})
					] }, s.name))
				})
			]
		})
	});
}
function House() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "house",
		className: "scroll-mt-14 bg-vellum px-6 py-20 text-ink md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label",
							children: "The house"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-4xl font-light md:text-5xl",
							children: "Small studio. Senior attention."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy mt-6",
							children: "Core is a Kigali-based marketing studio for premium hospitality, automotive, and property brands. Every engagement stays close to the people leading the work."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy-compact mt-4 text-ash",
							children: "Instead of splitting strategy, social, promotion, and content across separate teams, we hold them together—so your brand feels consistent wherever people meet it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "mt-8 inline-flex min-h-11 items-center border border-ink/15 px-5 font-sans text-[13px] font-medium text-ink transition-[border-color,background-color] duration-150 hover:border-ink/30 hover:bg-ink/5",
							children: "Explore the brand book"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "lg:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandImage, {
						src: HOUSE_IMAGE.src,
						alt: HOUSE_IMAGE.alt,
						objectPosition: HOUSE_IMAGE.objectPosition,
						frameClassName: "aspect-[3/2] w-full rounded-lg",
						tone: "light"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4",
				children: STUDIO_TRAITS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "bg-vellum px-6 py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-normal",
						children: t.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy-compact mt-4 text-ash",
						children: t.body
					})]
				}, t.name))
			})]
		})
	});
}
function Questions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "questions",
		className: "scroll-mt-14 border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label text-limestone",
							children: "Questions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-4xl font-light md:text-5xl",
							children: "A few things you may want to know."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy-compact mt-6 text-limestone",
							children: "If your question is not here, bring it to the first conversation."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-vellum/10 lg:col-span-8",
					children: STUDIO_QUESTIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "faq-item group border-b border-vellum/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex min-h-14 cursor-pointer items-center justify-between gap-6 py-5 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex min-w-0 items-baseline gap-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-xl font-normal md:text-2xl",
										children: item.q
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 font-display text-2xl leading-none text-limestone group-open:hidden",
									"aria-hidden": "true",
									children: "+"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden shrink-0 font-display text-2xl leading-none text-limestone group-open:inline",
									"aria-hidden": "true",
									children: "−"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy-compact max-w-xl pb-6 text-limestone",
							children: item.a
						})]
					}, item.id))
				})]
			})
		})
	});
}
function Close({ onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-vellum px-6 py-20 text-ink md:px-12 md:py-28 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label",
					children: "Have a project in mind?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-3xl font-display text-4xl font-light md:text-6xl",
					children: "Tell us what you’re building."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-copy mt-6 max-w-xl text-ash",
					children: "Share where the brand is today and where you want it to go. We’ll be clear about whether Core is the right fit."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onJump("conversation"),
						className: "inline-flex min-h-11 items-center bg-ink px-5 font-sans text-[13px] font-medium text-vellum transition-[opacity] duration-150 hover:opacity-90",
						children: "Start a conversation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onJump("retainers"),
						className: "inline-flex min-h-11 items-center border border-ink/15 px-5 font-sans text-[13px] font-medium text-ink transition-[border-color,background-color] duration-150 hover:border-ink/30 hover:bg-ink/5",
						children: "Compare retainers"
					})]
				})
			]
		})
	});
}
function Conversation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "conversation",
		className: "scroll-mt-14 border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label text-limestone",
							children: "Start here"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-4xl font-light md:text-5xl",
							children: "Let’s see if we’re a good fit."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy mt-6 text-limestone",
							children: "Tell us about the brand, the challenge, and what a strong result would look like. We’ll reply with a clear next step."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 font-sans text-sm leading-relaxed text-ash",
							children: [
								BRAND.email,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								BRAND.web,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								BRAND.origin,
								" · Meetings by appointment"
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inquiry, {})
				})]
			})
		})
	});
}
function Footer({ onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-vellum/8 bg-ink px-6 py-16 text-vellum md:px-12 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xs font-display text-2xl font-normal",
						children: BRAND.tagline
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-limestone",
						children: "House"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mt-5 flex flex-col gap-1",
						"aria-label": "Footer",
						children: [SITE_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onJump(item.id),
							className: "inline-flex min-h-11 items-center font-sans text-sm text-ash transition-[color] duration-150 hover:text-limestone",
							children: item.label
						}, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "inline-flex min-h-11 items-center font-sans text-sm text-ash transition-[color] duration-150 hover:text-limestone",
							children: "The book"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-limestone",
						children: "Rooms"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 flex flex-col gap-1",
						children: STUDIO_ROOMS.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onJump("rooms"),
							className: "inline-flex min-h-11 items-center font-sans text-sm text-ash transition-[color] duration-150 hover:text-limestone",
							children: room.name
						}) }, room.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label text-limestone",
							children: "Correspondence"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-sm leading-relaxed text-ash",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${BRAND.email}`,
									className: "inline-flex min-h-11 items-center text-limestone transition-[color] duration-150 hover:text-vellum",
									children: BRAND.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								BRAND.origin,
								" · Est. ",
								BRAND.year,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"By appointment"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/brand/kit/05-brand-book/Core-Marketing-Brand-Book.pdf",
							className: "mt-4 inline-flex min-h-11 items-center font-sans text-[13px] text-ash transition-[color] duration-150 hover:text-limestone",
							children: "Brand book: PDF"
						})
					]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {});
}
//#endregion
export { Home as component };
