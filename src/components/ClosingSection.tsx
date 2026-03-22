const ClosingSection = () => (
  <section className="py-32 md:py-40 px-6 text-center">
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight italic">
        No hace falta estar list@
        <br />
        Hace falta estar dispuest@
      </h2>
      <div className="w-12 h-px bg-foreground/30 mx-auto mb-10" />
      <a
        href="https://wa.me/5491168344165"
        className="inline-block font-sans text-sm tracking-widest uppercase border border-foreground/30 px-8 py-4 transition-colors duration-300 hover:bg-foreground hover:text-background"
      >
        Escribime
      </a>
      <p className="mt-6 text-sm text-muted-foreground font-sans font-light">
        Primera conversación sin costo ni compromiso.
      </p>
    </div>
  </section>
);

export default ClosingSection;
