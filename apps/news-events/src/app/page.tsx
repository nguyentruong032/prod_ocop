import { SubNavigation } from '@/components/news/SubNavigation';
import { HeroSection } from '@/components/news/HeroSection';
import { EventsCalendarHub } from '@/components/news/EventsCalendarHub';
import { NewsStreamSection } from '@/components/news/NewsStreamSection';

export default function NewsEventsPage() {
  return (
    <div className="min-h-full">
      <SubNavigation />
      <HeroSection />
      <EventsCalendarHub />
      <NewsStreamSection />
    </div>
  );
}