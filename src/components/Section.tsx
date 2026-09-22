import React, { ReactNode, useEffect, useRef, useState } from "react";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

// Page section with a terminal-style heading that fades in when scrolled into view.
function Section({ id, index, title, children }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`section${visible ? ' is-visible' : ''}`}>
      <h2 className="section-title">
        <span className="section-index">{index}.</span>
        <span className="prompt">~/</span>{title}
      </h2>
      {children}
    </section>
  );
}

export default Section;
