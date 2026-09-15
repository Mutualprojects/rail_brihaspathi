import { notFound } from "next/navigation";
import { solutions } from "../../data";
import SolutionClient from "./SolutionClient";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return { title: "Not Found | BTL Rail" };
  return { title: `${solution.title} | BTL Rail`, description: solution.shortDescription };
}

export function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  return <SolutionClient slug={solution.slug} />;
}
