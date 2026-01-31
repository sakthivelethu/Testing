import { ChevronRight, Home } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  id: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (index: number) => void;
}

export function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm sm:text-base text-muted-foreground">
        <li className="flex items-center">
          <Link 
            href="/" 
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <Home className="h-4 w-4" />
          </Link>
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.id} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground/50" />
              <button
                onClick={() => !isLast && onNavigate(index)}
                disabled={isLast}
                className={cn(
                  "font-medium transition-all duration-200 px-2 py-1 rounded-md",
                  isLast
                    ? "text-foreground font-semibold bg-secondary/50 cursor-default"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5 cursor-pointer"
                )}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
