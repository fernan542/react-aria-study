import { UIMatch, useMatches } from "react-router-dom";

/**
 * @description Custom interface for a single breadcrumb item.
 */
export interface BreadcrumbItem {
  label: string;
  to: string;
}

/**
 * @description For handling breadcrumbs data in route definitions of react-roouter.
 */
export interface BreadcrumbHandleData {
  breadcrumb: BreadcrumbItem;
}

export default function useBreadcrumbs(): BreadcrumbItem[] {
  const matches = useMatches() as UIMatch<unknown, BreadcrumbHandleData>[];

  const items = matches
    .filter((match) => match.handle?.breadcrumb)
    .map((match) => {
      const { breadcrumb } = match.handle as BreadcrumbHandleData;
      return breadcrumb;
    });

  if (items.length > 1) return items;
  return [];
}
