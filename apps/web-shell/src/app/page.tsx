import { generateHomeMetadata } from '@ocop/seo-config';
import { Hero } from '@/components/home/Hero';
import { QuickLinks } from '@/components/home/QuickLinks';
import { NewsEvents } from '@/components/home/NewsEvents';
import { Products } from '@/components/home/Products';
import { Stories } from '@/components/home/Stories';
import Destinations from '@/components/home/Destinations';
import Integration from '@/components/home/Integration';

export const metadata = generateHomeMetadata();

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <NewsEvents />
      <Products />
      <Stories />
      <Destinations />
      <Integration />
    </>
  );
}