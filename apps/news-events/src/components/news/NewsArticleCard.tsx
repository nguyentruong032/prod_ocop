interface NewsArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
  alt: string;
  link?: string;
}

export function NewsArticleCard({ title, excerpt, date, readTime, category, author, image, alt, link = '#' }: NewsArticleCardProps) {
  return (
    <article className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="aspect-video w-full overflow-hidden bg-surface-container">
        <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={image} alt={alt} />
      </div>
      <div className="p-space-lg flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-surface-container text-secondary text-label-sm font-label-sm rounded uppercase">{category}</span>
          <span className="text-body-sm text-outline">• {date}</span>
        </div>
        <h3 className="font-title-editorial text-title-editorial font-bold text-primary mb-space-sm hover:text-secondary cursor-pointer transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-space-md flex-1">
          {excerpt}
        </p>
        <div className="mt-auto pt-space-sm flex items-center justify-between">
          <span className="text-body-sm font-medium text-on-surface">{author}</span>
          <span className="text-secondary text-label-sm font-label-sm uppercase font-semibold">{readTime}</span>
        </div>
      </div>
    </article>
  );
}