import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="font-mono text-xs">
          Built with Next.js · Robotics portfolio
        </p>
      </div>
    </footer>
  );
}
