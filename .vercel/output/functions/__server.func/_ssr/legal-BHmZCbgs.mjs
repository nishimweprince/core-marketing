import { B as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as CoreLockup, t as BRAND } from "./mark-B04OdnPl.mjs";
import { d as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as Footer } from "./footer-DyMbnIPH.mjs";
import { t as useHomeJump } from "./home-nav-DUKRkmeO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-BHmZCbgs.js
var import_jsx_runtime = require_jsx_runtime();
function LegalPage({ title, intro, updated, sections }) {
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
					className: "mx-auto grid max-w-7xl gap-16 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:sticky lg:top-24",
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
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "editorial mt-8 text-ash",
									children: intro
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-8 font-sans text-xs text-ash",
									children: ["Last updated: ", updated]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
									"aria-label": "On this page",
									className: "mt-10 hidden flex-col gap-1 lg:flex",
									children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `#${s.id}`,
										className: "inline-flex min-h-10 items-center font-sans text-sm text-ash transition-[color] duration-150 hover:text-ink",
										children: s.heading
									}, s.id))
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 lg:col-start-6",
						children: [sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: s.id,
							className: "scroll-mt-24",
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
									className: "text-ink underline underline-offset-4 transition-[opacity] duration-150 hover:opacity-70",
									children: BRAND.email
								}),
								"."
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { onJump: jumpHome })
		]
	});
}
//#endregion
export { LegalPage as t };
