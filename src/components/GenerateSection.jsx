const DISCORD_INVITE_URL = 'https://discord.gg/4jtUTmxBTM';

function GenerateSection() {
  return (
    <section id="generar" className="content-section parallax-fixed-bg-2">
      <div className="section-overlay">
        <h2>Generar Cuentas</h2>
        <p>
          Descubre cómo obtener tus nuevas cuentas premium de forma rápida y
          segura.
        </p>
        <a
          href={DISCORD_INVITE_URL}
          target="_blank"
          rel="noreferrer"
          className="cta-button discord-btn"
        >
          Unirme al Discord
        </a>
      </div>
    </section>
  );
}

export default GenerateSection;
