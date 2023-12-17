import { addBasePath } from "next/dist/client/add-base-path";

function getURL(href: string): URL {
  return new URL(addBasePath(href), location.href);
}

function isModifiedEvent(event: React.MouseEvent): boolean {
  const eventTarget = event.currentTarget as HTMLAnchorElement | SVGAElement;
  const target = eventTarget.getAttribute("target");
  return (
    (target && target !== "_self") ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    (event.nativeEvent && event.nativeEvent.button === 1)
  );
}
export function shouldTriggerStartEvent(
  href: string,
  clickEvent?: React.MouseEvent
) {
  const current = window.location;
  const target = getURL(href);

  if (clickEvent && isModifiedEvent(clickEvent)) return false;
  if (current.origin !== target.origin) return false;
  if (current.pathname === target.pathname && current.search === target.search)
    return false;

  return true;
}
