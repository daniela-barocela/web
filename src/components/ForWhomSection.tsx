const items = [
  "Si observas que reaccionás de maneras repetitivas,",
  "Hay algo que te duele y no sabés exactamente qué es, pero lo sentís en el cuerpo.",
  "Funcionás bien hacia afuera, pero por dentro hay una desconexión que no podés nombrar.",
  "Te cuesta poner límites, decir que no, o simplemente sentir que tenés derecho a ocupar espacio.",
  "Ya probaste terapia antes, pero sentís que algo esencial no fue tocado.",
];

const ForWhomSection = () => (
  <section className="py-24 md:py-32 px-6 bg-card">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
        Para quién es este espacio
      </h2>
      <p className="text-muted-foreground font-sans font-light mb-12">
        Para toda persona abierta a mirarse con honestidad y respeto a sí misma
      </p>
      <ul className="space-y-6">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-4 text-base md:text-lg font-sans font-light leading-relaxed text-muted-foreground"
          >
            <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ForWhomSection;
