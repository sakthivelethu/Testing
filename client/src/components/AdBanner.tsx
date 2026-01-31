import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function AdBanner({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardContent className="p-0">
        <div className="bg-muted/50 rounded-lg p-4 flex flex-col items-center justify-center text-center border-2 border-dashed border-border/60">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Advertisement</span>
          <h4 className="text-sm font-semibold mb-1">Looking for the right college?</h4>
          <p className="text-xs text-muted-foreground mb-3">Get expert guidance on admissions and scholarships.</p>
          <a 
            href="https://www.google.com/search?q=college+admissions+guidance" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-medium text-primary hover:underline flex items-center gap-1"
          >
            Learn More <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
