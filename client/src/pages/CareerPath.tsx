import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AdBanner } from "@/components/AdBanner";
import { useCareerPaths, useCareerPath } from "@/hooks/use-career-paths";
import { CareerNode } from "@shared/schema";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Book, GraduationCap, Info, Briefcase, TrendingUp, Lightbulb, Compass, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

interface PathHistoryItem {
  id: string;
  label: string;
  node: CareerNode;
}

export default function CareerPathPage() {
  const { data: careerPaths, isLoading: isLoadingPaths } = useCareerPaths();
  const [selectedPathId, setSelectedPathId] = useState<string>("");
  const [, setLocation] = useLocation();
  const { data: selectedPathData, isLoading: isLoadingPathDetail } = useCareerPath(
    selectedPathId ? parseInt(selectedPathId) : null
  );

  // History stack for breadcrumbs
  const [history, setHistory] = useState<PathHistoryItem[]>([]);
  
  // Current node being displayed (derived from history or root)
  const currentNode = history.length > 0 
    ? history[history.length - 1].node 
    : (selectedPathData?.data as CareerNode | undefined);

  // Reset history when switching root paths
  useEffect(() => {
    setHistory([]);
  }, [selectedPathId]);

  const handleNodeSelect = (node: CareerNode) => {
    if (node.id === "general-physician-md") {
      setLocation("/career/general-physician");
      return;
    }

if (node.id === "diploma-pharmacy") {
    setLocation("/career/diploma-pharmacy");
    return;
  }
    setHistory((prev) => [...prev, { id: node.id, label: node.label, node }]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBreadcrumbNavigate = (index: number) => {
    // Navigate back to a specific point in history
    setHistory((prev) => prev.slice(0, index + 1));
  };

  const handleRootReset = () => {
    setHistory([]);
  };

  // Build breadcrumb items
  const breadcrumbItems = [
    ...(selectedPathData ? [{ 
      label: selectedPathData.title, 
      id: "root", 
      isActive: history.length === 0 
    }] : []),
    ...history.map(h => ({
      label: h.label,
      id: h.id,
      isActive: false
    }))
  ];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Explore Your Career Path
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select your current education level to start mapping out your future possibilities.
          </p>
        </div>

        {/* Level Selector */}
        <div className="max-w-xs mx-auto mb-12">
          {isLoadingPaths ? (
            <Skeleton className="h-12 w-full rounded-xl" />
          ) : (
            <Select value={selectedPathId} onValueChange={setSelectedPathId}>
              <SelectTrigger className="h-14 rounded-xl text-lg font-medium border-2 hover:border-primary/50 transition-colors bg-card shadow-sm">
                <SelectValue placeholder="Select Education Level" />
              </SelectTrigger>
              <SelectContent>
                {careerPaths?.map((path) => (
                  <SelectItem key={path.id} value={path.id.toString()} className="text-base py-3">
                    {path.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>

        {/* Loading State for Details */}
        {isLoadingPathDetail && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-48 rounded-2xl" />
            ))}
          </div>
        )}

        {/* Main Content Area */}
        <AnimatePresence mode="wait">
          {selectedPathData && !isLoadingPathDetail && (
            <motion.div
              key={currentNode?.id || 'root'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Breadcrumbs */}
              <div className="bg-muted/30 p-4 rounded-xl mb-8 border border-border/50">
                <Breadcrumbs 
                  items={breadcrumbItems} 
                  onNavigate={(index) => {
                    if (history.length > 0) {
                       // First item is root (from Select), index 0 in history is actually first child
                       // This logic is tricky. 
                       // breadcrumbItems[0] is root. index 0 click means go to root.
                       // breadcrumbItems[1] is history[0]. index 1 click means go to history[0].
                       
                       if (index === 0) handleRootReset();
                       else handleBreadcrumbNavigate(index - 1);
                    } else if (index === 0) {
                      // Already at root
                    }
                  }} 
                />
                
                <div className="mt-2">
                   <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                     {currentNode?.label || selectedPathData.title}
                     {currentNode?.description && (
                       <HoverCard>
                         <HoverCardTrigger asChild>
                           <Info className="h-5 w-5 text-muted-foreground cursor-help hover:text-foreground transition-colors" />
                         </HoverCardTrigger>
                         <HoverCardContent className="w-80 p-4">
                           <p className="text-sm leading-relaxed">{currentNode.description}</p>
                         </HoverCardContent>
                       </HoverCard>
                     )}
                   </h2>
                   {currentNode?.description && (
                     <p className="text-muted-foreground mt-1 max-w-3xl">
                       {currentNode.description}
                     </p>
                   )}
                </div>
              </div>

              {/* Options Grid */}
              {/* <AdBanner className="mb-8 lg:hidden" /> */}
              {currentNode?.children && currentNode.children.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentNode.children.map((child, idx) => (
                    <OptionCard 
                      key={child.id} 
                      node={child} 
                      onSelect={handleNodeSelect}
                      index={idx}
                    />
                  ))}
                </div>
              ) : (
                /* End of Path State */
                <div className="text-center py-16 bg-card border rounded-3xl shadow-sm">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="h-10 w-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Excellent Choice!</h3>
                  <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                    You've reached a specific career destination: <span className="font-semibold text-foreground">{currentNode?.label}</span>. 
                    This is a great field with many opportunities.
                  </p>
                  <Button onClick={() => window.open(`https://www.google.com/search?q=Jobs+in+${currentNode?.label}`, '_blank')} variant="outline">
                    Search Jobs <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </motion.div>
          )}
          
          {/* Empty State / Prompt */}
          {!selectedPathId && !isLoadingPaths && (
            <div className="text-center py-20 border-2 border-dashed border-border/60 rounded-3xl bg-muted/5">
              <GraduationCap className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-xl text-muted-foreground font-medium">Select a level above to begin exploring</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}

import { Badge } from "@/components/ui/badge";

function OptionCard({ node, onSelect, index }: { node: CareerNode, onSelect: (n: CareerNode) => void, index: number }) {
  // Determine icon based on label keywords (simple heuristic for visual variety)
  const getIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('tech') || l.includes('eng') || l.includes('sci')) return <div className="p-3 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"><Book className="h-6 w-6" /></div>;
    if (l.includes('art') || l.includes('design')) return <div className="p-3 rounded-lg bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"><Lightbulb className="h-6 w-6" /></div>;
    if (l.includes('comm') || l.includes('bus')) return <div className="p-3 rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"><TrendingUp className="h-6 w-6" /></div>;
    return <div className="p-3 rounded-lg bg-primary/10 text-primary"><Compass className="h-6 w-6" /></div>;
  };

  const hasChildren = node.children && node.children.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
    >
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div className="h-full">
            <Card 
              className={cn(
                "h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/60 group relative overflow-hidden",
                hasChildren ? "hover:border-primary/40" : "hover:border-green-500/40"
              )}
              onClick={() => onSelect(node)}
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  {getIcon(node.label)}
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {node.label}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">
                  {node.description || "Click to explore more details about this career path."}
                </CardDescription>
                
                {hasChildren ? (
                   <div className="text-xs font-medium text-muted-foreground bg-muted/50 py-1 px-2 rounded w-fit">
                     {node.children?.length} sub-paths available
                   </div>
                ) : (
                   <div className="space-y-4">
                     <div className="flex flex-wrap gap-2">
                       {node.jobCategory && (
                         <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/50">
                         {node.jobCategory} Sector
                       </Badge>
                       )}
                       {node.lpaRange && (
                         <Badge variant="secondary" className="font-semibold">
                           {node.lpaRange} LPA
                         </Badge>
                       )}
                     </div>
                     <Button 
                       size="sm" 
                       variant="outline" 
                       className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                       onClick={(e) => {
                         e.stopPropagation();
                         window.open(`https://www.google.com/search?q=${encodeURIComponent(node.label)}+jobs`, '_blank');
                       }}
                     >
                       <Search className="h-3.5 w-3.5 mr-2" />
                       Look for a Job
                     </Button>
                   </div>
                )}
              </CardContent>
            </Card>
          </div>
        </HoverCardTrigger>
        
        {/* Hover Preview for desktop users */}
        {hasChildren && (
          <HoverCardContent side="right" align="start" className="w-64 hidden md:block">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Contains:</h4>
              <ul className="space-y-1">
                {node.children?.slice(0, 5).map(child => (
                  <li key={child.id} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    <span className="truncate">{child.label}</span>
                  </li>
                ))}
                {(node.children?.length || 0) > 5 && (
                  <li className="text-xs text-muted-foreground italic pl-3">
                    +{ (node.children?.length || 0) - 5 } more...
                  </li>
                )}
              </ul>
            </div>
          </HoverCardContent>
        )}
      </HoverCard>
    </motion.div>
  );
}
