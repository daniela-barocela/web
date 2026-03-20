import aboutPhoto from "@/assets/about-me.png";

const AboutSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-tight">
        Sobre mí
      </h2>

      <div className="flex flex-col md:flex-row md:items-start gap-10">
        <div className="md:w-2/5 flex justify-center md:justify-start">
          <img
            src={aboutPhoto}
            alt="Foto de la terapeuta"
            className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full ring-1 ring-foreground/10 shadow-sm"
          />
        </div>

        <div className="flex-1 space-y-6 text-base md:text-lg font-sans font-light leading-relaxed text-muted-foreground">
          <p>
            Soy terapeuta formada en{" "}
            <em className="font-serif text-foreground">Compassionate Inquiry</em>,
            el enfoque creado por Gabor Maté. Mi trabajo parte de una convicción
            simple: sólo la compasión por nuestro proceso puede acercarnos a la sanación; y la misma comienza, como dice el Dr. Maté, cuando dejamos de preguntarnos &quot;¿Qué está mal en mí?&quot; y empezamos a preguntarnos &quot;¿Qué me pasó?&quot;.
          </p>
          <p>
            Mi intención como terapeuta es acompañarte a explorar lo que te duele y te limita y mi manera de hacerlo es con honestidad, con respeto, y sin prisa.
          </p>
          <p>
            Creo que cada persona ya sabe, en algún nivel, qué es lo que necesita
            enfrentar. Mi trabajo es ayudar a que eso pueda ser dicho en voz alta y recibido con amor y curiosidad.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
