import { notFound } from "next/navigation";
import { services } from "../../data";
import ServiceClient from "./ServiceClient";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Not Found | BTL Rail" };
  return { title: `${service.title} | BTL Rail`, description: service.shortDescription };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceClient slug={service.slug} />;
}
