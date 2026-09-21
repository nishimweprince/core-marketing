import { B as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as SITE_NAV, r as CoreLockup, t as BRAND } from "./mark-B04OdnPl.mjs";
import { u as STUDIO_INDUSTRIES } from "./router-BjdLsA6f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/footer-DyMbnIPH.js
var import_jsx_runtime = require_jsx_runtime();
var LINK = "inline-flex min-h-11 items-center font-sans text-sm text-ash transition-[color] duration-150 hover:text-limestone";
function Footer({ onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-night/60 px-6 py-20 text-vellum md:px-12 md:py-24 lg:px-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-xs font-display text-xl font-normal",
						children: BRAND.tagline
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-limestone",
						children: "Site"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mt-5 flex flex-col gap-1",
						"aria-label": "Footer",
						children: [SITE_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onJump(item.id),
							className: LINK,
							children: item.label
						}, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: LINK,
							children: "The book"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-limestone",
						children: "Industries"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 flex flex-col gap-1",
						children: STUDIO_INDUSTRIES.map((industry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/what-we-do/$slug",
							params: { slug: industry.id },
							className: LINK,
							children: industry.name
						}) }, industry.id))
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
							className: LINK,
							children: "Brand book: PDF"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-16 flex max-w-7xl flex-wrap items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-sans text-xs text-ash",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					BRAND.name,
					" · ",
					BRAND.origin
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-wrap items-center gap-6",
				"aria-label": "Legal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/sitemap",
						className: "font-sans text-xs text-ash transition-[color] duration-150 hover:text-limestone",
						children: "Sitemap"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "font-sans text-xs text-ash transition-[color] duration-150 hover:text-limestone",
						children: "Privacy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "font-sans text-xs text-ash transition-[color] duration-150 hover:text-limestone",
						children: "Terms"
					})
				]
			})]
		})]
	});
}
//#endregion
export { Footer as t };
