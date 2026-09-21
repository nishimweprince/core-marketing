import { i as __toESM } from "../_runtime.mjs";
import { B as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as VOICE_SAMPLES, a as CoreMarkConstruct, c as IMAGE_RULES, d as PRACTICES, f as SECTIONS, g as VOICE_RULES, h as TYPE_ROLES, i as CoreMark, l as KIT_ZIP, m as TRAITS, n as COLORS, o as CoreWordmark, r as CoreLockup, s as DOWNLOADS, t as BRAND, u as MISUSE, v as cn } from "./mark-B04OdnPl.mjs";
import { a as Download, c as Check, i as Menu, o as Copy, t as X } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-D9UFVnLo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SideRail({ active, onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "fixed top-0 left-0 z-40 hidden h-dvh w-52 flex-col border-r border-vellum/8 bg-ink px-6 py-8 lg:flex",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onJump("cover"),
				className: "text-left text-vellum transition-[opacity] duration-150 hover:opacity-80",
				"aria-label": "Core Marketing, back to cover",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "sm" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mt-12 flex flex-1 flex-col gap-1",
				"aria-label": "Brand book",
				children: SECTIONS.map((s) => {
					const on = active === s.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onJump(s.id),
						className: cn("flex min-h-10 items-center gap-3 rounded-sm px-1 text-left transition-[color] duration-150", on ? "text-vellum" : "text-ash hover:text-limestone"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-xs tabular-nums",
							children: s.num
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-xs",
							children: s.label
						})]
					}, s.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-sans text-xs leading-relaxed text-ash",
				children: [
					"Brand Book",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Volume 01"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-4 font-sans text-xs text-limestone uppercase transition-[color] duration-150 hover:text-vellum",
				children: "The house"
			})
		]
	});
}
function MobileBar({ open, onToggle, onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed top-0 right-0 left-0 z-40 flex h-14 items-center justify-between border-b border-vellum/8 bg-ink/95 px-4 lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onJump("cover"),
			className: "flex items-center gap-2.5 text-vellum",
			"aria-label": "Core Marketing, back to cover",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "sm" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onToggle,
			className: "flex size-11 items-center justify-center text-vellum",
			"aria-expanded": open,
			"aria-label": open ? "Close index" : "Open index",
			children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
		})]
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-30 overflow-y-auto bg-ink px-6 pt-20 pb-12 lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "label text-limestone",
			children: "Index"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mt-8 flex flex-col",
			"aria-label": "Brand book",
			children: [SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onJump(s.id),
				className: "flex min-h-14 items-baseline justify-between border-b border-vellum/8 text-left text-vellum",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl font-normal",
					children: s.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-sans text-xs tabular-nums text-ash",
					children: s.num
				})]
			}, s.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 flex min-h-14 items-center font-display text-2xl font-normal text-limestone",
				children: "The house"
			})]
		})]
	}) : null] });
}
async function copyValue(label, value) {
	try {
		await navigator.clipboard.writeText(value);
		toast(label, { description: `${value} copied` });
	} catch {
		toast("Copy failed", { description: "Select and copy instead." });
	}
}
function Chapter({ id, num, kicker, title, lede, tone = "paper", children }) {
	const ink = tone === "ink";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("relative scroll-mt-14 px-6 py-20 md:px-14 md:py-28 lg:scroll-mt-0 lg:px-20 lg:py-32", ink ? "bg-ink text-vellum" : "bg-vellum text-ink"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: cn("label", ink ? "text-limestone" : "text-ash"),
					children: [
						num,
						" · ",
						kicker
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-3xl font-display text-4xl font-light leading-tight md:text-6xl",
					children: title
				}),
				lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mt-6 max-w-xl text-base leading-relaxed md:text-lg", ink ? "text-limestone" : "text-ash"),
					children: lede
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 md:mt-16",
					children
				})
			]
		})
	});
}
function CopyChip({ label, value, invert = false }) {
	const [done, setDone] = (0, import_react.useState)(false);
	async function onCopy() {
		await copyValue(label, value);
		setDone(true);
		window.setTimeout(() => setDone(false), 1400);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onCopy,
		className: cn("inline-flex min-h-11 items-center gap-2 rounded-sm px-3 py-2 font-sans text-xs transition-[background-color,color] duration-150 ease-out", invert ? "text-limestone hover:bg-vellum/5 hover:text-vellum" : "text-ash hover:bg-ink/5 hover:text-ink"),
		"aria-label": `Copy ${label} ${value}`,
		children: [done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums",
			children: value
		})]
	});
}
function Rule({ invert = false, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-px w-full", invert ? "bg-vellum/12" : "bg-ink/12", className),
		"aria-hidden": "true"
	});
}
function DownloadLink({ href, file, className, children }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function save() {
		if (busy) return;
		setBusy(true);
		try {
			const res = await fetch(href);
			if (!res.ok) throw new Error("missing");
			const blob = await res.blob();
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = file;
			a.rel = "noopener";
			a.style.display = "none";
			document.body.appendChild(a);
			a.click();
			a.remove();
			window.setTimeout(() => URL.revokeObjectURL(url), 4e3);
			toast.success(`Saved ${file}`);
		} catch {
			if (!window.open(href, "_blank", "noopener,noreferrer")) toast.error("Allow downloads in the browser, or use Save As from the new tab.");
			else toast.message("File opened in a new tab. Save it from there.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: save,
		disabled: busy,
		className: cn(className, busy && "opacity-60"),
		children
	});
}
function BusinessCard({ side, className }) {
	if (side === "front") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex aspect-[3.5/2] w-full flex-col justify-between rounded-md bg-ink p-6 text-vellum md:p-7", className),
		style: { boxShadow: "var(--shadow-border)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "md" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex aspect-[3.5/2] w-full flex-col justify-between rounded-md bg-vellum p-6 text-ink md:p-7", className),
		style: { boxShadow: "var(--shadow-border)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-xl font-normal leading-none",
			children: "Studio"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 font-sans text-[11px] leading-relaxed text-ash",
			children: [
				"By appointment",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"Kigali"
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-sans text-[11px] text-ash",
				children: [
					"studio@coremarketing.rw",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"coremarketing.rw"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreMark, {
				className: "size-6 text-ink",
				field: "vellum"
			})]
		})]
	});
}
function Letterhead({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex aspect-[210/297] w-full flex-col rounded-md bg-vellum p-8 text-ink md:p-10", className),
		style: { boxShadow: "var(--shadow-border)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, {
					size: "sm",
					field: "vellum"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-right font-sans text-[10px] leading-relaxed text-ash",
					children: [
						"Core Marketing",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"By appointment · Kigali",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"studio@coremarketing.rw"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 flex-1 space-y-3",
				children: Array.from({ length: 9 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-px bg-ink/10",
					style: { width: `${i === 8 ? 46 : 100}%` }
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-[8px]",
					children: "Confidential"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-[10px] text-ash uppercase",
					children: "coremarketing.rw"
				})]
			})
		]
	});
}
function Envelope({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative flex aspect-[1.8/1] w-full items-end rounded-md bg-vellum p-6 text-ink md:p-8", className),
		style: { boxShadow: "var(--shadow-border)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-0 h-1/2 origin-top",
				style: {
					background: "linear-gradient(to bottom, color-mix(in oklab, var(--color-vellum) 92%, var(--color-ink)), var(--color-vellum))",
					clipPath: "polygon(0 0, 100% 0, 50% 78%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreMark, {
				className: "relative size-7",
				field: "vellum"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative ml-auto text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreWordmark, { compact: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-sans text-[10px] text-ash uppercase",
					children: "By appointment · Kigali"
				})]
			})
		]
	});
}
function SocialPost({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex aspect-[4/5] w-full flex-col justify-between rounded-md bg-ink p-7 text-vellum", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreMark, { className: "size-7 text-vellum" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-limestone",
					children: "01 / Presence"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl font-normal leading-tight md:text-4xl",
				children: "The architecture of attention."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-sans text-xs leading-relaxed text-limestone",
				children: "Strategy, presence, content, and promotion, held as one system."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-[10px] text-ash uppercase",
				children: "Core Marketing"
			})
		]
	});
}
function SocialStory({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative flex aspect-[9/16] w-full flex-col overflow-hidden rounded-md bg-ink text-vellum", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/brand/aperture.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-70"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-full flex-col justify-between p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreMark, { className: "size-7 text-vellum" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-limestone",
					children: "The house"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 font-display text-3xl font-normal leading-tight",
					children: [
						"Fewer partners.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Further work."
					]
				})] })]
			})
		]
	});
}
function LinkedInBanner({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative flex aspect-[4/1] w-full items-center overflow-hidden rounded-md bg-ink px-8 text-vellum", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/brand/gallery.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-35"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/55" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "md" })
			})
		]
	});
}
function TitleSlide({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex aspect-video w-full flex-col justify-between rounded-md bg-ink p-8 text-vellum md:p-10", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreWordmark, { compact: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-limestone",
					children: "Confidential"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label text-limestone",
				children: "A conversation"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 max-w-lg font-display text-3xl font-light leading-tight md:text-5xl",
				children: "Presence, built as architecture."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-[10px] text-ash uppercase",
				children: "Core Marketing · Volume 01"
			})
		]
	});
}
function EmailSignature({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-md bg-vellum p-6 text-ink md:p-8", className),
		style: { boxShadow: "var(--shadow-border)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreMark, {
				className: "size-8 shrink-0",
				field: "vellum"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl leading-none",
						children: "Amara Nkusi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-xs text-ash",
						children: "Partner, Strategy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-px w-12 bg-ink/15" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-sans text-xs leading-relaxed text-ash",
						children: [
							"studio@coremarketing.rw",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"coremarketing.rw",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Kigali · By appointment"
						]
					})
				]
			})]
		})
	});
}
function WebChrome({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-lg bg-night", className),
		style: { boxShadow: "var(--shadow-dark)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 border-b border-vellum/8 px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-vellum/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-vellum/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-vellum/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-3 flex-1 rounded-sm bg-ink px-3 py-1.5 font-sans text-[10px] text-ash",
					children: "coremarketing.rw"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-video overflow-hidden bg-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/brand/gallery.jpg",
					alt: "",
					className: "absolute inset-0 size-full object-cover opacity-50"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-full flex-col justify-end p-8 md:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "lg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-sm font-sans text-sm text-limestone",
						children: "The architecture of attention."
					})]
				})
			]
		})]
	});
}
function SignagePlaque({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden rounded-lg", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/brand/limestone.jpg",
			alt: "Limestone plaster field",
			className: "brand-photo aspect-[4/3] w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-36 items-center justify-center rounded-sm bg-ink/90 text-vellum md:size-44",
				style: { boxShadow: "0 20px 50px -20px rgba(12,11,10,0.7)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreMark, { className: "size-16 text-vellum md:size-20" })
			})
		})]
	});
}
function BrandBook() {
	const [active, setActive] = (0, import_react.useState)("cover");
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const els = SECTIONS.map((s) => s.id).map((id) => document.getElementById(id)).filter((el) => Boolean(el));
		const io = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-35% 0px -50% 0px",
			threshold: [
				.1,
				.3,
				.6
			]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideRail, {
				active,
				onJump: jump
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBar, {
				open,
				onToggle: () => setOpen((v) => !v),
				onJump: jump
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-52",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, { onOpen: () => jump("house") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Position, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Colour, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Voice, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Applications, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(System, {})
				]
			})
		]
	});
}
function Cover({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cover",
		className: "relative flex min-h-dvh flex-col overflow-hidden bg-ink pt-14 lg:pt-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-h-dvh lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col justify-between px-6 py-10 md:px-14 lg:px-16 lg:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rise label relative text-limestone",
						children: [
							BRAND.bookTitle,
							" · ",
							BRAND.edition
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "sr-only",
								children: "Core Marketing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rise rise-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "hero" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "rise rise-3 mt-8 font-sans text-xs font-medium text-limestone uppercase",
								children: [BRAND.origin, " · A marketing studio"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rise rise-4 mt-6 max-w-md font-display text-4xl font-light text-vellum md:text-5xl",
								children: "Presence, made inevitable."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise rise-5 relative flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-sans text-xs leading-relaxed text-ash",
							children: [
								"Established ",
								BRAND.year,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								BRAND.origin,
								" · By appointment"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadLink, {
									href: "/brand/kit/05-brand-book/Core-Marketing-Brand-Book.pdf",
									file: "Core-Marketing-Brand-Book.pdf",
									className: "inline-flex min-h-11 items-center bg-vellum px-5 font-sans text-[13px] font-medium text-ink transition-[opacity] duration-150 hover:opacity-90",
									children: "Download the brand book"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadLink, {
									href: KIT_ZIP.href,
									file: KIT_ZIP.file,
									className: "inline-flex min-h-11 items-center border border-vellum/20 px-5 font-sans text-[13px] font-medium text-vellum transition-[border-color,background-color] duration-150 hover:border-vellum/40 hover:bg-vellum/5",
									children: "Download the kit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: onOpen,
									className: "inline-flex min-h-11 items-center border border-vellum/20 px-5 font-sans text-[13px] font-medium text-vellum transition-[border-color,background-color] duration-150 hover:border-vellum/40 hover:bg-vellum/5",
									children: "Open the book"
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative hidden min-h-[48vh] lg:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/brand/aperture.jpg",
					alt: "A circular aperture of light held in a dark opening, the core.",
					className: "absolute inset-0 size-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/15" })]
			})]
		})
	});
}
function House() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
		id: "house",
		num: "01",
		kicker: "The House",
		title: "The work that remains.",
		lede: "Core is not a department and not a campaign. It is the structure a brand stands on when the noise is stripped away.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-12 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed md:text-xl",
						children: "We partner with a small number of companies who already know they are not average, and who want their public presence to finally match that fact."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 leading-relaxed text-ash",
						children: "Digital marketing, social, promotion, and content are usually bought as separate trades. That is how brands become loud in one place and absent in another. Core holds them as one architecture: the argument, the channels, the evidence, and the amplification. Structure first. Then signal. Then scale."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 leading-relaxed text-ash",
						children: "We are a house, not a mill. Senior rooms. Retained partnerships. A standard that does not drop when the calendar gets full. Based in Kigali. Working wherever the work is serious."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/brand/studio.jpg",
					alt: "A quiet studio at dusk, walnut desk, a single lamp, the city beyond.",
					className: "brand-photo aspect-[4/5] w-full rounded-md object-cover"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-20 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4",
			children: TRAITS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "bg-vellum px-6 py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl font-normal",
					children: t.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-ash",
					children: t.body
				})]
			}, t.name))
		})]
	});
}
function Position() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
		id: "position",
		num: "02",
		kicker: "Position",
		title: "A house of record for ambitious brands.",
		lede: "High-ticket work requires a high-ticket standard. We do not rent attention. We build it.",
		tone: "ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg bg-night p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label text-limestone",
							children: "For"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-2xl font-normal",
							children: "Founders, houses, and professional practices that already sell at a premium."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg bg-night p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label text-limestone",
							children: "Does"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-2xl font-normal",
							children: "Architects digital presence, strategy through promotion, as a single system."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg bg-night p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label text-limestone",
							children: "Unlike"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-2xl font-normal",
							children: "Volume agencies, freelance scatter, and work that looks busy without becoming inevitable."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-limestone",
					children: "Practices"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 divide-y divide-vellum/10 border-y border-vellum/10",
					children: PRACTICES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid gap-4 py-8 md:grid-cols-12 md:items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl font-normal",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ash",
								children: p.subtitle
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-limestone md:col-span-7 md:text-base",
							children: p.body
						})]
					}, p.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-16 max-w-2xl font-display text-2xl font-normal text-vellum md:text-3xl",
				children: "Engagements begin by conversation. We take the work that can be done properly, and we decline the rest."
			})
		]
	});
}
function Mark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
		id: "mark",
		num: "03",
		kicker: "The Mark",
		title: "Ivory. Stone. Juniper.",
		lede: "The mark sits to the left of the name. CORE is the larger line, semibold, tracked. MARKETING sits beneath it, smaller, regular, in limestone.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex aspect-square items-center justify-center rounded-lg bg-ink text-vellum",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreMark, { className: "w-2/5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex aspect-square items-center justify-center rounded-lg bg-ink/5 text-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreMarkConstruct, { className: "w-2/5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex min-h-44 items-center justify-center rounded-lg bg-ink px-8 py-12 text-vellum",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "lg" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 text-sm text-ash md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Primary mark: on ink. Ivory outer, stone inner, juniper nucleus. Use this digitally, in film, and on dark print." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Construction. Clear space equals one core-diameter on every side. Minimum size: 20px digital, 8mm print. The nucleus is always Juniper, except in single-colour reproduction." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-6 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-ink p-8 text-vellum",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label text-limestone",
							children: "Horizontal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "md" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-ink p-8 text-vellum",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label text-limestone",
							children: "Stacked"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, {
								stacked: true,
								size: "md"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-ink p-8 text-vellum",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label text-limestone",
							children: "Wordmark"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreWordmark, {})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label",
					children: "Fields"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-2 gap-3 md:grid-cols-4",
					children: [
						{
							bg: "bg-ink text-vellum",
							label: "On Ink",
							field: "ink"
						},
						{
							bg: "bg-vellum text-ink",
							label: "On Vellum",
							field: "vellum"
						},
						{
							bg: "bg-night text-vellum",
							label: "On Night",
							field: "ink"
						},
						{
							bg: "bg-limestone text-ink",
							label: "Mono on Limestone",
							field: "mono"
						}
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("flex aspect-square flex-col items-center justify-center gap-6 rounded-md", f.bg),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreMark, {
							className: "w-1/3",
							field: f.field
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-xs opacity-70",
							children: f.label
						})]
					}, f.label))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label",
					children: "Misuse"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-3 md:grid-cols-2",
					children: MISUSE.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 rounded-md border border-ink/10 px-5 py-4 text-sm leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 block size-1.5 shrink-0 rounded-full bg-ink/40" }), rule]
					}, rule))
				})]
			})
		]
	});
}
function Colour() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
		id: "colour",
		num: "04",
		kicker: "Colour",
		title: "Six named colours. Juniper is used once.",
		lede: "The palette is a material specification, not a moodboard. Ink and Vellum do the work. Limestone is stone. Juniper is the nucleus, reserved for the mark.",
		tone: "ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: COLORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: cn("flex flex-col justify-between gap-8 rounded-lg p-6 md:min-h-44 md:flex-row md:items-end", c.swatch, c.tall && "min-h-56 md:min-h-64", c.invertChip && "ring-1 ring-vellum/12"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl font-light md:text-5xl",
						children: c.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-sm leading-relaxed opacity-80",
						children: c.role
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyChip, {
								label: c.name,
								value: c.hex,
								invert: c.invertChip
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-sans text-xs tabular-nums opacity-70",
								children: ["RGB ", c.rgb]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden font-sans text-xs tabular-nums opacity-70 sm:inline",
								children: ["CMYK ", c.cmyk]
							})
						]
					})]
				}, c.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-3 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Combo, {
						a: "Vellum",
						aBg: "bg-vellum text-ink",
						b: "Ink",
						note: "Print, paper, light UI"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Combo, {
						a: "Ink",
						aBg: "bg-ink text-vellum",
						b: "Vellum",
						note: "Digital, film, dark print"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Combo, {
						a: "Ink",
						aBg: "bg-ink text-limestone",
						b: "Limestone",
						note: "Captions and hairlines on dark"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-ash",
				children: "Never set Limestone type on Vellum, or Ash type on Night. Contrast is part of the brand."
			})
		]
	});
}
function Combo({ a, aBg, b, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-md p-6", aBg),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-display text-2xl font-normal",
			children: [
				a,
				" / ",
				b
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-xs opacity-70",
			children: note
		})]
	});
}
function Type() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
		id: "type",
		num: "05",
		kicker: "Type",
		title: "A serif for the name. A sans for the work.",
		lede: "Cormorant Garamond carries the voice, light, editorial, unhurried. Manrope carries the information. Two families. No substitutes.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label",
						children: "Display"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-6xl leading-none font-light md:text-8xl",
						children: "Aa"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-display text-3xl font-normal",
						children: "Cormorant Garamond"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-display text-xl leading-snug",
						children: [
							"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"abcdefghijklmnopqrstuvwxyz",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"1234567890"
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label",
						children: "Sans"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-sans text-6xl leading-none font-medium md:text-8xl",
						children: "Aa"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-sans text-2xl font-medium",
						children: "Manrope"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-sans text-lg leading-snug",
						children: [
							"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"abcdefghijklmnopqrstuvwxyz",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"1234567890"
						]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 overflow-hidden rounded-lg border border-ink/10",
				children: TYPE_ROLES.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("grid gap-4 p-6 md:grid-cols-12 md:items-baseline", i > 0 && "border-t border-ink/10"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label md:col-span-2",
							children: t.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("md:col-span-7", t.role === "Display" && "font-display text-5xl leading-none font-light md:text-6xl", t.role === "Headline" && "font-display text-3xl font-normal md:text-4xl", t.role === "Deck" && "text-base leading-relaxed", t.role === "Label" && "label text-ash"),
							children: t.sample
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs leading-relaxed text-ash md:col-span-3 md:text-right",
							children: [
								t.family,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								t.size,
								" · ",
								t.tracking
							]
						})
					]
				}, t.role))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "mt-16 border-l border-ink/15 pl-6 md:pl-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-light md:text-5xl",
					children: "Presence is not volume. It is the feeling that a brand was inevitable."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 label",
					children: "Pull quote: Cormorant"
				})]
			})
		]
	});
}
function Voice() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
		id: "voice",
		num: "06",
		kicker: "Voice",
		title: "Write as if the room is already quiet.",
		lede: "We sound like a well-cut suit: considered, warm at close range, never performing. The work is described. It is never hyped.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-px bg-ink/10 md:grid-cols-2",
			children: VOICE_RULES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid gap-6 bg-vellum p-6 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label",
					children: "Do"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed",
					children: r.do
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label",
					children: "Do not"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-ash",
					children: r.dont
				})] })]
			}, r.do))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label",
				children: "In practice"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 divide-y divide-ink/10 border-y border-ink/10",
				children: VOICE_SAMPLES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "grid gap-6 py-8 md:grid-cols-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label md:col-span-2",
							children: s.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-ash line-through decoration-ink/30 md:col-span-5",
							children: s.wrong
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed md:col-span-5",
							children: s.right
						})
					]
				}, s.label))
			})]
		})]
	});
}
function Image() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
		id: "image",
		num: "07",
		kicker: "Image",
		title: "Photograph toward the palette.",
		lede: "Imagery should feel collected, not produced. Architecture, paper, stone, cloth. One light. Plenty of air.",
		tone: "ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 md:grid-cols-2",
			children: [
				{
					src: "/brand/gallery.jpg",
					alt: "A private gallery: limestone, oak, a shaft of afternoon light.",
					caption: "Rooms, not sets"
				},
				{
					src: "/brand/stationery.jpg",
					alt: "Cream cotton paper, a black fountain pen, linen ribbon on dark cloth.",
					caption: "Materials, close"
				},
				{
					src: "/brand/city.jpg",
					alt: "A stone and glass building at blue hour, one warm interior light.",
					caption: "The city, held"
				},
				{
					src: "/brand/desk.jpg",
					alt: "Envelope, letter, and a black seal on honed stone.",
					caption: "The correspondence"
				}
			].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.src,
					alt: p.alt,
					className: "brand-photo aspect-[3/2] w-full rounded-md object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-limestone",
						children: p.caption
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label text-ash",
						children: "Core · Image"
					})]
				})]
			}, p.src))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4",
			children: IMAGE_RULES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl font-normal",
				children: r.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-ash",
				children: r.body
			})] }, r.title))
		})]
	});
}
function Applications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
		id: "applications",
		num: "08",
		kicker: "Applications",
		title: "How the brand occupies the world.",
		lede: "Stationery, screens, and spaces. Every surface should feel like the same house, not a campaign wearing a logo.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusinessCard, { side: "front" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 text-sm text-ash",
					children: "Calling card: face. Ink field, reverse mark."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusinessCard, { side: "back" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 text-sm text-ash",
					children: "Calling card: reverse. Vellum, studio line."
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid items-start gap-10 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Letterhead, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mt-3 text-sm text-ash",
						children: "Letterhead. A4. Quiet header, open field."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-10 lg:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Envelope, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mt-3 text-sm text-ash",
						children: "Envelope. Mark at the corner; address as a whisper."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmailSignature, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mt-3 text-sm text-ash",
						children: "Email signature. Name in serif, details in sans."
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label",
					children: "Social"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-6 md:grid-cols-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "md:col-span-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialPost, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "mt-3 text-sm text-ash",
								children: "Feed: 4:5. One idea. No collage."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "md:col-span-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialStory, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "mt-3 text-sm text-ash",
								children: "Story: 9:16. Image as architecture."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "md:col-span-5 flex flex-col gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkedInBanner, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-ash",
									children: "LinkedIn cover. Lockup, left. Photography, held back."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleSlide, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-ash",
									children: "Presentation title. 16:9. Confidential by default."
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WebChrome, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 text-sm text-ash",
					children: "Digital presence. The site is a room, not a funnel graphic."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignagePlaque, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 text-sm text-ash",
					children: "Plaque. Mark only. Limestone field, Ink plate."
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-16 overflow-hidden rounded-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/reception.jpg",
						alt: "A dark plaster reception with a recessed niche, ready for the mark.",
						className: "brand-photo aspect-video w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "absolute bottom-6 left-6 label text-vellum",
						children: "Environmental: niche, waiting"
					})
				]
			})
		]
	});
}
function System() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "system",
		className: "relative scroll-mt-14 bg-ink text-vellum lg:scroll-mt-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-6 py-20 md:px-14 md:py-28 lg:px-20 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-limestone",
						children: "09 · System"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 max-w-3xl font-display text-4xl font-light leading-tight md:text-6xl",
						children: "Rules that keep the house standing."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-base leading-relaxed text-limestone md:text-lg",
						children: "Spacing, files, and the closing note. This is the kit, not a mood, a specification."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 grid gap-6 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-lg bg-night p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "label text-limestone",
										children: "Grid"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-display text-2xl font-normal",
										children: "Twelve columns on desktop. Four on mobile. Margins generous."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-relaxed text-ash",
										children: "Align to the spine. Do not invent a second grid for campaigns."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-lg bg-night p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "label text-limestone",
										children: "Space"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-display text-2xl font-normal",
										children: "4, 8, 12, 16, 24, 32, 48, 64. Air is a brand colour."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-relaxed text-ash",
										children: "If a layout feels busy, remove an element before you add a rule."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-lg bg-night p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "label text-limestone",
										children: "Motion"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-display text-2xl font-normal",
										children: "150–250ms. Ease out. Opacity and transform only."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-relaxed text-ash",
										children: "No bounce, no parallax theatre, no animation that delays the work."
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label text-limestone",
								children: "Downloads"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-sm leading-relaxed text-ash",
								children: "The book as a 16-page A4 PDF. Send this to stakeholders. The mark alone. The lockup with words. Editable business cards (open the SVG, change the name). Letterhead and envelope. Or take the full kit."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DownloadLink, {
								href: KIT_ZIP.href,
								file: KIT_ZIP.file,
								className: "mt-8 flex min-h-16 w-full items-center justify-between gap-4 rounded-md bg-vellum px-6 text-left text-ink transition-[opacity] duration-150 hover:opacity-90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-sans text-sm font-semibold uppercase",
									children: KIT_ZIP.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block font-sans text-[13px] text-ash",
									children: "Logos, lockups, cards, stationery, book, tokens"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-5 shrink-0" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid gap-10 md:grid-cols-2",
								children: DOWNLOADS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "label text-limestone",
									children: g.group
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid gap-2",
									children: g.items.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DownloadLink, {
										href: d.href,
										file: d.file,
										className: "flex min-h-12 w-full items-center justify-between gap-3 rounded-md border border-vellum/10 bg-night px-4 text-left text-sm text-vellum transition-[border-color,background-color] duration-150 hover:border-vellum/25 hover:bg-vellum/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4 shrink-0 text-limestone" })]
									}, d.file))
								})] }, g.group))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {
						invert: true,
						className: "mt-20"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-20 grid gap-12 lg:grid-cols-2 lg:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "lg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-10 max-w-md font-display text-3xl font-normal",
							children: BRAND.tagline
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-sans text-sm leading-relaxed text-limestone",
								children: [
									BRAND.email,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									BRAND.web,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									BRAND.origin,
									" · By appointment"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-8 text-xs text-ash uppercase",
								children: [
									"Est. ",
									BRAND.year,
									" · ",
									BRAND.edition
								]
							})]
						})]
					})
				]
			})
		})
	});
}
function BookPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandBook, {});
}
//#endregion
export { BookPage as component };
