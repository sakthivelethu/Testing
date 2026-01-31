import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { z } from "zod";

// Types derived from schema via routes
type CareerPathsResponse = z.infer<typeof api.careerPaths.list.responses[200]>;
type CareerPathResponse = z.infer<typeof api.careerPaths.get.responses[200]>;

export function useCareerPaths() {
  return useQuery({
    queryKey: [api.careerPaths.list.path],
    queryFn: async () => {
      const res = await fetch(api.careerPaths.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch career paths");
      return api.careerPaths.list.responses[200].parse(await res.json());
    },
  });
}

export function useCareerPath(id: number | null) {
  return useQuery({
    queryKey: [api.careerPaths.get.path, id],
    enabled: !!id,
    queryFn: async () => {
      if (!id) return null;
      const url = buildUrl(api.careerPaths.get.path, { id });
      const res = await fetch(url, { credentials: "include" });
      
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch career path details");
      
      return api.careerPaths.get.responses[200].parse(await res.json());
    },
  });
}
