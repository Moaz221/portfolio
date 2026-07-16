export default function SVGIcon({d, size=16, fill="currentColor", className=""}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} className={className}><path d={d}/></svg>;
}