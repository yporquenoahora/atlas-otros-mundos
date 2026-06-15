<script>
  let waterLevel = 60
  let showAnimals = true
</script>

<article class="chapter">

  <!-- CABECERA -->
  <header class="ch-header">
    <div class="ch-meta-row">
      <span class="ch-num">I</span>
      <span class="ch-eon">Cenozoico · Zancliense · Mioceno tardío</span>
    </div>
    <h2 class="ch-title">La inundación</h2>
    <p class="ch-place">Mar de Paratethys — Europa central</p>
    <time class="ch-age">Hace 5,3 millones de años</time>
  </header>

  <!-- CUERPO: ilustración + texto -->
  <div class="ch-body">

    <!-- ILUSTRACIÓN -->
    <figure class="ch-figure">
      <div class="fig-control">
        <label class="ctrl-label">Nivel del mar</label>
        <input type="range" min="10" max="95" bind:value={waterLevel} />
        <span class="ctrl-val">{waterLevel}%</span>
      </div>
      <div class="fig-toggle">
        <button class="toggle-btn" class:on={showAnimals} on:click={() => showAnimals = !showAnimals}>
          {showAnimals ? 'Ocultar fauna' : 'Mostrar fauna'}
        </button>
      </div>

      <svg viewBox="0 0 540 420" width="100%" xmlns="http://www.w3.org/2000/svg" aria-label="Ilustración del Mar de Paratethys durante la crisis del Mesiniense">

        <!-- Cielo -->
        <rect x="0" y="0" width="540" height="420" fill="#1a1410"/>

        <!-- Estrellas / haze -->
        <circle cx="80"  cy="30"  r="1" fill="#c8b89a" opacity="0.4"/>
        <circle cx="200" cy="18"  r="0.8" fill="#c8b89a" opacity="0.3"/>
        <circle cx="340" cy="40"  r="1.2" fill="#c8b89a" opacity="0.35"/>
        <circle cx="460" cy="22"  r="0.7" fill="#c8b89a" opacity="0.25"/>
        <circle cx="500" cy="55"  r="1"   fill="#c8b89a" opacity="0.3"/>
        <circle cx="130" cy="60"  r="0.6" fill="#c8b89a" opacity="0.2"/>

        <!-- Montañas / orilla -->
        <polygon points="0,200 90,120 180,160 260,100 370,150 460,110 540,140 540,210 0,210" fill="#2a2318"/>
        <polygon points="0,210 60,175 140,195 220,170 300,185 400,165 480,180 540,170 540,220 0,220" fill="#1e1a12"/>

        <!-- Agua — nivel dinámico -->
        <clipPath id="water-clip">
          <rect x="0" y="{420 - waterLevel * 2.8}" width="540" height="420"/>
        </clipPath>

        <!-- Fondo marino visible bajo el agua -->
        <g clip-path="url(#water-clip)">
          <rect x="0" y="200" width="540" height="220" fill="#0e1a22"/>
          <!-- Sedimentos del fondo -->
          <ellipse cx="80"  cy="400" rx="90"  ry="12" fill="#1a2830" opacity="0.8"/>
          <ellipse cx="300" cy="410" rx="130" ry="10" fill="#1a2830" opacity="0.7"/>
          <ellipse cx="480" cy="405" rx="70"  ry="9"  fill="#1a2830" opacity="0.8"/>
          <!-- Plantas acuáticas -->
          <path d="M60,390 Q65,360 58,330 Q62,300 55,270" stroke="#2d4a2a" stroke-width="1.5" fill="none"/>
          <path d="M65,390 Q70,355 63,320" stroke="#2d4a2a" stroke-width="1" fill="none"/>
          <path d="M420,400 Q418,370 425,340 Q420,310 428,280" stroke="#2d4a2a" stroke-width="1.5" fill="none"/>
          <!-- Rocas -->
          <ellipse cx="150" cy="408" rx="20" ry="7" fill="#16242e"/>
          <ellipse cx="380" cy="412" rx="15" ry="5" fill="#16242e"/>
        </g>

        <!-- Superficie del agua -->
        <g clip-path="url(#water-clip)">
          <rect x="0" y="{420 - waterLevel * 2.8}" width="540" height="6" fill="#1D9E75" opacity="0.25"/>
          <!-- Ondas superficie -->
          <path d="M0,{422 - waterLevel*2.8} Q60,{418 - waterLevel*2.8} 120,{422 - waterLevel*2.8} Q180,{426 - waterLevel*2.8} 240,{422 - waterLevel*2.8} Q300,{418 - waterLevel*2.8} 360,{422 - waterLevel*2.8} Q420,{426 - waterLevel*2.8} 480,{422 - waterLevel*2.8} Q510,{420 - waterLevel*2.8} 540,{422 - waterLevel*2.8}"
            stroke="#1D9E75" stroke-width="0.8" fill="none" opacity="0.4"/>
          <path d="M0,{426 - waterLevel*2.8} Q80,{422 - waterLevel*2.8} 160,{426 - waterLevel*2.8} Q240,{430 - waterLevel*2.8} 320,{426 - waterLevel*2.8} Q400,{422 - waterLevel*2.8} 480,{426 - waterLevel*2.8} Q510,{428 - waterLevel*2.8} 540,{426 - waterLevel*2.8}"
            stroke="#1D9E75" stroke-width="0.5" fill="none" opacity="0.25"/>
        </g>

        <!-- FAUNA (condicional) -->
        {#if showAnimals}
          <!-- Hiparión en orilla -->
          <g opacity="0.85" transform="translate(280, {420 - waterLevel*2.8 - 28})">
            <!-- cuerpo -->
            <ellipse cx="0" cy="0" rx="18" ry="8" fill="#4a3825"/>
            <!-- cabeza -->
            <ellipse cx="18" cy="-5" rx="7" ry="5" fill="#4a3825"/>
            <!-- patas -->
            <line x1="-10" y1="7" x2="-12" y2="22" stroke="#3a2c1a" stroke-width="2"/>
            <line x1="-4"  y1="7" x2="-5"  y2="22" stroke="#3a2c1a" stroke-width="2"/>
            <line x1="6"   y1="7" x2="7"   y2="22" stroke="#3a2c1a" stroke-width="2"/>
            <line x1="12"  y1="7" x2="14"  y2="22" stroke="#3a2c1a" stroke-width="2"/>
            <!-- ojo -->
            <circle cx="21" cy="-7" r="1.5" fill="#c8a870"/>
            <!-- label -->
            <text x="0" y="-18" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="9" fill="#9fe1cb" opacity="0.8">Hipparion</text>
          </g>

          <!-- Pez dácico bajo agua -->
          {#if waterLevel > 30}
          <g opacity="0.7" transform="translate(160, {420 - waterLevel*1.4})">
            <ellipse cx="0" cy="0" rx="14" ry="5" fill="#2a5a6a"/>
            <polygon points="14,0 22,-4 22,4" fill="#2a5a6a"/>
            <circle cx="-8" cy="-1" r="1.5" fill="#7fc8d8"/>
            <text x="0" y="-14" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="9" fill="#9fe1cb" opacity="0.7">Leuciscus (cárpido)</text>
          </g>
          {/if}

          <!-- Desman acuático en orilla -->
          <g opacity="0.8" transform="translate(350, {420 - waterLevel*2.8 - 10})">
            <ellipse cx="0" cy="0" rx="10" ry="5" fill="#3d3020"/>
            <ellipse cx="11" cy="-2" rx="4" ry="3" fill="#3d3020"/>
            <line x1="14" y1="-2" x2="22" y2="-4" stroke="#3d3020" stroke-width="1.2"/>
            <circle cx="13" cy="-3" r="1" fill="#8a6a40"/>
            <text x="0" y="-14" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="9" fill="#9fe1cb" opacity="0.7">Desmana</text>
          </g>

          <!-- Pato buceador -->
          <g opacity="0.75" transform="translate(90, {420 - waterLevel*2.8 - 8})">
            <ellipse cx="0" cy="0" rx="11" ry="5" fill="#1a2a1a"/>
            <ellipse cx="10" cy="-4" rx="5" ry="4" fill="#1a2a1a"/>
            <ellipse cx="10" cy="-4" rx="2" ry="2" fill="#8b3a1a"/>
            <text x="0" y="-16" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="9" fill="#9fe1cb" opacity="0.7">Netta (pato)</text>
          </g>
        {/if}

        <!-- COTA DEL AGUA — línea de referencia -->
        <line x1="0" y1="{420 - waterLevel*2.8}" x2="40" y2="{420 - waterLevel*2.8}" stroke="#1D9E75" stroke-width="0.5" opacity="0.5" stroke-dasharray="3,3"/>
        <text x="44" y="{420 - waterLevel*2.8 + 4}" font-family="DM Sans, sans-serif" font-size="9" fill="#1D9E75" opacity="0.7">cota marina</text>

        <!-- LEYENDA -->
        <text x="20" y="390" font-family="DM Sans, sans-serif" font-size="9" fill="rgba(232,228,218,0.25)">Paratethys · 5,3 Ma · Crisis del Messiniense</text>

      </svg>

      <figcaption>
        El Mar de Paratethys, aislado al norte de los Alpes y los Cárpatos, tras el cierre del estrecho que lo conectaba con el Mediterráneo.
        Ajusta el nivel del mar para ver cómo el agua del Atlántico inundó la cuenca Messiniense.
      </figcaption>
    </figure>

    <!-- TEXTO EDITORIAL -->
    <div class="ch-text">
      <p class="ch-lede">
        El Mediterráneo lleva dos millones de años evaporándose. Ahora el Atlántico ha abierto una grieta en la roca caliza de Gibraltar y el agua cae hacia la cuenca vacía en una catarata cien veces mayor que las del Niágara.
      </p>

      <p>
        Pero esta historia no ocurre en el Mediterráneo. Ocurre más al norte, en un mar que lleva sus propios tiempos: el Paratethys. Un mar interior que nació cuando Eurasia y África chocaron, levantaron los Alpes y los Cárpatos, y cortaron lo que antes era un océano en fragmentos. El Paratethys quedó encerrado, y en ese aislamiento sus criaturas siguieron su propio camino evolutivo.
      </p>

      <div class="ch-pull">
        "Los animales insulares se vuelven enanos o gigantes. En el Paratethys, ambas cosas ocurrieron a la vez."
      </div>

      <p>
        En las costas de lo que hoy es Rumanía y Ucrania, los caballos primitivos —<em>Hipparion</em>— beben en orillas que llevan décadas cambiando. Los niveles del mar suben y bajan con las glaciaciones, creando penínsulas que se vuelven islas, y luego de nuevo penínsulas. Cada ciclo es un experimento evolutivo forzado.
      </p>

      <p>
        El agua que regresa ahora no es sal: es el agua dulce del deshielo glaciar mezclándose con la salobre del Paratethys. Los peces de la familia de los cárpidos han tenido millones de años para adaptarse a salinidades cambiantes. Para ellos, esta inundación es solo la última variación de un tema familiar.
      </p>

      <div class="ch-data-row">
        <div class="datum">
          <span class="datum-val">5,3</span>
          <span class="datum-label">Ma · inicio Zancliense</span>
        </div>
        <div class="datum">
          <span class="datum-val">—700 m</span>
          <span class="datum-label">nivel del Mediterráneo antes</span>
        </div>
        <div class="datum">
          <span class="datum-val">10 m/día</span>
          <span class="datum-label">velocidad de subida estimada</span>
        </div>
      </div>

      <p>
        Halliday nos recuerda que la extrañeza del Paratethys no es una excepción: es la norma. Todo ecosistema aislado durante suficiente tiempo produce fauna que no tiene equivalente en ningún otro lugar. Lo que llamamos «normal» en la naturaleza es siempre el resultado de circunstancias históricas concretas, contingentes, irrepetibles.
      </p>
    </div>

  </div>
</article>

<style>
  .chapter {
    padding: 0;
    color: #e8e4da;
  }

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
    color: #1D9E75;
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
  .ch-place {
    font-size: 13px;
    color: #1D9E75;
    letter-spacing: 0.04em;
    margin-bottom: 0.25rem;
  }
  .ch-age {
    font-size: 12px;
    color: rgba(232,228,218,0.3);
    font-style: normal;
  }

  .ch-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    min-height: calc(100vh - 200px);
  }

  /* FIGURA */
  .ch-figure {
    padding: 2rem 2rem 2rem 3rem;
    border-right: 0.5px solid rgba(255,255,255,0.06);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .fig-control {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .ctrl-label {
    font-size: 11px;
    color: rgba(232,228,218,0.35);
    white-space: nowrap;
  }
  .ctrl-val {
    font-size: 11px;
    color: #1D9E75;
    min-width: 30px;
  }
  .fig-control input[type="range"] {
    flex: 1;
    accent-color: #1D9E75;
  }

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
  .toggle-btn.on, .toggle-btn:hover { color: #1D9E75; border-color: #1D9E75; }

  .ch-figure svg { border-radius: 3px; }
  figcaption {
    font-size: 12px;
    color: rgba(232,228,218,0.3);
    line-height: 1.6;
    font-style: italic;
  }

  /* TEXTO */
  .ch-text {
    padding: 2.5rem 3rem 3rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    overflow-y: auto;
  }

  .ch-lede {
    font-family: 'EB Garamond', serif;
    font-size: 20px;
    line-height: 1.55;
    color: rgba(232,228,218,0.9);
    font-style: italic;
  }

  .ch-text p {
    font-size: 15px;
    line-height: 1.75;
    color: rgba(232,228,218,0.65);
    font-weight: 300;
  }

  .ch-pull {
    font-family: 'EB Garamond', serif;
    font-size: 17px;
    font-style: italic;
    color: #1D9E75;
    border-left: 1.5px solid #1D9E75;
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
  .datum-val {
    font-family: 'EB Garamond', serif;
    font-size: 22px;
    color: #e8e4da;
    font-style: italic;
  }
  .datum-label {
    font-size: 10px;
    color: rgba(232,228,218,0.3);
    letter-spacing: 0.04em;
  }

  @media (max-width: 900px) {
    .ch-body { grid-template-columns: 1fr; }
    .ch-figure { border-right: none; border-bottom: 0.5px solid rgba(255,255,255,0.06); }
  }
</style>