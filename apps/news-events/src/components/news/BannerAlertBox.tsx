interface BannerAlertBoxProps {
  icon?: string;
  iconColor?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  buttonVariant?: 'primary' | 'secondary' | 'tertiary';
}

export function BannerAlertBox({ icon = 'folder_special', iconColor = 'text-tertiary-fixed', title, description, buttonText, buttonLink = '#', buttonVariant = 'tertiary' }: BannerAlertBoxProps) {
  const buttonClasses = {
    primary: 'px-space-md py-1 bg-primary text-on-primary font-label-sm text-label-sm uppercase font-bold rounded hover:bg-primary-container transition-colors',
    secondary: 'px-space-md py-1 bg-secondary text-on-secondary font-label-sm text-label-sm uppercase font-bold rounded hover:bg-secondary-container transition-colors',
    tertiary: 'px-space-md py-1 bg-tertiary-fixed text-tertiary font-label-sm text-label-sm uppercase font-bold rounded hover:bg-surface-container-lowest transition-colors',
  };

  return (
    <div className="bg-primary text-surface-container-lowest p-space-md rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-space-sm">
        <span className={`material-symbols-outlined ${iconColor} text-[24px]`}>{icon}</span>
        <div>
          <p className="font-label-md text-label-md font-semibold text-tertiary-fixed">{title}</p>
          <p className="font-body-sm text-body-sm text-primary-fixed-dim">{description}</p>
        </div>
      </div>
      <a className={buttonClasses[buttonVariant]} href={buttonLink}>
        {buttonText}
      </a>
    </div>
  );
}