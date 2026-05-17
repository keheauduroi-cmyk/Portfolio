const metrics = [
  ["15+", "semaines de stage"],
  ["7", "principaux projets marketing"],
  ["4", "années d’apprentissages"]
];

export function MetricStrip() {
  return (
    <div className="grid border border-white/10 bg-white/[0.055] md:grid-cols-3">
      {metrics.map(([value, label]) => (
        <div key={label} className="border-b border-white/10 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-7">
          <p className="font-display text-5xl font-semibold leading-none text-white">{value}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/72">{label}</p>
        </div>
      ))}
    </div>
  );
}
