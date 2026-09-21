import { i as __toESM } from "../_runtime.mjs";
import { B as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as CoreLockup, t as BRAND } from "./mark-B04OdnPl.mjs";
import { d as ArrowLeft, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as STUDIO_PLANS, n as Route, p as STUDIO_STEPS, u as STUDIO_INDUSTRIES } from "./router-BjdLsA6f.mjs";
import { t as Footer } from "./footer-DyMbnIPH.mjs";
import { t as useHomeJump } from "./home-nav-DUKRkmeO.mjs";
import { t as BrandImage } from "./brand-image-B23lfHks.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/what-we-do._slug-CIV2S7fk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function IndustryPage() {
	const { slug } = Route.useParams();
	const jumpHome = useHomeJump();
	const industry = STUDIO_INDUSTRIES.find((r) => r.id === slug);
	(0, import_react.useEffect)(() => {
		window.scrollTo({
			top: 0,
			behavior: "instant"
		});
	}, [slug]);
	if (!industry) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col items-center justify-center gap-6 bg-ink px-6 text-center text-vellum",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-3xl font-light",
			children: "There is no room by that name."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "inline-flex min-h-11 items-center bg-vellum px-5 font-sans text-[13px] font-medium text-ink",
			children: "Back to the site"
		})]
	});
	const subject = encodeURIComponent(`A ${industry.name} project with Core`);
	const others = STUDIO_INDUSTRIES.filter((r) => r.id !== industry.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-ink text-vellum",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "absolute top-0 right-0 left-0 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						"aria-label": "Core Marketing, back to the site",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "sm" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${BRAND.email}?subject=${subject}`,
						className: "inline-flex min-h-11 items-center bg-vellum px-4 font-sans text-[13px] font-medium text-ink transition-[opacity] duration-150 hover:opacity-90",
						children: "Start a conversation"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative isolate overflow-hidden",
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								hash: "what-we-do",
								className: "inline-flex w-fit items-center gap-2 font-sans text-[13px] text-vellum/85 transition-[color] duration-150 hover:text-vellum",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
									className: "size-4",
									"aria-hidden": "true"
								}), "What we do"]
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-6",
						children: industry.paragraphs.map((text, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: i > 0 ? "editorial mt-8 text-ash" : "editorial",
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
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-32 grid max-w-7xl gap-12 md:mt-40 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "headline lg:col-span-5",
						children: "How the work unfolds"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2",
						children: STUDIO_STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg text-ash",
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
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-ink px-6 py-28 text-vellum md:px-12 md:py-40 lg:px-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "headline max-w-xl",
							children: "Begin with the right altitude"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-16 grid gap-6 md:grid-cols-3",
							children: STUDIO_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "plan-card rounded-lg bg-night p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-sans text-xs text-limestone tabular-nums",
										children: [plan.altitude.toLocaleString("en-GB"), " m"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 font-display text-3xl font-light",
										children: plan.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "body-copy-compact mt-4 text-limestone",
										children: plan.for
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `mailto:${BRAND.email}?subject=${encodeURIComponent(`Talk about ${plan.name} for ${industry.name}`)}`,
										className: "mt-8 inline-flex min-h-11 items-center gap-2 border border-vellum/20 px-5 font-sans text-[13px] font-medium text-vellum transition-[border-color,background-color] duration-150 hover:border-vellum/40 hover:bg-vellum/5",
										children: [
											"Talk about ",
											plan.name,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												className: "size-4",
												"aria-hidden": "true"
											})
										]
									})
								]
							}, plan.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-24 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-sm text-limestone",
								children: "Also worth a look:"
							}), others.map((other) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/what-we-do/$slug",
								params: { slug: other.id },
								className: "inline-flex min-h-11 items-center gap-2 bg-vellum/10 px-5 font-sans text-[13px] font-medium text-vellum transition-[background-color] duration-150 hover:bg-vellum/15",
								children: [other.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4",
									"aria-hidden": "true"
								})]
							}, other.id))]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { onJump: jumpHome })
		]
	});
}
//#endregion
export { IndustryPage as component };
