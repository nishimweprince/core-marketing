import { B as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as SITE_NAV, r as CoreLockup } from "./mark-B04OdnPl.mjs";
import { d as ArrowLeft, l as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { d as STUDIO_PLANS, u as STUDIO_INDUSTRIES } from "./router-BjdLsA6f.mjs";
import { t as Footer } from "./footer-DyMbnIPH.mjs";
import { t as useHomeJump } from "./home-nav-DUKRkmeO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sitemap-BHEMARrO.js
var import_jsx_runtime = require_jsx_runtime();
var ELSEWHERE = [
	{
		to: "/book",
		label: "The book",
		note: "The brand book, in full."
	},
	{
		to: "/privacy",
		label: "Privacy",
		note: "What we collect and why."
	},
	{
		to: "/terms",
		label: "Terms",
		note: "The basis on which we work."
	}
];
function SitemapPage() {
	const jumpHome = useHomeJump();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-vellum text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "px-6 pt-6 md:px-12 lg:px-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-7xl items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						"aria-label": "Core Marketing, back to the site",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "sm" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex min-h-11 items-center font-sans text-[13px] text-ash transition-[color] duration-150 hover:text-ink",
						children: "Back to the site"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "px-6 pt-16 pb-28 md:px-12 md:pt-24 md:pb-40 lg:px-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex w-fit items-center gap-2 font-sans text-[13px] text-ash transition-[color] duration-150 hover:text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Home"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "headline mt-8",
							children: "Sitemap"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "editorial mt-8 text-ash",
							children: "Every page on the site, and every section of the home page."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-20 grid gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "label text-ash",
									children: "Home"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 flex flex-col gap-1",
									children: SITE_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										hash: item.id,
										className: "inline-flex min-h-11 items-center font-display text-2xl font-normal transition-[opacity] duration-150 hover:opacity-60",
										children: item.label
									}) }, item.id))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "label text-ash",
									children: "What we do"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 flex flex-col gap-1",
									children: STUDIO_INDUSTRIES.map((industry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/what-we-do/$slug",
										params: { slug: industry.id },
										className: "inline-flex min-h-11 items-center font-display text-2xl font-normal transition-[opacity] duration-150 hover:opacity-60",
										children: industry.name
									}) }, industry.id))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "label text-ash",
									children: "Plans"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 flex flex-col gap-1",
									children: STUDIO_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/plans/$planId",
										params: { planId: plan.id },
										className: "inline-flex min-h-11 items-center font-display text-2xl font-normal transition-[opacity] duration-150 hover:opacity-60",
										children: plan.name
									}) }, plan.id))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "label text-ash",
									children: "Elsewhere"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 flex flex-col gap-5",
									children: ELSEWHERE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: item.to,
										className: "group inline-flex items-center gap-2 font-display text-2xl font-normal transition-[opacity] duration-150 hover:opacity-60",
										children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
											className: "size-5 text-ash transition-[color] duration-150 group-hover:text-ink",
											"aria-hidden": "true"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "body-copy-compact mt-1 text-ash",
										children: item.note
									})] }, item.to))
								})] })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { onJump: jumpHome })
		]
	});
}
//#endregion
export { SitemapPage as component };
