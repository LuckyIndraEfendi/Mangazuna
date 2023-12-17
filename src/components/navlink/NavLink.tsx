"use client";
import { usePathname } from "next/navigation";
import { Link } from "@/lib/router-events";
export default function NavLink({
  href,
  children,
  className,
}: React.PropsWithChildren<{ href: string; className?: string }>) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      style={{ fontWeight: pathname === href ? "bold" : undefined }}
      className={className}
    >
      {children}
    </Link>
  );
}
