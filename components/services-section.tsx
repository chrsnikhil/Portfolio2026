"use client"

import { Mail, Star, Loader2, ArrowUpRight, GitFork, Calendar, Globe, Scale } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from 'react'

interface Project {
  id: string;
  name: string;
  description: string;
  html_url: string;
  homepage_url: string | null;
  pushed_at: string;
  created_at: string;
  forks_count: number;
  language: string | null;
  language_color: string;
  stargazers_count: number;
  license: string | null;
  topics: string[];
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 30) return `${diffDays}d ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
  return `${Math.floor(diffDays / 365)}y ago`;
}

export function ServicesSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('/api/projects');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            setProjects(data);
          }
        }
      } catch (error) {
        console.error("Failed to load projects", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">projects</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              Check out some of my pinned projects directly from GitHub.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <div className="col-span-full flex justify-center py-20">
                <Loader2 className="animate-spin w-10 h-10 text-gray-400" />
              </div>
            ) : (
              <>
                {projects.map((project, index) => {
                  const colors = ['bg-[#FFC224]', 'bg-[#FF6B7A]', 'bg-[#2F81F7]', 'bg-[#4ADE80]', 'bg-[#A78BFA]'];
                  const bgColor = colors[index % colors.length];

                  return (
                    <div
                      key={project.id}
                      className={`${bgColor} border-[3px] border-black rounded-[32px] p-6 md:p-8 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 h-full min-h-[360px] group relative`}
                    >
                      {/* Header: Title + Links */}
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-[24px] leading-[30px] font-bold text-[#0B0B0B] line-clamp-2 pr-2">{project.name}</h3>
                        <div className="flex gap-2">
                          {project.homepage_url && (
                            <a
                              href={project.homepage_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white/90 p-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors"
                              title="Live Demo"
                            >
                              <Globe className="w-5 h-5" />
                            </a>
                          )}
                          <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 p-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors"
                            title="View Source"
                          >
                            <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
                          </a>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[16px] leading-[24px] font-bold text-[#0B0B0B]/80 line-clamp-3 mb-4">
                        {project.description || "No description available."}
                      </p>

                      {/* Topics */}
                      {project.topics && project.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.topics.map(topic => (
                            <span key={topic} className="px-2 py-1 bg-black/10 border border-black/20 rounded-md text-xs font-bold text-[#0B0B0B] uppercase">
                              #{topic}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Footer: Stats & Details */}
                      <div className="mt-auto space-y-3">
                        <div className="flex items-center gap-4 text-sm font-bold text-[#0B0B0B]">
                          {project.language && (
                            <div className="flex items-center gap-1.5">
                              <span className="w-3 h-3 rounded-full border border-black" style={{ backgroundColor: project.language_color }}></span>
                              <span>{project.language}</span>
                            </div>
                          )}
                          {project.license && (
                            <div className="flex items-center gap-1.5" title="License">
                              <Scale className="w-4 h-4" />
                              <span>{project.license}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-sm font-bold text-[#0B0B0B] border-t-2 border-black/10 pt-3">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1" title="Stars"><Star className="w-4 h-4 fill-black" /> {project.stargazers_count}</span>
                            <span className="flex items-center gap-1" title="Forks"><GitFork className="w-4 h-4" /> {project.forks_count}</span>
                          </div>
                          <div className="flex items-center gap-1 opacity-80" title="Last Updated">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(project.pushed_at)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[320px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="mb-6">
                    <Image
                      src="/images/get-in-touch.svg"
                      alt="Get in touch"
                      width={80}
                      height={80}
                      className="w-[80px] h-[80px]"
                    />
                  </div>
                  <h3 className="text-[28px] leading-[34px] font-bold mb-3 text-[#0B0B0B]">Get in touch</h3>
                  <p className="text-[18px] leading-[28px] font-medium text-[#393939] mb-6">
                    Looking for a developer? Get in touch with me!
                  </p>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=chrsnikhil@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-black text-white hover:bg-black/90 rounded-[16px] px-8 py-4 font-medium text-[16px] w-full max-w-[280px] transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get in touch
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
