const AboutSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-tight">
        Sobre mí
      </h2>
      <div className="space-y-6 text-base md:text-lg font-sans font-light leading-relaxed text-muted-foreground">
        <p>
          Soy terapeuta formado en{" "}
          <em className="font-serif text-foreground">Compassionate Inquiry</em>,
          el enfoque creado por Gabor Maté. Mi trabajo parte de una convicción
          simple: no podemos sanar lo que no estamos dispuestos a ver.
        </p>
        <p>
          No soy un terapeuta que te va a decir lo que querés escuchar. Tampoco
          uno que te empuje hacia donde no estás listo/a para ir. Mi rol es
          acompañarte a mirar —con honestidad, con respeto, y sin prisa.
        </p>
        <p>
          Creo que cada persona ya sabe, en algún nivel, qué es lo que necesita
          enfrentar. Mi trabajo es ayudar a que eso pueda ser dicho en voz alta.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
