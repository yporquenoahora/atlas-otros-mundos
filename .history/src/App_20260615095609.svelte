<script>
  let oxygenLevel = 35
  let showInsects = true
</script>

<article class="chapter">

  <header class="ch-header">
    <div class="ch-meta-row">
      <span class="ch-num">IX</span>
      <span class="ch-eon">Paleozoico · Carbonífero tardío · Pennsylvaniense</span>
    </div>
    <h2 class="ch-title">El bosque</h2>
    <p class="ch-place">Hainaut — Bélgica</p>
    <time class="ch-age">Hace 307 millones de años</time>
  </header>

  <div class="ch-body">

    <!-- ILUSTRACIÓN -->
    <figure class="ch-figure">
      <div class="fig-control">
        <label class="ctrl-label">O₂ atmosférico</label>
        <input type="range" min="21" max="35" bind:value={oxygenLevel} />
        <span class="ctrl-val">{oxygenLevel}%</span>
      </div>
      <div class="fig-toggle">
        <button class="toggle-btn" class:on={showInsects} on:click={() => showInsects = !showInsects}>
          {showInsects ? 'Ocultar insectos' : 'Mostrar insectos'}
        </button>
      </div>

      <svg viewBox="0 0 540 420" width="100%" xmlns="http://www.w3.org/2000/svg" aria-label="Bosque carbonífero de Hainaut hace 307 millones de años">

        <!-- Cielo brumoso, alto en O2 -->
        <rect x="0" y="0" width="540" height="420" fill="#0d1208"/>
        <rect x="0" y="0" width="540" height="120" fill="#{oxygenLevel > 30 ? '1a2a0e' : '111a0a'}" opacity="{0.3 + (oxygenLevel - 21) * 0.02}"/>

        <!-- Niebla de suelo -->
        <ellipse cx="270" cy="370" rx="300" ry="40" fill="#1a2a14" opacity="0.6"/>
        <ellipse cx="270" cy="390" rx="280" ry="30" fill="#0d1a0a" opacity="0.8"/>

        <!-- LICOPODIOS (troncos) — árboles gigantes del Carbonífero -->
        <!-- Lepidodendron izquierda -->
        <rect x="38" y="60" width="18" height="320" fill="#1a2e10"/>
        <rect x="40" y="58" width="14" height="322" fill="#243a14"/>
        <!-- patrón de corteza lepidodendron (rombos) -->
        {#each Array(12) as _, i}
          <ellipse cx="47" cy="{80 + i*22}" rx="5" ry="7" fill="none" stroke="#2d4a1a" stroke-width="0.5"/>
        {/each}
        <!-- Copa de lepidodendron -->
        <path d="M47,60 Q20,30 10,10 Q30,35 47,55" fill="#1e3a10" stroke="#2a4e14" stroke-width="0.5"/>
        <path d="M47,60 Q70,25 85,5 Q65,30 47,55" fill="#1e3a10" stroke="#2a4e14" stroke-width="0.5"/>
        <path d="M47,80 Q15,60 5,45 Q25,65 47,78" fill="#1e3a10"/>
        <path d="M47,80 Q80,55 95,42 Q72,64 47,78" fill="#1e3a10"/>

        <!-- Sigillaria central -->
        <rect x="238" y="30" width="22" height="380" fill="#1e3612"/>
        {#each Array(15) as _, i}
          <ellipse cx="249" cy="{50 + i*22}" rx="6" ry="5" fill="none" stroke="#2d4e1a" stroke-width="0.4"/>
        {/each}
        <!-- frondas en la cima -->
        <path d="M249,30 Q220,0 205,-10 Q225,15 249,28" fill="#243a10"/>
        <path d="M249,30 Q278,-5 295,-15 Q272,12 249,28" fill="#243a10"/>
        <path d="M249,50 Q215,25 200,15 Q223,35 249,48" fill="#243a10"/>
        <path d="M249,50 Q283,22 298,12 Q274,32 249,48" fill="#243a10"/>

        <!-- Lepidodendron derecho -->
        <rect x="482" y="80" width="16" height="300" fill="#1a2e10"/>
        <rect x="484" y="78" width="12" height="302" fill="#243a14"/>
        {#each Array(10) as _, i}
          <ellipse cx="490" cy="{100 + i*24}" rx="4" ry="6" fill="none" stroke="#2d4a1a" stroke-width="0.4"/>
        {/each}
        <path d="M490,80 Q470,55 460,40 Q475,60 490,78" fill="#1e3a10"/>
        <path d="M490,80 Q510,50 520,36 Q505,58 490,78" fill="#1e3a10"/>

        <!-- Calamites (equisetos gigantes) -->
        <rect x="140" y="120" width="6" height="280" fill="#2a4a1a"/>
        <rect x="143" y="120" width="2" height="280" fill="#3a6020"/>
        {#each Array(8) as _, i}
          <line x1="135" y1="{145 + i*30}" x2="155" y2="{145 + i*30}" stroke="#2d4e18" stroke-width="0.8"/>
        {/each}

        <rect x="380" y="140" width="5" height="260" fill="#2a4a1a"/>
        {#each Array(7) as _, i}
          <line x1="375" y1="{160 + i*30}" x2="395" y2="{160 + i*30}" stroke="#2d4e18" stroke-width="0.8"/>
        {/each}

        <!-- Helechos en el suelo -->
        <path d="M60,380 Q80,340 100,320 Q90,355 70,380Z" fill="#1a3010"/>
        <path d="M80,390 Q105,350 125,330 Q112,362 90,392Z" fill="#1a3010"/>
        <path d="M150,385 Q170,355 190,340 Q178,368 158,388Z" fill="#182e0e"/>
        <path d="M300,390 Q320,358 345,345 Q330,372 308,392Z" fill="#1a3010"/>
        <path d="M420,385 Q440,355 460,342 Q448,368 428,388Z" fill="#182e0e"/>
        <path d="M450,392 Q468,362 485,350 Q474,375 455,395Z" fill="#1a3010"/>

        <!-- Suelo / hojarasca -->
        <rect x="0" y="395" width="540" height="25" fill="#0d1a08"/>
        <path d="M0,395 Q90,388 180,395 Q270,402 360,395 Q450,388 540,395" fill="#12200a" stroke="none"/>

        <!-- Agua en el suelo (pantano carbonífero) -->
        <ellipse cx="200" cy="402" rx="80" ry="8" fill="#0a1a14" opacity="0.7"/>
        <ellipse cx="380" cy="408" rx="60" ry="6" fill="#0a1a14" opacity="0.6"/>

        <!-- Rayo de luz entre los troncos -->
        <path d="M249,30 L200,380 L298,380Z" fill="#{oxygenLevel > 30 ? '3a6020' : '2a4a16'}" opacity="{0.06 + (oxygenLevel - 21) * 0.003}"/>

        <!-- INSECTOS GIGANTES -->
        {#if showInsects}
          <!-- Meganeura (libélula gigante) -->
          <g opacity="0.85" transform="translate(160, 150) rotate(-15)">
            <ellipse cx="0" cy="0" rx="16" ry="3" fill="#2a5a20"/>
            <!-- alas -->
            <ellipse cx="-5" cy="-2" rx="22" ry="6" fill="#1a3a10" opacity="0.5" transform="rotate(-20, -5, -2)"/>
            <ellipse cx="5"  cy="-2" rx="22" ry="6" fill="#1a3a10" opacity="0.5" transform="rotate(20, 5, -2)"/>
            <ellipse cx="-5" cy="3"  rx="18" ry="5" fill="#1a3a10" opacity="0.4" transform="rotate(15, -5, 3)"/>
            <ellipse cx="5"  cy="3"  rx="18" ry="5" fill="#1a3a10" opacity="0.4" transform="rotate(-15, 5, 3)"/>
            <circle cx="17" cy="0" r="3" fill="#2a4e1a"/>
            <text x="0" y="-22" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="9" fill="#9fe1cb" opacity="0.85">Meganeura — 70 cm</text>
          </g>

          <!-- Arthropleura (ciempiés gigante) en suelo -->
          <g opacity="0.8" transform="translate(320, 390)">
            {#each Array(8) as _, i}
              <ellipse cx="{i*12 - 40}" cy="0" rx="7" ry="4" fill="#2a3a18"/>
              <line x1="{i*12 - 40}" y1="4" x2="{i*12 - 44}" y2="10" stroke="#2a3a18" stroke-width="1.2"/>
              <line x1="{i*12 - 40}" y1="4" x2="{i*12 - 36}" y2="10" stroke="#2a3a18" stroke-width="1.2"/>
            {/each}
            <text x="8" y="-12" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="9" fill="#9fe1cb" opacity="0.75">Arthropleura — 2,5 m</text>
          </g>

          <!-- Pulmonoscorpius (escorpión) -->
          <g opacity="0.75" transform="translate(110, 380)">
            <ellipse cx="0" cy="0" rx="10" ry="5" fill="#1a2a10"/>
            <ellipse cx="12" cy="-2" rx="7" ry="4" fill="#1a2a10"/>
            <path d="M19,-2 Q28,0 32,-6 Q34,-12 30,-14" stroke="#1a2a10" stroke-width="2" fill="none"/>
            <circle cx="30" cy="-15" r="2" fill="#2d4a1a"/>
            <text x="5" y="-14" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="9" fill="#9fe1cb" opacity="0.7">Pulmonoscorpius</text>
          </g>
        {/if}

        <!-- Indicador de O2 -->
        <rect x="460" y="15" width="65" height="22" rx="3" fill="#0d1a08" stroke="#2d4e1a" stroke-width="0.5"/>
        <text x="492" y="30" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="10" fill="#9fe1cb">O₂: {oxygenLevel}%</text>
        {#if oxygenLevel > 30}
          <rect x="465" y="18" width="{(oxygenLevel - 21) * 6}" height="4" rx="1" fill="#3a6020" opacity="0.6"/>
        {/if}

        <!-- Leyenda -->
        <text x="20" y="415" font-family="DM Sans, sans-serif" font-size="9" fill="rgba(232,228,218,0.2)">Hainaut · 307 Ma · Carbonífero tardío</text>

      </svg>

      <figcaption>
        El bosque carbonífero de Hainaut: licopodios (<em>Lepidodendron</em>), sigilarias y calamites en un pantano ecuatorial.
        El oxígeno atmosférico —hasta el 35%— permitió que los insectos alcanzaran tamaños imposibles hoy.
      </figcaption>
    </figure>

    <!-- TEXTO EDITORIAL -->
    <div class="ch-text">
      <p class="ch-lede">
        El aire huele diferente aquí. No es que tenga olor; es que hay demasiado de él. Un 35% de oxígeno. Un ser humano en este bosque se emborracharía de aire.
      </p>

      <p>
        Los árboles del Carbonífero no son árboles en el sentido que reconocemos. Son licopodios —parientes de los musgos de club actuales— que han crecido hasta los treinta metros. Sus troncos están cubiertos de cicatrices romboidales, la huella de cada hoja caída. No tienen madera dura: son más bien cilindros de corteza húmeda alrededor de un núcleo esponjoso.
      </p>

      <div class="ch-pull">
        "Las libélulas del Carbonífero tenían la envergadura de las gaviotas. En un mundo con tanto oxígeno, el límite de tamaño de los insectos simplemente se desplazó."
      </div>

      <p>
        El problema con este bosque es que nadie sabe cómo descomponerlo. La lignina —el polímero que da dureza a la madera— es una invención relativamente reciente en términos evolutivos. Los hongos y bacterias de la época aún no han desarrollado las enzimas para degradarla. Así que cuando un árbol cae, se queda. Y debajo de él, otro. Y otro. Y otro.
      </p>

      <p>
        Estamos, literalmente, parados encima del carbón que quemaremos trescientos millones de años después. Este bosque es la fuente de la Revolución Industrial.
      </p>

      <div class="ch-data-row">
        <div class="datum">
          <span class="datum-val">307</span>
          <span class="datum-label">Ma · Pennsylvaniense</span>
        </div>
        <div class="datum">
          <span class="datum-val">35%</span>
          <span class="datum-label">O₂ atmosférico (hoy: 21%)</span>
        </div>
        <div class="datum">
          <span class="datum-val">2,5 m</span>
          <span class="datum-label">longitud de Arthropleura</span>
        </div>
      </div>

      <p>
        Halliday señala algo que se pasa por alto: el Carbonífero no fue solo un momento de exuberancia vegetal. Fue el momento en que la vida inventó los ecosistemas terrestres complejos tal como los conocemos. La hojarasca, los descomponedores, los insectos herbívoros, los primeros reptiles. Todo eso nació aquí, en estos bosques pantanosos que no eran conscientes de estar construyendo el futuro.
      </p>
    </div>

  </div>
</article>

<style>
  .chapter { padding: 0; color: #e8e4da; }

  .ch-header {
    padding: 4rem 3rem 2.5rem;
    border-bottom: 0.5px solid rgba(255,255,255,0.06);
  }
  .ch-meta-row {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .ch-num {
    font-family: 'EB Garamond', serif;
    font-size: 56px;
    color: #7F77DD;
    opacity: 0.7;
    font-style: italic;
    line-height: 1;
  }
  .ch-eon {
    font-size: 11px;
    letter-spacing: 0.1em;
    color: rgba(232,228,218,0.3);
    text-transform: uppercase;
  }
  .ch-title {
    font-family: 'EB Garamond', serif;
    font-size: clamp(36px, 6vw, 60px);
    font-weight: 400;
    line-height: 1.05;
    color: #e8e4da;
    margin-bottom: 0.75rem;
  }
  .ch-place { font-size: 13px; color: #7F77DD; letter-spacing: 0.04em; margin-bottom: 0.25rem; }
  .ch-age { font-size: 12px; color: rgba(232,228,218,0.3); font-style: normal; }

  .ch-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    min-height: calc(100vh - 200px);
  }

  .ch-figure {
    padding: 2rem 2rem 2rem 3rem;
    border-right: 0.5px solid rgba(255,255,255,0.06);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .fig-control { display: flex; align-items: center; gap: 10px; }
  .ctrl-label { font-size: 11px; color: rgba(232,228,218,0.35); white-space: nowrap; }
  .ctrl-val { font-size: 11px; color: #7F77DD; min-width: 30px; }
  .fig-control input[type="range"] { flex: 1; accent-color: #7F77DD; }
  .fig-toggle { display: flex; }
  .toggle-btn {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    color: rgba(232,228,218,0.4);
    background: transparent;
    border: 0.5px solid rgba(255,255,255,0.12);
    padding: 4px 10px;
    border-radius: 2px;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
  }
  .toggle-btn.on, .toggle-btn:hover { color: #7F77DD; border-color: #7F77DD; }

  .ch-figure svg { border-radius: 3px; }
  figcaption { font-size: 12px; color: rgba(232,228,218,0.3); line-height: 1.6; font-style: italic; }

  .ch-text {
    padding: 2.5rem 3rem 3rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .ch-lede {
    font-family: 'EB Garamond', serif;
    font-size: 20px;
    line-height: 1.55;
    color: rgba(232,228,218,0.9);
    font-style: italic;
  }
  .ch-text p { font-size: 15px; line-height: 1.75; color: rgba(232,228,218,0.65); font-weight: 300; }
  .ch-pull {
    font-family: 'EB Garamond', serif;
    font-size: 17px;
    font-style: italic;
    color: #7F77DD;
    border-left: 1.5px solid #7F77DD;
    padding-left: 1rem;
    line-height: 1.5;
  }
  .ch-data-row {
    display: flex;
    gap: 1.5rem;
    border-top: 0.5px solid rgba(255,255,255,0.06);
    border-bottom: 0.5px solid rgba(255,255,255,0.06);
    padding: 1rem 0;
  }
  .datum { display: flex; flex-direction: column; gap: 3px; }
  .datum-val { font-family: 'EB Garamond', serif; font-size: 22px; color: #e8e4da; font-style: italic; }
  .datum-label { font-size: 10px; color: rgba(232,228,218,0.3); letter-spacing: 0.04em; }

  @media (max-width: 900px) {
    .ch-body { grid-template-columns: 1fr; }
    .ch-figure { border-right: none; border-bottom: 0.5px solid rgba(255,255,255,0.06); }
  }
</style>
