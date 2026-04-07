"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbNav() {
  const pathname = usePathname();

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = () => {
    const segments = pathname.split("/").filter((segment) => segment);

    if (segments.length === 0) {
      return [];
    }

    const breadcrumbs = [];

    // Always start with Home
    breadcrumbs.push({
      label: "Home",
      href: "/",
      isActive: false,
    });

    // Handle different routes
    if (segments[0] === "foods") {
      // Add Foods breadcrumb
      breadcrumbs.push({
        label: "Foods",
        href: "/foods",
        isActive: segments.length === 1,
      });

      // If there's an ID segment (dynamic route), add it
      if (segments.length > 1 && segments[1]) {
        breadcrumbs.push({
          label:
            segments[1].charAt(0).toUpperCase() +
            segments[1].slice(1).replace(/-/g, " "),
          href: null, // No href for dynamic segments
          isActive: true,
        });
      }
    } else if (segments[0] === "ingredients") {
      breadcrumbs.push({
        label: "Ingredients",
        href: "/ingredients",
        isActive: true,
      });
    } else {
      // Fallback for other routes
      segments.forEach((segment, index) => {
        breadcrumbs.push({
          label:
            segment.charAt(0).toUpperCase() +
            segment.slice(1).replace(/-/g, " "),
          href: "/" + segments.slice(0, index + 1).join("/"),
          isActive: index === segments.length - 1,
        });
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (pathname === "/" || breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <Breadcrumb className="px-4 md:px-8 py-4">
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <div
            key={breadcrumb.href || breadcrumb.label}
            className="flex items-center gap-1.5"
          >
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {breadcrumb.isActive || !breadcrumb.href ? (
                <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink
                  href={breadcrumb.href}
                  className="text-slate-600 hover:text-slate-900"
                >
                  {breadcrumb.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
