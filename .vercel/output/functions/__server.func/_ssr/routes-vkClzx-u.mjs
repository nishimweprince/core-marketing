import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { C as TRAITS, D as WORK, O as cn, _ as RETAINERS, b as SITE_NAV, d as MEASURES, g as QUESTIONS, h as ProgressBar, l as INSIGHT, m as PRACTICES, r as CoreLockup, t as BRAND, v as ROOMS, x as STEPS } from "./nav-CzN1HY-M.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-vkClzx-u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ROOMS_OPTIONS = [
	{
		value: "",
		label: "Select a room"
	},
	...ROOMS.map((r) => ({
		value: r.id,
		label: r.name
	})),
	{
		value: "other",
		label: "Another house"
	}
];
var RETAINER_OPTIONS = [{
	value: "",
	label: "Not yet decided"
}, ...RETAINERS.map((r) => ({
	value: r.id,
	label: `${r.latin} — ${r.means}`
}))];
function Inquiry() {
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		if (busy) return;
		const data = new FormData(e.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const house = String(data.get("house") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const room = String(data.get("room") ?? "").trim();
		const retainer = String(data.get("retainer") ?? "").trim();
		const note = String(data.get("note") ?? "").trim();
		if (!name || !email) {
			toast.error("A name and an email are required.");
			return;
		}
		const roomLabel = ROOMS_OPTIONS.find((o) => o.value === room)?.label ?? room;
		const retainerLabel = RETAINER_OPTIONS.find((o) => o.value === retainer)?.label ?? retainer;
		const subject = `Conversation — ${house || name}`;
		const body = [
			`Name: ${name}`,
			`House: ${house || "—"}`,
			`Email: ${email}`,
			`Room: ${roomLabel || "—"}`,
			`Retainer: ${retainerLabel || "Not yet decided"}`,
			"",
			note || "(no note)"
		].join("\n");
		const href = `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		setBusy(true);
		window.location.href = href;
		window.setTimeout(() => {
			setBusy(false);
			setSent(true);
			toast.success("Your mail client should open. If it does not, write us directly.");
		}, 400);
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-vellum/12 pt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl font-light tracking-display italic",
				children: "The letter is with you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 max-w-md text-sm leading-relaxed text-limestone",
				children: [
					"If the mail window did not open, write directly to ",
					BRAND.email,
					". We read every note. We do not always take the work."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${BRAND.email}`,
				className: "mt-8 inline-flex min-h-11 items-center bg-vellum px-5 font-sans text-xs font-medium tracking-label text-ink uppercase transition-[opacity] duration-150 hover:opacity-90 active:not-disabled:scale-[0.96]",
				children: BRAND.email
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-8",
		noValidate: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 md:grid-cols-2",
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
						children: "House"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field mt-4",
						name: "house",
						autoComplete: "organization",
						placeholder: "Hotel, villa, motor, property",
						suppressHydrationWarning: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block md:col-span-2",
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
						children: "Room"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "field mt-4",
						name: "room",
						defaultValue: "",
						suppressHydrationWarning: true,
						children: ROOMS_OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: o.value,
							className: "bg-ink text-vellum",
							children: o.label
						}, o.value || "none"))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label text-limestone",
						children: "Retainer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "field mt-4",
						name: "retainer",
						defaultValue: "",
						suppressHydrationWarning: true,
						children: RETAINER_OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: o.value,
							className: "bg-ink text-vellum",
							children: o.label
						}, o.value || "none"))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label text-limestone",
						children: "Note"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: "field mt-4 min-h-32 resize-y",
						name: "note",
						rows: 4,
						suppressHydrationWarning: true
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "max-w-sm text-xs leading-relaxed text-ash",
				children: [
					"Opens a letter to ",
					BRAND.email,
					". Fees are discussed in the first conversation. We do not send decks unasked."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: busy,
				className: "inline-flex min-h-11 items-center bg-vellum px-6 font-sans text-xs font-medium tracking-label text-ink uppercase transition-[opacity] duration-150 hover:opacity-90 active:not-disabled:scale-[0.96] disabled:opacity-60",
				children: busy ? "Opening…" : "Request a conversation"
			})]
		})]
	});
}
function Studio() {
	const [active, setActive] = (0, import_react.useState)("cover");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const els = [
			"cover",
			"rooms",
			"work",
			"retainers",
			"house",
			"conversation"
		].map((id) => document.getElementById(id)).filter((el) => Boolean(el));
		const io = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-30% 0px -50% 0px",
			threshold: [.1, .35]
		});
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const root = document.documentElement;
			const max = root.scrollHeight - root.clientHeight;
			setProgress(max > 0 ? root.scrollTop / max : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, { value: progress }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				active,
				open,
				onToggle: () => setOpen((v) => !v),
				onJump: jump
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { onJump: jump }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Measures, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Insight, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rooms, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Practices, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Retainers, { onJump: jump }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Approach, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Questions, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Close, { onJump: jump }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Conversation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { onJump: jump })
		]
	});
}
function Header({ active, open, onToggle, onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 right-0 left-0 z-40 border-b border-vellum/8 bg-ink/95",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:h-16 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onJump("cover"),
					className: "text-left text-vellum transition-[opacity] duration-150 hover:opacity-80",
					"aria-label": "Core Marketing, back to cover",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "sm" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Studio",
					children: [
						SITE_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onJump(item.id),
							className: cn("inline-flex min-h-11 items-center px-3 font-sans text-xs tracking-wide transition-[color] duration-150", active === item.id ? "text-vellum" : "text-ash hover:text-limestone"),
							children: item.label
						}, item.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "inline-flex min-h-11 items-center px-3 font-sans text-xs tracking-wide text-ash transition-[color] duration-150 hover:text-limestone",
							children: "The book"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onJump("conversation"),
							className: "ml-2 inline-flex min-h-11 items-center bg-vellum px-4 font-sans text-xs font-medium tracking-label text-ink uppercase transition-[opacity] duration-150 hover:opacity-90 active:not-disabled:scale-[0.96]",
							children: "Conversation"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onToggle,
					className: "flex size-11 items-center justify-center text-vellum lg:hidden",
					"aria-expanded": open,
					"aria-label": open ? "Close menu" : "Open menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		})
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-30 overflow-y-auto bg-ink px-6 pt-20 pb-12 lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "label text-limestone",
			children: "Index"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mt-8 flex flex-col",
			"aria-label": "Studio",
			children: [
				SITE_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onJump(item.id),
					className: "flex min-h-14 items-center border-b border-vellum/8 text-left font-display text-2xl font-light tracking-display text-vellum",
					children: item.label
				}, item.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/book",
					className: "flex min-h-14 items-center border-b border-vellum/8 font-display text-2xl font-light tracking-display text-vellum",
					onClick: () => onToggle(),
					children: "The book"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onJump("conversation"),
					className: "mt-8 inline-flex min-h-12 items-center justify-center bg-vellum font-sans text-xs font-medium tracking-label text-ink uppercase",
					children: "Request a conversation"
				})
			]
		})]
	}) : null] });
}
function Hero({ onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cover",
		className: "relative bg-ink pt-14 md:pt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-h-[calc(100dvh-3.5rem)] lg:min-h-dvh lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative order-2 flex flex-col justify-between px-6 py-10 md:px-12 lg:order-1 lg:px-16 lg:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-construct pointer-events-none absolute inset-0 opacity-50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rise label relative text-limestone",
						children: [BRAND.origin, " · By appointment"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "sr-only",
								children: "Core Marketing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rise rise-2 max-w-lg font-display text-4xl font-light leading-[1.05] tracking-display text-vellum italic md:text-6xl",
								children: "Presence, made inevitable."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rise rise-3 mt-6 max-w-md text-sm leading-relaxed text-limestone md:text-base",
								children: "A house of strategy, presence, content, and promotion — for hotels, villas, motor, and property that already sell at a premium."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise rise-5 relative flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onJump("conversation"),
							className: "inline-flex min-h-11 items-center bg-vellum px-5 font-sans text-xs font-medium tracking-label text-ink uppercase transition-[opacity] duration-150 hover:opacity-90 active:not-disabled:scale-[0.96]",
							children: "Request a conversation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onJump("work"),
							className: "inline-flex min-h-11 items-center border border-vellum/20 px-5 font-sans text-xs font-medium tracking-label text-vellum uppercase transition-[border-color,background-color] duration-150 hover:border-vellum/40 hover:bg-vellum/5",
							children: "The work"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative order-1 min-h-[42vh] lg:order-2 lg:min-h-dvh",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/brand/hotel.jpg",
					alt: "A limestone hotel courtyard at blue hour — still water, one lantern.",
					className: "absolute inset-0 size-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/20" })]
			})]
		})
	});
}
function Measures() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-vellum/8 bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-2 gap-px bg-vellum/8 md:grid-cols-4",
			children: MEASURES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "bg-ink px-6 py-8 md:px-8 md:py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-light tracking-display text-vellum md:text-4xl",
					children: m.figure
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-[14rem] text-sm leading-relaxed text-ash",
					children: m.caption
				})]
			}, m.figure))
		})
	});
}
function Insight() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-night px-6 py-20 text-vellum md:px-12 md:py-28 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-limestone",
						children: INSIGHT.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 max-w-3xl font-display text-4xl font-light tracking-display md:text-5xl",
						children: INSIGHT.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-base leading-relaxed text-limestone",
						children: INSIGHT.body
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "border-t border-vellum/12 pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-light tracking-display text-vellum italic md:text-4xl",
					children: INSIGHT.pull
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm leading-relaxed text-ash",
					children: "We do not rent attention. We build it — so the house is already chosen."
				})]
			})]
		})
	});
}
function Rooms() {
	const [hotels, motor, property] = ROOMS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "rooms",
		className: "scroll-mt-14 bg-vellum px-6 py-20 text-ink md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label",
					children: "The rooms we keep"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-3xl font-display text-4xl font-light tracking-display md:text-5xl",
					children: "Hospitality. Motor. Property."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-base leading-relaxed text-ash",
					children: "Three rooms. One house. We take fewer partners so the work can go further."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mt-16 grid items-center gap-10 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hotels.image,
							alt: hotels.alt,
							className: "brand-photo aspect-video w-full rounded-lg object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label",
								children: hotels.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-3xl font-light tracking-display",
								children: hotels.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-xl font-light italic",
								children: hotels.lede
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-ash",
								children: hotels.body
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-10 md:grid-cols-2",
					children: [motor, property].map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: room.image,
							alt: room.alt,
							className: "brand-photo aspect-[3/2] w-full rounded-lg object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label mt-5",
							children: room.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-3xl font-light tracking-display",
							children: room.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-xl font-light italic",
							children: room.lede
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-ash",
							children: room.body
						})
					] }, room.id))
				})
			]
		})
	});
}
function Work() {
	const [featured, ...rest] = WORK;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "scroll-mt-14 border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-limestone",
					children: "Work"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-3xl font-display text-4xl font-light tracking-display md:text-5xl",
					children: "Selected plates."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-base leading-relaxed text-limestone",
					children: "The rooms, unnamed. Percentages are a volume-agency habit. The work is shown as it is held."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mt-16 grid items-end gap-10 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "lg:col-span-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: featured.image,
							alt: featured.alt,
							className: "brand-photo aspect-[16/10] w-full rounded-lg object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "label text-limestone",
								children: [
									featured.roman,
									" · ",
									featured.room
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-3xl font-light tracking-display",
								children: featured.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-ash",
								children: featured.body
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-10 md:grid-cols-2",
					children: rest.map((plate) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: plate.image,
							alt: plate.alt,
							className: "brand-photo aspect-[3/2] w-full rounded-lg object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "label mt-5 text-limestone",
							children: [
								plate.roman,
								" · ",
								plate.room
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-3xl font-light tracking-display",
							children: plate.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-ash",
							children: plate.body
						})
					] }, plate.roman))
				})
			]
		})
	});
}
function Practices() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-limestone",
					children: "Practices"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-3xl font-display text-4xl font-light tracking-display md:text-5xl",
					children: "Four trades. One architecture."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-base leading-relaxed text-limestone",
					children: "Never sold apart. A brand that is loud in one place and absent in another is not a brand."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-px bg-vellum/10 md:grid-cols-2",
					children: PRACTICES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bg-ink p-8 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl text-limestone",
								children: p.roman
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-3xl font-light tracking-display",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ash",
								children: p.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm leading-relaxed text-limestone md:text-base",
								children: p.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8",
								children: p.holds.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-t border-vellum/10 py-3 text-sm leading-relaxed text-vellum",
									children: h
								}, h))
							})
						]
					}, p.name))
				})
			]
		})
	});
}
function Retainers({ onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "retainers",
		className: "scroll-mt-14 border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-limestone",
					children: "Retainers"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-3xl font-display text-4xl font-light tracking-display md:text-5xl",
					children: "Prima. Altera. Summa."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-base leading-relaxed text-limestone",
					children: "Named in Latin. The first, the second, the highest. Fees are discussed in conversation — never published as a menu."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-4 lg:grid-cols-3",
					children: RETAINERS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: cn("flex flex-col rounded-lg p-7 md:p-8", r.featured ? "bg-vellum text-ink" : "bg-night text-vellum"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: cn("label", r.featured ? "text-ash" : "text-limestone"),
									children: [
										r.roman,
										"  ·  ",
										r.means
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-ash",
									children: r.term
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-4xl font-light tracking-display",
								children: r.latin
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-4 text-sm leading-relaxed", r.featured ? "text-ash" : "text-limestone"),
								children: r.for
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 flex flex-1 flex-col gap-3",
								children: r.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: cn("border-t pt-3 text-sm leading-relaxed", r.featured ? "border-ink/10 text-ink" : "border-vellum/12 text-vellum"),
									children: item
								}, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-xs leading-relaxed text-ash",
								children: r.typical
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onJump("conversation"),
								className: cn("mt-8 inline-flex min-h-11 items-center justify-center px-5 font-sans text-xs font-medium tracking-label uppercase transition-[opacity,background-color,border-color] duration-150 active:not-disabled:scale-[0.96]", r.featured ? "bg-ink text-vellum hover:opacity-90" : "border border-vellum/20 text-vellum hover:border-vellum/40 hover:bg-vellum/5"),
								children: ["Begin with ", r.latin]
							})
						]
					}, r.id))
				})
			]
		})
	});
}
function Approach() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-limestone",
					children: "Approach"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-3xl font-display text-4xl font-light tracking-display md:text-5xl",
					children: "How an engagement is held."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4",
					children: STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl text-limestone",
							children: s.roman
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-2xl font-light tracking-display",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-ash",
							children: s.body
						})
					] }, s.name))
				})
			]
		})
	});
}
function House() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "house",
		className: "scroll-mt-14 bg-vellum px-6 py-20 text-ink md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label",
							children: "The house"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-4xl font-light tracking-display md:text-5xl",
							children: "A studio, not a mill."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base leading-relaxed",
							children: "Core is not a department and not a campaign. It is the structure a brand stands on when the noise is stripped away. Based in Kigali. Working wherever the work is serious."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-ash",
							children: "Digital marketing, social, promotion, and content are usually bought as separate trades. That is how brands become loud in one place and absent in another. We hold them as one architecture."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "mt-8 inline-flex min-h-11 items-center border border-ink/15 px-5 font-sans text-xs font-medium tracking-label text-ink uppercase transition-[border-color,background-color] duration-150 hover:border-ink/30 hover:bg-ink/5",
							children: "Read the brand book"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "lg:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/studio.jpg",
						alt: "A quiet studio at dusk — walnut desk, a single lamp, the city beyond.",
						className: "brand-photo aspect-[3/2] w-full rounded-lg object-cover"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4",
				children: TRAITS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "bg-vellum px-6 py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-light tracking-display",
						children: t.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-ash",
						children: t.body
					})]
				}, t.name))
			})]
		})
	});
}
function Questions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "questions",
		className: "scroll-mt-14 border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label text-limestone",
							children: "Questions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-4xl font-light tracking-display md:text-5xl",
							children: "Asked before the letter."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed text-ash",
							children: "The rest is discussed in conversation. We do not send decks unasked."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-vellum/10 lg:col-span-8",
					children: QUESTIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "faq-item group border-b border-vellum/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex min-h-14 cursor-pointer items-center justify-between gap-6 py-5 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex min-w-0 items-baseline gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0 font-sans text-xs tracking-wide text-limestone",
										children: item.num
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-xl font-light tracking-display md:text-2xl",
										children: item.q
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 font-display text-2xl leading-none text-limestone group-open:hidden",
									"aria-hidden": "true",
									children: "+"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden shrink-0 font-display text-2xl leading-none text-limestone group-open:inline",
									"aria-hidden": "true",
									children: "−"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl pb-6 pl-10 text-sm leading-relaxed text-limestone md:pl-12",
							children: item.a
						})]
					}, item.id))
				})]
			})
		})
	});
}
function Close({ onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-vellum px-6 py-20 text-ink md:px-12 md:py-28 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label",
					children: "The house is open"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-3xl font-display text-4xl font-light tracking-display italic md:text-6xl",
					children: "Tell us the house."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-base leading-relaxed text-ash",
					children: "We will tell you whether the work can be done properly. Engagements begin by speaking."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onJump("conversation"),
						className: "inline-flex min-h-11 items-center bg-ink px-5 font-sans text-xs font-medium tracking-label text-vellum uppercase transition-[opacity] duration-150 hover:opacity-90 active:not-disabled:scale-[0.96]",
						children: "Request a conversation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onJump("retainers"),
						className: "inline-flex min-h-11 items-center border border-ink/15 px-5 font-sans text-xs font-medium tracking-label text-ink uppercase transition-[border-color,background-color] duration-150 hover:border-ink/30 hover:bg-ink/5",
						children: "The retainers"
					})]
				})
			]
		})
	});
}
function Conversation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "conversation",
		className: "scroll-mt-14 border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label text-limestone",
							children: "Conversation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-4xl font-light tracking-display md:text-5xl",
							children: "Engagements begin by speaking."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base leading-relaxed text-limestone",
							children: "Tell us the house. Tell us the room. We will tell you whether the work can be done properly."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 font-sans text-sm leading-relaxed text-ash",
							children: [
								BRAND.email,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								BRAND.web,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								BRAND.origin,
								" · By appointment"
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
function Footer({ onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-vellum/8 bg-ink px-6 py-16 text-vellum md:px-12 lg:px-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xs font-display text-2xl font-light tracking-display italic",
						children: BRAND.tagline
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-limestone",
						children: "House"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mt-5 flex flex-col gap-1",
						"aria-label": "Footer",
						children: [SITE_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onJump(item.id),
							className: "inline-flex min-h-11 items-center font-sans text-sm text-ash transition-[color] duration-150 hover:text-limestone",
							children: item.label
						}, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "inline-flex min-h-11 items-center font-sans text-sm text-ash transition-[color] duration-150 hover:text-limestone",
							children: "The book"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-limestone",
						children: "Rooms"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 flex flex-col gap-1",
						children: ROOMS.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onJump("rooms"),
							className: "inline-flex min-h-11 items-center font-sans text-sm text-ash transition-[color] duration-150 hover:text-limestone",
							children: room.name
						}) }, room.id))
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
							className: "mt-4 inline-flex min-h-11 items-center font-sans text-xs tracking-label text-ash uppercase transition-[color] duration-150 hover:text-limestone",
							children: "Brand book — PDF"
						})
					]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {});
}
//#endregion
export { Home as component };
