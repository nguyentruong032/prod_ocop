interface EventCardProps {
  title: string;
  date: string;
  location: string;
  image: string;
  alt: string;
  status: 'upcoming' | 'ongoing' | 'ended' | 'registration';
  description?: string;
  link?: string;
  variant?: 'default' | 'featured';
}

const statusConfig = {
  upcoming: {
    badgeClass: 'px-2 py-0.5 bg-amber-100 text-amber-800 text-[11px] font-semibold rounded',
    badgeText: 'Sắp diễn ra',
    pulse: false,
  },
  ongoing: {
    badgeClass: 'px-2 py-0.5 bg-green-100 text-green-800 text-[11px] font-semibold rounded flex items-center gap-1',
    badgeText: 'Đang diễn ra',
    pulse: true,
  },
  ended: {
    badgeClass: 'px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] font-semibold rounded',
    badgeText: 'Đã kết thúc',
    pulse: false,
  },
  registration: {
    badgeClass: 'px-2 py-0.5 bg-blue-100 text-blue-800 text-[11px] font-semibold rounded',
    badgeText: 'Đăng ký tham dự',
    pulse: false,
  },
};

export function EventCard({ title, date, location, image, alt, status, description, link = '#', variant = 'default' }: EventCardProps) {
  const config = statusConfig[status];

  return (
    <article className={`bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col ${variant === 'featured' ? 'lg:col-span-2' : ''}`}>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-container">
        <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={image} alt={alt} />
        <div className="absolute top-4 right-4">
          <span className={config.badgeClass}>
            {config.pulse && <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>}
            {config.badgeText}
          </span>
        </div>
      </div>
      <div className="p-space-md flex flex-col flex-1">
        <div className="flex items-center gap-2 text-body-sm text-on-surface-variant mb-2">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px]">event</span>
            {date}
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px]">location_on</span>
            {location}
          </span>
        </div>
        <h4 className="font-title-editorial text-title-editorial font-bold text-primary mb-2 hover:text-secondary transition-colors cursor-pointer line-clamp-2">
          {title}
        </h4>
        {description && (
          <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3 flex-1">
            {description}
          </p>
        )}
        <a className="inline-flex items-center text-secondary font-label-sm text-label-sm uppercase tracking-wider hover:text-on-secondary-container transition-colors mt-auto" href={link}>
          Xem chi tiết
          <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
        </a>
      </div>
    </article>
  );
}