import { v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as SITE_NAV } from "./mark-B04OdnPl.mjs";
import { d as STUDIO_PLANS, u as STUDIO_INDUSTRIES } from "./router-CgnfWR8m.mjs";
import { t as SiteFrame } from "./frame-gHxYmb8u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sitemap-CcC-cEcE.js
var import_jsx_runtime = require_jsx_runtime();
var ELSEWHERE = [
	{
		to: "/book",
		label: "The book"
	},
	{
		to: "/privacy",
		label: "Privacy"
	},
	{
		to: "/terms",
		label: "Terms"
	}
];
var ENTRY = "inline-flex min-h-11 items-center font-display text-2xl font-normal transition-[color] duration-150 hover:text-juniper";
function SitemapPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, {
		solid: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-vellum px-6 pt-20 pb-28 text-ink md:px-12 md:pt-28 md:pb-40 lg:px-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "headline",
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
									className: ENTRY,
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
									className: ENTRY,
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
									className: ENTRY,
									children: plan.name
								}) }, plan.id))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label text-ash",
								children: "Elsewhere"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 flex flex-col gap-1",
								children: ELSEWHERE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: ENTRY,
									children: item.label
								}) }, item.to))
							})] })
						]
					})
				]
			})
		})
	});
}
//#endregion
export { SitemapPage as component };
