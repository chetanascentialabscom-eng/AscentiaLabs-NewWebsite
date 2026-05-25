const Logo = ({ size = 'md' }) => {
  const sizes = { sm: 'w-6 h-6', md: 'w-7 h-7' };
  return (
    <div className="flex items-center gap-2.5">
      <svg className={sizes[size]} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2L16.5 9.5L24 12L16.5 14.5L14 22L11.5 14.5L4 12L11.5 9.5L14 2Z" fill="#ffb400"/>
        <circle cx="14" cy="12" r="3" fill="#ffd166"/>
      </svg>
      <span className="font-bold text-[15px] text-white tracking-tight">
        Untitled UI
      </span>
    </div>
  );
};

export default Logo;
