import { v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BRAND } from "./mark-B04OdnPl.mjs";
import { t as SiteFrame } from "./frame-B8uR3J0j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-DelFEp46.js
var import_jsx_runtime = require_jsx_runtime();
function LegalPage({ title, intro, updated, sections }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, {
		solid: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-vellum px-6 pt-20 pb-28 text-ink md:px-12 md:pt-28 md:pb-40 lg:px-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-16 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:sticky lg:top-28",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "link text-ash",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "headline mt-8",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "editorial mt-8 text-ash",
								children: intro
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-8 font-sans text-xs text-ash",
								children: ["Last updated ", updated]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								"aria-label": "On this page",
								className: "mt-10 hidden flex-col lg:flex",
								children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `#${s.id}`,
									className: "nav-link inline-flex min-h-10 items-center text-sm text-ash",
									children: s.heading
								}, s.id))
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 lg:col-start-6",
					children: [sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: s.id,
						className: "scroll-mt-28",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-normal md:text-[1.75rem]",
								children: s.heading
							}),
							s.paragraphs.map((text) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "editorial mt-6 text-ash",
								children: text
							}, text.slice(0, 48))),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-16 md:h-20",
								"aria-hidden": "true"
							})
						]
					}, s.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-sans text-sm leading-relaxed text-ash",
						children: [
							"Questions about any of this? Write to",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${BRAND.email}`,
								className: "link text-ink",
								children: BRAND.email
							}),
							"."
						]
					})]
				})]
			})
		})
	});
}
//#endregion
export { LegalPage as t };
