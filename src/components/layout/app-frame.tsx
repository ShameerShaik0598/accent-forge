import { BookOpen, Home, Sparkles } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "Intro", icon: Sparkles },
  { href: "/home", label: "Home", icon: Home },
  { href: "/lessons", label: "Lessons", icon: BookOpen },
] satisfies Array<{ href: Route; label: string; icon: typeof Home }>;

export function AppFrame({
  activeHref,
  children,
}: {
  activeHref: string;
  children: ReactNode;
}) {
  return (
    <div className="safe-page">
      <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[rgba(248,250,249,0.88)] backdrop-blur">
        <div className="mx-auto flex min-h-16 w-full max-w-5xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/home" className="flex items-center gap-3 font-semibold">
            <span className="grid size-9 place-items-center rounded-md bg-[var(--brand)] text-white">
              AF
            </span>
            <span>AccentForge</span>
          </Link>
          <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                active={activeHref === item.href}
                href={item.href}
                icon={item.icon}
                key={item.href}
                label={item.label}
              />
            ))}
          </nav>
        </div>
      </header>

      {children}

      <nav
        className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--border)] bg-white px-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 shadow-[0_-8px_24px_rgba(23,33,29,0.08)] sm:hidden"
        aria-label="Primary"
      >
        <div className="mx-auto grid max-w-md grid-cols-3 gap-1">
          {navItems.map((item) => (
            <NavLink
              active={activeHref === item.href}
              href={item.href}
              icon={item.icon}
              key={item.href}
              label={item.label}
              mobile
            />
          ))}
        </div>
      </nav>
    </div>
  );
}

function NavLink({
  active,
  href,
  icon: Icon,
  label,
  mobile = false,
}: {
  active: boolean;
  href: Route;
  icon: typeof Home;
  label: string;
  mobile?: boolean;
}) {
  return (
    <Link
      aria-current={active ? "page" : undefined}
      className={
        mobile
          ? `flex min-h-14 flex-col items-center justify-center gap-1 rounded-md px-2 text-xs font-semibold transition ${
              active
                ? "bg-[var(--panel-strong)] text-[var(--brand-strong)]"
                : "text-[var(--muted)]"
            }`
          : `inline-flex min-h-10 items-center gap-2 rounded-md px-3 text-sm font-semibold transition ${
              active
                ? "bg-[var(--panel-strong)] text-[var(--brand-strong)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`
      }
      href={href}
    >
      <Icon aria-hidden="true" size={mobile ? 20 : 17} />
      {label}
    </Link>
  );
}
