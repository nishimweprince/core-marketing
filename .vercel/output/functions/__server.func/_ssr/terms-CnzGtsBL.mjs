import { z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as LegalPage } from "./legal-hf8NJ21U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-CnzGtsBL.js
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		id: "work",
		heading: "The work",
		paragraphs: ["Core Marketing is a senior-led marketing studio in Kigali. We take on a small number of engagements in hospitality, motor, and real estate: social management, content, campaigns, web, search, and application development, as described under Plans.", "Every engagement begins with a conversation. Nothing on this site is an offer of a fixed scope; the work, its shape, and its timing are agreed between us before anything begins."]
	},
	{
		id: "fees",
		heading: "Fees and payment",
		paragraphs: ["There is no rate card. Fees depend on the scope, team, and pace the work needs, and we discuss them after the first conversation, once we understand what a strong result requires.", "Work begins once fees are agreed. Unless we agree otherwise, invoices are payable within fourteen days."]
	},
	{
		id: "timing",
		heading: "Timing",
		paragraphs: ["Plans carry no fixed terms. Each engagement is scoped around what the work needs and given the time to become clear, consistent, and useful. Start dates and pace are agreed together, and shift only by mutual agreement."]
	},
	{
		id: "ownership",
		heading: "Ownership of the work",
		paragraphs: ["Once fees are paid in full, the final deliverables made for you are yours. Working files and internal materials remain ours. Unless we agree otherwise at the outset, we may show finished work in our portfolio and describe the engagement in general terms."]
	},
	{
		id: "confidence",
		heading: "Confidentiality",
		paragraphs: ["What you share in confidence stays in confidence, and the same holds in reverse. Neither of us discloses the other's non-public information without permission, except where the law requires it."]
	},
	{
		id: "ending",
		heading: "Ending the work",
		paragraphs: ["Either side may end an engagement with thirty days' written notice. Fees for work completed up to that point remain payable, and we hand over everything finished and paid for in good order."]
	},
	{
		id: "liability",
		heading: "Liability",
		paragraphs: ["We hold our work to a high standard, and we stand behind it. If something we deliver falls short, tell us and we will make it right. Beyond that, our liability for any engagement is limited to the fees paid for that engagement."]
	}
];
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalPage, {
		title: "Terms",
		intro: "The plain-language basis on which we work together.",
		updated: "September 2026",
		sections: SECTIONS.map((s) => ({
			...s,
			paragraphs: [...s.paragraphs]
		}))
	});
}
//#endregion
export { TermsPage as component };
