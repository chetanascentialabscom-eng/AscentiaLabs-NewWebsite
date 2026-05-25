import clsx from 'clsx';

/**
 * Reusable Button — dark enterprise theme
 * variant: 'primary' | 'outline' | 'ghost'
 */
const Button = ({ children, variant = 'primary', className, onClick, ...props }) => {
  const base =
    'inline-flex items-center gap-2 font-semibold transition-all duration-200 cursor-pointer rounded-full text-sm leading-none';

  const variants = {
    primary: 'btn-gold px-5 py-2.5',
    outline:
      'border border-white/20 text-white px-5 py-2.5 hover:border-[#ffb400]/60 hover:text-[#ffb400] hover:bg-white/5 active:scale-95',
    ghost:
      'text-slate-300 px-4 py-2 hover:text-[#ffb400] hover:bg-white/5 active:scale-95',
  };

  return (
    <button
      className={clsx(base, variants[variant], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
