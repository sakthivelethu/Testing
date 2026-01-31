import { careerPaths, type CareerPath, type InsertCareerPath, type CareerNode } from "@shared/schema";
import { itiData } from "./data/iti";
import { polytechnicData } from "./data/polytechnic";
import { paramedicalData } from "./data/paramedical";
import { govt10thJobsData, private10thJobsData } from "./data/10thJobs";
import { creativeDesignData } from "./data/creative-design";
import { computerCoursesData } from "./data/computer-courses";
import { pcbData, pcmbData, pcmData } from "./data/science-stream";
import { medicalData } from "./data/medical";
import { commerceDegreeData } from "./data/commerce-stream";
import { twelethData } from "./data/12th";
import { coursesAfter10thFail } from "./data/below-10th";

export interface IStorage {
  getCareerPaths(): Promise<CareerPath[]>;
  getCareerPath(id: number): Promise<CareerPath | undefined>;
}

export class MemStorage implements IStorage {
  private careerPaths: Map<number, CareerPath>;
  private currentId: number;

  constructor() {
    this.careerPaths = new Map();
    this.currentId = 1;
    this.seedData();
  }

  private seedData() {
    const paths: InsertCareerPath[] = [
      {
        title: "Below 10th",
        data: {
          id: "root-below-10th",
          label: "Below 10th",
          children: coursesAfter10thFail
        } as unknown as any
      },
      {
        title: "10th",
        data: {
          id: "root-10",
          label: "10th Standard",
          children: [
            ...twelethData,
            {
              id: "direct-options",
              label: "Direct Vocational & Diploma",
              description: "Practical diplomas and training leading to immediate jobs or higher studies.",
              children: [
                {
                  id: "polytechnic",
                  label: "Polytechnic Diploma (3 years)",
                  description: "Engineering diplomas for technical careers.",
                  children: polytechnicData
                },
                {
                  id: "iti",
                  label: "ITI Courses (1-2 years)",
                  description: "Industrial training for skilled trades.",
                  children: itiData
                },
                {
                  id: "paramedical",
                  label: "Paramedical Courses",
                  description: "Healthcare support training.",
                  children: paramedicalData
                }
              ]
            },
            {
              id: "govt-jobs",
              label: "Government Jobs",
              description: "Direct entry-level government positions.",
              children: govt10thJobsData
            },
            {
              id: "commerce-finance",
              label: "Commerce & Finance",
              children: private10thJobsData
            },
            {
              id: "creative",
              label: "Creative & Design",
              children: creativeDesignData
            },
            {
              id: "it-computer",
              label: "IT & Computer Courses",
              children: computerCoursesData
            },
          ]
        } as unknown as any
      },
      {
        title: "12th / PUC / HSC",
        data: {
          id: "root-12",
          label: "12th / PUC / HSC",
          children: twelethData
        } as unknown as any
      },
      {
        title: "Polytechnic Diploma",
        data: {
          id: "root-poly",
          label: "Polytechnic Diploma",
          children: polytechnicData
        } as unknown as any
      },
      {
        title: "ITI Courses",
        data: {
          id: "root-iti",
          label: "ITI Courses",
          children: itiData
        } as unknown as any
      },
      {
        title: "Paramedical Courses",
        data: {
          id: "root-paramedical",
          label: "Paramedical Courses",
          children: paramedicalData
        } as unknown as any
      },
      {
        title: "Graduate",
        data: {
          id: "root-grad",
          label: "Graduate",
          children: [
            ...pcmData,
            ...pcbData,
            ...pcmbData,
            ...commerceDegreeData,
            // {
            //   id: "postgrad",
            //   label: "Postgraduate Degrees",
            //   children: [
            //     { id: "mtech", label: "M.Tech" },
            //     { id: "mba", label: "MBA" },
            //     { id: "ma", label: "MA" },
            //     { id: "msc", label: "M.Sc" }
            //   ]
            // },
            // {
            //   id: "phd",
            //   label: "Doctorate / Research",
            //   children: [
            //     { id: "phd-res", label: "PhD" }
            //   ]
            // },
            // {
            //   id: "job",
            //   label: "Job Opportunities",
            //   children: [
            //     { id: "psu", label: "Public Sector (PSU)" },
            //     { id: "private", label: "Private Sector" },
            //     { id: "govt", label: "Government Exams (UPSC, SSC)" }
            //   ]
            // }
          ]
        } as unknown as any
      }
    ];

    paths.forEach(path => {
      const id = this.currentId++;
      this.careerPaths.set(id, { ...path, id });
    });
  }

  async getCareerPaths(): Promise<CareerPath[]> {
    return Array.from(this.careerPaths.values());
  }

  async getCareerPath(id: number): Promise<CareerPath | undefined> {
    return this.careerPaths.get(id);
  }
}

export const storage = new MemStorage();
