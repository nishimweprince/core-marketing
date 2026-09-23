import { i as __toESM } from "../_runtime.mjs";
import { a as PLANS, c as STUDIO_PLANS, d as WHAT_WE_DO, i as PARTNERS, l as STUDIO_QUESTIONS, n as HERO, r as HERO_VIDEO, s as STUDIO_INDUSTRIES, t as CONTACT } from "./studio-content-BpnlWGvW.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Plus } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as cn, r as SiteFrame, t as BRAND } from "./frame-DNHFp8Vf.mjs";
import { t as BrandImage } from "./brand-image-P46P19_-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Byeyb9u5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero({ onJump }) {
	const videoRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setReduced(true);
			return;
		}
		const video = videoRef.current;
		if (!video) return;
		const connection = navigator.connection;
		video.src = window.innerWidth >= 1280 && !connection?.saveData ? HERO_VIDEO.srcLarge : HERO_VIDEO.src;
		video.load();
		video.play().catch(() => {});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "cover",
		className: "relative isolate min-h-dvh overflow-hidden bg-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandImage, {
				src: HERO_VIDEO.poster.src,
				alt: HERO_VIDEO.poster.alt,
				objectPosition: HERO_VIDEO.poster.objectPosition,
				frameClassName: "absolute inset-0 rounded-none",
				imageClassName: "hero-media",
				priority: true
			}),
			reduced ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				className: cn("hero-video hero-media absolute inset-0 size-full object-cover transition-opacity duration-1000", playing ? "opacity-100" : "opacity-0"),
				muted: true,
				loop: true,
				playsInline: true,
				autoPlay: true,
				preload: "metadata",
				onPlaying: () => setPlaying(true),
				"aria-hidden": "true",
				tabIndex: -1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/15 via-35% to-ink/90",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex min-h-dvh flex-col justify-end px-6 pt-32 pb-14 md:px-12 md:pb-20 lg:px-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-7xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "rise label text-vellum/85",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "kicker-dot",
								"aria-hidden": "true"
							}), HERO.kicker]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "rise rise-2 display mt-5 max-w-[11ch] text-vellum",
							children: HERO.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rise rise-3 editorial max-w-md text-limestone",
								children: HERO.deck
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onJump("conversation"),
								className: "btn-primary rise rise-4 w-fit",
								children: HERO.cta
							})]
						})
					]
				})
			})
		]
	});
}
function Partners() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "partners-title",
		className: "bg-ink py-20 text-vellum md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-12 lg:px-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "partners-title",
				className: "font-display text-xl font-normal md:text-2xl",
				children: "In good company"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee mt-12 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "marquee-track flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnerList, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnerList, { hidden: true })]
			})
		})]
	});
}
function PartnerList({ hidden = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex shrink-0 gap-4 pr-4",
		"aria-hidden": hidden || void 0,
		children: PARTNERS.map((partner) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnerSlot, { partner }) }, partner.id))
	});
}
function PartnerSlot({ partner }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-20 w-48 items-center justify-center rounded-sm bg-night",
		children: partner.logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: partner.logo,
			alt: partner.name,
			loading: "lazy",
			decoding: "async",
			className: "max-h-9 max-w-32 object-contain opacity-90"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "brand-image-skeleton brand-image-skeleton-dark h-5 w-28 rounded-xs",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "sr-only",
			children: [partner.name, ": logo coming soon"]
		})] })
	});
}
function Industries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "what-we-do",
		className: "scroll-mt-14 bg-vellum px-6 py-28 text-ink md:px-12 md:py-40 lg:scroll-mt-16 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-12 lg:gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "headline",
						children: WHAT_WE_DO.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pull mt-12",
						children: WHAT_WE_DO.pull
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-6 lg:col-start-7 lg:pt-4",
					children: WHAT_WE_DO.paragraphs.map((text, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("editorial", i > 0 ? "mt-8 text-ash" : void 0),
						children: text
					}, text))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-32 flex flex-col gap-32 md:mt-40 md:gap-40",
				children: STUDIO_INDUSTRIES.map((industry, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter, {
					industry,
					flip: i % 2 === 1
				}, industry.id))
			})]
		})
	});
}
function Chapter({ industry, flip }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: cn("lg:col-span-7", flip ? "lg:order-2 lg:col-start-6" : "lg:order-1"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandImage, {
				src: industry.image.src,
				alt: industry.image.alt,
				objectPosition: industry.image.objectPosition,
				frameClassName: "aspect-[4/3] w-full rounded-md lg:aspect-[5/4]",
				tone: "light"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "sr-only",
				children: industry.image.alt
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("lg:col-span-5", flip ? "lg:order-1 lg:col-start-1" : "lg:order-2"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-3xl font-light md:text-4xl",
					children: industry.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 font-display text-xl font-normal text-ash md:text-2xl",
					children: industry.lede
				}),
				industry.paragraphs.map((text) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "editorial mt-8",
					children: text
				}, text)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 flex flex-col gap-4",
					children: industry.cares.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-baseline gap-3 text-sm leading-relaxed text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-juniper",
							"aria-hidden": "true"
						}), item]
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/what-we-do/$slug",
					params: { slug: industry.id },
					className: "link mt-10 inline-block",
					children: ["More on ", industry.name.toLowerCase()]
				})
			]
		})]
	});
}
var RIDGE = "0,200 90,150 200,118 300,158 420,140 520,96 600,78 700,124 820,104 920,52 1000,30 1100,72 1200,58";
function Plans() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "plans",
		className: "scroll-mt-14 bg-ink px-6 py-28 text-vellum md:px-12 md:py-40 lg:scroll-mt-16 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "headline lg:col-span-5",
						children: PLANS.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "editorial text-limestone lg:col-span-6 lg:col-start-7 lg:pt-4",
						children: PLANS.intro
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-24 md:mt-32 lg:mt-40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "pointer-events-none absolute inset-x-0 -top-28 hidden h-56 w-full text-juniper/70 lg:block",
						viewBox: "0 0 1200 200",
						preserveAspectRatio: "none",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
							points: RIDGE,
							fill: "none",
							stroke: "currentColor",
							strokeWidth: 1,
							vectorEffect: "non-scaling-stroke"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "relative grid gap-6 lg:grid-cols-3 lg:items-start",
						children: STUDIO_PLANS.map((plan, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: `plan-step-${i + 1}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanCard, { plan })
						}, plan.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 flex flex-wrap items-center gap-6 md:mt-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: "conversation",
						className: "btn-primary",
						children: "Start a conversation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy-compact max-w-sm text-limestone",
						children: "Not sure which altitude? Tell us where you are and we will suggest one."
					})]
				})
			]
		})
	});
}
function PlanCard({ plan }) {
	const quiet = plan.featured ? "text-ash" : "text-limestone";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("plan-card flex h-full flex-col rounded-lg p-8 md:p-10", plan.featured ? "bg-vellum text-ink" : "bg-night text-vellum"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-sans text-xs font-medium text-juniper tabular-nums",
				children: [plan.altitude.toLocaleString("en-GB"), " m"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-10 font-display text-4xl font-light",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/plans/$planId",
					params: { planId: plan.id },
					className: "transition-[color] duration-150 hover:text-juniper",
					children: plan.name
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-3 font-display text-xl font-normal", quiet),
				children: plan.means
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("body-copy mt-8", quiet),
				children: plan.for
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 flex flex-1 flex-col gap-4",
				children: plan.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: cn("flex items-baseline gap-3 text-sm leading-relaxed", plan.featured ? "text-ink" : "text-vellum"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-juniper",
						"aria-hidden": "true"
					}), item]
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/plans/$planId",
				params: { planId: plan.id },
				className: cn("link mt-10 inline-block w-fit", quiet),
				children: [
					"What ",
					plan.name,
					" holds"
				]
			})
		]
	});
}
function Faq() {
	const [open, setOpen] = (0, import_react.useState)(STUDIO_QUESTIONS[0]?.id ?? null);
	const items = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	function toggle(id) {
		const willOpen = open !== id;
		setOpen(willOpen ? id : null);
		if (willOpen) requestAnimationFrame(() => {
			items.current.get(id)?.scrollIntoView({
				behavior: "smooth",
				block: "nearest"
			});
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		"aria-labelledby": "faq-title",
		className: "scroll-mt-14 bg-vellum px-6 pt-20 pb-28 text-ink md:px-12 md:pt-28 md:pb-40 lg:scroll-mt-16 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:sticky lg:top-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "faq-title",
						className: "headline",
						children: "Questions, answered"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-6 lg:col-start-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col",
					children: STUDIO_QUESTIONS.map((item) => {
						const expanded = open === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							ref: (el) => {
								if (el) items.current.set(item.id, el);
								else items.current.delete(item.id);
							},
							className: "border-t border-ink/10 py-2 last:border-b",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => toggle(item.id),
								"aria-expanded": expanded,
								"aria-controls": `faq-panel-${item.id}`,
								className: "group flex min-h-14 w-full items-center justify-between gap-6 py-3 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl font-normal transition-[color] duration-150 group-hover:text-juniper md:text-2xl",
									children: item.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("flex size-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink motion-safe:transition-transform motion-safe:duration-300", expanded ? "rotate-45" : void 0),
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								id: `faq-panel-${item.id}`,
								className: cn("grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300 motion-safe:ease-out", expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: cn("body-copy-compact max-w-xl pb-6 text-ash motion-safe:transition-opacity motion-safe:duration-300", expanded ? "opacity-100" : "opacity-0"),
										children: item.a
									})
								})
							})]
						}, item.id);
					})
				})
			})]
		})
	});
}
function Inquiry() {
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		if (busy) return;
		const data = new FormData(e.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const note = String(data.get("note") ?? "").trim();
		if (!name || !email) {
			toast.error("Add your name and email to continue.");
			return;
		}
		const subject = `New conversation: ${name}`;
		const body = [
			`Name: ${name}`,
			`Email: ${email}`,
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
		className: "pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl font-normal",
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
				className: "btn-primary mt-8",
				children: BRAND.email
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-10",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "label text-limestone",
					children: "Name"
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
					children: "Email"
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
					children: "About the project"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "field mt-4 min-h-36 resize-y",
					name: "note",
					rows: 5,
					placeholder: "What would you like to change, launch, or grow?",
					suppressHydrationWarning: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: busy,
				className: "btn-primary",
				children: busy ? "Opening your email…" : "Start a conversation"
			}) })
		]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "conversation",
		className: "scroll-mt-14 bg-ink px-6 py-28 text-vellum md:px-12 md:py-40 lg:scroll-mt-16 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 lg:grid-cols-12 lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "headline",
							children: CONTACT.title
						}),
						CONTACT.paragraphs.map((text) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "editorial mt-8 text-limestone",
							children: text
						}, text)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-12 font-sans text-sm leading-relaxed text-ash",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${BRAND.email}`,
									className: "nav-link text-limestone",
									children: BRAND.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								BRAND.origin,
								", by appointment"
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
function jump(id) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function Studio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		onJump: jump,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { onJump: jump }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Partners, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plans, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {});
}
//#endregion
export { Home as component };
