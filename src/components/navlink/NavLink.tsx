"use client";
import { usePathname } from "next/navigation";
import { Link } from "@/lib/router-events";
import { MouseEventHandler } from "react";
export default function NavLink({
  href,
  children,
  className,
  onClick,
}: React.PropsWithChildren<{
  href: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
}>) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      style={{ fontWeight: pathname === href ? "bold" : undefined }}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
