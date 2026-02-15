interface SectionLabelProps {
  children: string;
  center?: boolean;
}

export default function SectionLabel({ children, center }: SectionLabelProps) {
  return (
    <div className={`section-label ${center ? 'justify-center' : ''}`}>
      {children}
    </div>
  );
}
