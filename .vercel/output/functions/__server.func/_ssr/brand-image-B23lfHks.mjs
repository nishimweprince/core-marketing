import { i as __toESM } from "../_runtime.mjs";
import { R as require_react, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as cn } from "./mark-B04OdnPl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brand-image-B23lfHks.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
//#endregion
export { BrandImage as t };
