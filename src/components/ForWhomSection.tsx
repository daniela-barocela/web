const items = [
  "Si deseas llegar al núcleo de tu dolor y buscas encontrar una manera de vivirlo de forma mas plena y libre",
  "Si hay algo que te duele y no sabés exactamente qué es, pero lo sentís en el cuerpo y deseas indagar en la causa.",
  "Si Funcionás bien hacia afuera, pero por dentro hay una desconexión que no podés nombrar.",
  "Si te cuesta poner límites y querés recuperar tu derecho a ocupar espacio y validar tu voz.",
  "Si ya probaste terapia antes, pero sentís que algo esencial no fue tocado.",
];

const ForWhomSection = () => (
  <section className="py-24 md:py-32 px-6 bg-card">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
        Para quién es este espacio
      </h2>
      <p className="text-muted-foreground font-sans font-light mb-12">
    
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
