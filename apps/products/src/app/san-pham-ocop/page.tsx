import { ProductsSubnav } from '@/components/layout/ProductsSubnav';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedFiveStarSection } from '@/components/sections/FeaturedFiveStarSection';
import { CategoryCardsSection } from '@/components/sections/CategoryCardsSection';
import { ProductFilterAndGridSection } from '@/components/sections/ProductFilterAndGridSection';
import { Providers } from '@/components/Providers';

export default function ProductsPage() {
  return (
    <Providers>
      <div className="w-full min-h-screen bg-white">
        <ProductsSubnav activeCategory="all" />
        <main className="min-h-screen bg-white">
          <HeroSection />
          <FeaturedFiveStarSection />
          <CategoryCardsSection />
          <ProductFilterAndGridSection />
        </main>
      </div>
    </Providers>
  );
}