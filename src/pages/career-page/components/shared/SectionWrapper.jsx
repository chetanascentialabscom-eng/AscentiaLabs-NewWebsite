import clsx from 'clsx';

const SectionWrapper = ({ children, className, id }) => (
  <section id={id} className={clsx('w-full', className)}>
    <div className="max-w-[760px] mx-auto px-6 lg:px-0">
      {children}
    </div>
  </section>
);

export const FullWidthSection = ({ children, className, id }) => (
  <section id={id} className={clsx('w-full', className)}>
    {children}
  </section>
);

export default SectionWrapper;
