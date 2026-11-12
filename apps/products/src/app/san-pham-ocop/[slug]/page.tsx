import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getRelatedProducts, type Product } from '@/lib/products';
import { ProductDetailClient } from './ProductDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Sản phẩm không tồn tại' };
  }

  return {
    title: `${product.title} | Sản phẩm OCOP`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.images?.[0] || product.image,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  const products = await getAllProductSlugs();
  return products.map((slug) => ({ slug }));
}

async function getAllProductSlugs(): Promise<string[]> {
  const { allProducts } = await import('@/lib/products');
  return allProducts.map((p) => p.slug);
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}