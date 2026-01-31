import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.careerPaths.list.path, async (_req, res) => {
    const paths = await storage.getCareerPaths();
    res.json(paths);
  });

  app.get(api.careerPaths.get.path, async (req, res) => {
    const path = await storage.getCareerPath(Number(req.params.id));
    if (!path) {
      return res.status(404).json({ message: 'Career path not found' });
    }
    res.json(path);
  });

  return httpServer;
}
