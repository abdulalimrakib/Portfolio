import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-xs text-neutral-600">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with Next.js &
        Tailwind CSS.
      </p>
    </footer>
  );
}
