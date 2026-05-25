const tickerItems = [
  'Subscribe to our newsletter',
  'How it works',
  'Documentation',
  'Join the community',
];

const TickerBanner = () => {
  const items = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];
  return (
    <div
      className="overflow-hidden py-3"
      style={{
        background: 'linear-gradient(90deg, #0b1d39, #09111f, #0b1d39)',
        borderTop: '1px solid rgba(255,180,0,0.15)',
        borderBottom: '1px solid rgba(255,180,0,0.15)',
      }}
    >
      <div className="ticker-track flex items-center whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase">
            <span className="text-slate-500">{item}</span>
            <span className="text-[#ffb400] mx-3 opacity-60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerBanner;
