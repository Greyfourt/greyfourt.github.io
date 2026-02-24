import icons from './iconRegistry';

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const icon = icons[name];
  if (!icon) return null;

  const isFilled = icon.style === 'filled';

  return (
    <svg
      viewBox={icon.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={isFilled
        ? { fill: 'currentColor' }
        : { stroke: 'currentColor', fill: 'transparent' }
      }
    >
      {icon.paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          {...(p.strokeWidth && { strokeWidth: p.strokeWidth })}
          {...(p.strokeLinecap && { strokeLinecap: p.strokeLinecap as any })}
          {...(p.strokeLinejoin && { strokeLinejoin: p.strokeLinejoin as any })}
        />
      ))}
      {icon.circles?.map((c, i) => (
        <circle key={`c${i}`} cx={c.cx} cy={c.cy} r={c.r} />
      ))}
      {icon.rects?.map((r, i) => (
        <rect key={`r${i}`} x={r.x} y={r.y} width={r.width} height={r.height} rx={r.rx} />
      ))}
    </svg>
  );
};

export default Icon;
