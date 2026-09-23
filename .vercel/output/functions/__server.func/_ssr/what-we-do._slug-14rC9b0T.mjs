import { i as __toESM } from "../_runtime.mjs";
import { c as STUDIO_PLANS, s as STUDIO_INDUSTRIES, u as STUDIO_STEPS } from "./studio-content-BpnlWGvW.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./router-BjLsoM6B.mjs";
import { r as SiteFrame } from "./frame-DNHFp8Vf.mjs";
import { t as BrandImage } from "./brand-image-P46P19_-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/what-we-do._slug-14rC9b0T.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function IndustryPage() {
	const { slug } = Route.useParams();
	const industry = STUDIO_INDUSTRIES.find((r) => r.id === slug);
	(0, import_react.useEffect)(() => {
		window.scrollTo({
			top: 0,
			behavior: "instant"
		});
	}, [slug]);
	if (!industry) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, {
		solid: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-[60dvh] flex-col items-start justify-center gap-6 px-6 md:px-12 lg:px-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl font-light",
				children: "There is no page by that name."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				hash: "what-we-do",
				className: "btn-primary",
				children: "See what we do"
			})]
		})
	});
	const others = STUDIO_INDUSTRIES.filter((r) => r.id !== industry.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandImage, {
					src: industry.image.src,
					alt: industry.image.alt,
					objectPosition: industry.image.objectPosition,
					frameClassName: "absolute inset-0 rounded-none",
					imageClassName: "hero-media",
					priority: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/15 via-35% to-ink/90",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[82dvh] w-full max-w-7xl flex-col justify-end px-6 pt-32 pb-14 md:px-12 md:pb-20 lg:px-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "what-we-do",
							className: "link w-fit text-vellum/85",
							children: "What we do"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display mt-6 max-w-[12ch] text-vellum",
							children: industry.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md font-display text-xl font-normal text-limestone md:text-2xl",
							children: industry.lede
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "bg-vellum px-6 py-28 text-ink md:px-12 md:py-40 lg:px-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-6",
						children: industry.paragraphs.map((text) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "editorial",
							children: text
						}, text))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 lg:col-start-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label text-ash",
							children: "What we hold"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 flex flex-col gap-5",
							children: industry.cares.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-baseline gap-3 text-sm leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-juniper",
									"aria-hidden": "true"
								}), item]
							}, item))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "mx-auto mt-28 max-w-7xl md:mt-40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandImage, {
						src: industry.second.src,
						alt: industry.second.alt,
						objectPosition: industry.second.objectPosition,
						frameClassName: "aspect-[4/3] w-full rounded-md md:aspect-[21/9]",
						tone: "light"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "label mt-4 text-ash",
						children: industry.second.caption
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-28 grid max-w-7xl gap-12 md:mt-40 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "headline lg:col-span-5",
						children: "How the work unfolds"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2",
						children: STUDIO_STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg text-juniper",
								children: step.roman
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-2xl font-normal",
								children: step.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy-compact mt-4 text-ash",
								children: step.body
							})
						] }, step.roman))
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink px-6 py-28 text-vellum md:px-12 md:py-40 lg:px-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "headline lg:col-span-5",
					children: "Begin with the right altitude"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6 lg:col-start-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: STUDIO_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-vellum/12 py-6 last:border-b",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-sans text-xs font-medium text-juniper tabular-nums",
									children: [plan.altitude.toLocaleString("en-GB"), " m"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/plans/$planId",
									params: { planId: plan.id },
									className: "mt-1 inline-block font-display text-3xl font-light transition-[color] duration-150 hover:text-juniper",
									children: plan.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "body-copy-compact mt-2 max-w-md text-limestone",
									children: plan.for
								})
							]
						}, plan.id)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-16 flex flex-wrap items-center gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "conversation",
								className: "btn-primary",
								children: "Start a conversation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "body-copy-compact max-w-xs text-limestone",
								children: [
									"Tell us about the ",
									industry.name.toLowerCase(),
									" brand and we will suggest a plan."
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-sm text-ash",
							children: ["Also", others.map((other) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/what-we-do/$slug",
								params: { slug: other.id },
								className: "link text-limestone",
								children: other.name
							}, other.id))]
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { IndustryPage as component };
