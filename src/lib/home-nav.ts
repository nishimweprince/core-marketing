import { useNavigate } from "@tanstack/react-router";

/**
 * The landing footer navigates by section id. On the landing page itself the
 * caller scrolls directly; everywhere else this goes home first, then glides
 * to the section, so every page shares the exact same footer.
 */
export function useHomeJump() {
  const navigate = useNavigate();
  return (id: string) => {
    navigate({ to: "/", hash: id }).then(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };
}
