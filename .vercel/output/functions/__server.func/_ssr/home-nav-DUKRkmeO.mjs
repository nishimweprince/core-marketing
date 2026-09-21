import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/home-nav-DUKRkmeO.js
/**
* The landing footer navigates by section id. On the landing page itself the
* caller scrolls directly; everywhere else this goes home first, then glides
* to the section, so every page shares the exact same footer.
*/
function useHomeJump() {
	const navigate = useNavigate();
	return (id) => {
		navigate({
			to: "/",
			hash: id
		}).then(() => {
			requestAnimationFrame(() => {
				document.getElementById(id)?.scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
			});
		});
	};
}
//#endregion
export { useHomeJump as t };
