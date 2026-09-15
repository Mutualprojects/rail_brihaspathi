import { notFound } from "next/navigation";
import { products } from "../../data";
import ProductClient from "./ProductClient";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Not Found | BTL Rail" };
  return { title: `${product.title} | BTL Rail`, description: product.shortDescription };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductClient slug={product.slug} />;
}
