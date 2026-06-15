<script>
  import { onMount, tick } from 'svelte'
  import Inundacion from './chapters/Inundacion.svelte'
  import Bosque from './chapters/Bosque.svelte'

  const chapters = [
    { id: 'inundacion', num: 'I',    name: 'La inundación', place: 'Mar de Paratethys', age: '5,3 Ma',  eon: 'Cenozoico',   color: '#1D9E75', ready: true  },
    { id: 'sabana',     num: 'II',   name: 'La sabana',     place: 'Siwalik, Pakistán', age: '7 Ma',    eon: 'Cenozoico',   color: '#3B6D11', ready: false },
    { id: 'ambar',      num: 'III',  name: 'El ámbar',      place: 'Báltico',           age: '37 Ma',   eon: 'Cenozoico',   color: '#639922', ready: false },
    { id: 'selva',      num: 'IV',   name: 'La selva',      place: 'Fayum, Egipto',     age: '37 Ma',   eon: 'Cenozoico',   color: '#BA7517', ready: false },
    { id: 'noche',      num: 'V',    name: 'La noche',      place: 'Ellesmere, Ártico', age: '53 Ma',   eon: 'Cenozoico',   color: '#854F0B', ready: false },
    { id: 'interior',   num: 'VI',   name: 'El interior',   place: 'Mar Interior',      age: '67 Ma',   eon: 'Mesozoico',   color: '#993C1D', ready: false },
    { id: 'desierto',   num: 'VII',  name: 'El desierto',   place: 'Gobi, Mongolia',    age: '75 Ma',   eon: 'Mesozoico',   color: '#D85A30', ready: false },
    { id: 'arrecife',   num: 'VIII', name: 'El arrecife',   place: 'Tethys, Europa',    age: '150 Ma',  eon: 'Mesozoico',   color: '#534AB7', ready: false },
    { id: 'bosque',     num: 'IX',   name: 'El bosque',     place: 'Hainaut, Bélgica',  age: '307 Ma',  eon: 'Paleozoico',  color: '#7F77DD', ready: true  },
    { id: 'estuario',   num: 'X',    name: 'El estuario',   place: 'Old Red, Escocia',  age: '407 Ma',  eon: 'Paleozoico',  color: '#185FA5', ready: false },
    { id: 'oceano',     num: 'XI',   name: 'El océano',     place: 'Báltico ordovícico', age: '450 Ma', eon: 'Paleozoico',  color: '#0C447C', ready: false },
    { id: 'albor',      num: 'XII',  name: 'El albor',      place: 'Ediacara, Australia', age: '555 Ma', eon: 'Precámbrico', color: '#5F5E5A', ready: false },
  ]

  const eons = ['Cenozoico', 'Mesozoico', 'Paleozoico', 'Precámbrico']

  let activeId = 'inundacion'
  let sectionRefs = {}
  let mainEl

  async function scrollTo(id) {
    await tick()
    const el = sectionRefs[id]
    if (!el || !mainEl) return
    const offsetTop = el.offsetTop
    mainEl.scrollTo({ top: offsetTop, behavior: 'smooth' })
  }

  onMount(() => {
    if (!mainEl) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) activeId = e.target.dataset.chapter
      })
    }, {
      root: mainEl,
      threshold: 0.1,
      rootMargin: '-10% 0px -60% 0px'
    })

    Object.values(sectionRefs).forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  })
</script>

<div class="atlas" id="app">

  <header class="cover">
    <div class="cover-inner">
      <p class="cover-eyebrow">Thomas Halliday</p>
      <h1 class="cover-title">Otros<br>mundos</h1>
      <p class="cover-sub">Doce ecosistemas extintos.<br>550 millones de años hacia atrás.</p>
      <button class="cover-cta" on:click={() => scrollTo('inundacion')}>
        Comenzar el viaje
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div class="cover-timeline-hint">
      {#each chapters as ch}
        <div class="hint-tick" style="background:{ch.color}; opacity:{ch.ready ? 1 : 0.3}"></div>
      {/each}
    </div>
  </header>

  <div class="main-layout">

    <nav class="sidebar" aria-label="Índice de capítulos">
      {#each eons as eon}
        {@const group = chapters.filter(c => c.eon === eon)}
        <div class="eon-group">
          <p class="eon-label">{eon}</p>
          {#each group as ch}
            <button
              class="nav-item"
              class:active={activeId === ch.id}
              on:click={() => scrollTo(ch.id)}
              style="--ch-color:{ch.color}"
            >
              <span class="nav-dot"></span>
              <span class="nav-text">
                <span class="nav-num">{ch.num}</span>
                <span class="nav-name">{ch.name}</span>
              </span>
              <span class="nav-age">{ch.age}</span>
            </button>
          {/each}
        </div>
      {/each}
    </nav>

    <main class="content" bind:this={mainEl}>
      {#each chapters as ch}
        <section
          class="chapter-section"
          data-chapter={ch.id}
          bind:this={sectionRefs[ch.id]}
          style="--ch-color:{ch.color}"
        >
          {#if ch.id === 'inundacion'}
            <Inundacion />
          {:else if ch.id === 'bosque'}
            <Bosque />
          {:else}
            <div class="placeholder">
              <div class="placeholder-header">
                <span class="ph-num">{ch.num}</span>
                <div>
                  <h2 class="ph-title">{ch.name}</h2>
                  <p class="ph-meta">{ch.place} · {ch.age}</p>
                </div>
              </div>
              <div class="ph-body">
                <div class="ph-line"></div>
                <div class="ph-line short"></div>
                <div class="ph-line"></div>
                <div class="ph-line medium"></div>
                <p class="ph-label">Capítulo en preparación</p>
              </div>
            </div>
          {/if}
        </section>
      {/each}
    </main>

  </div>
</div>

<style>
  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
  :global(body) {
    background: #0d0d0b;
    color: #e8e4da;
    font-family: 'DM Sans', sans-serif;
    overflow: hidden;
    height: 100vh;
  }

  .atlas {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }

  /* COVER */
  .cover {
    flex-shrink: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;
    position: relative;
    border-bottom: 0.5px solid rgba(255,255,255,0.08);
  }
  .cover-inner { max-width: 560px; margin: 0 auto; padding: 6rem 0 4rem; }
  .cover-eyebrow {
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(232,228,218,0.4);
    margin-bottom: 1.5rem;
  }
  .cover-title {
    font-family: 'EB Garamond', serif;
    font-size: clamp(64px, 12vw, 110px);
    font-weight: 400;
    line-height: 0.92;
    letter-spacing: -0.02em;
    color: #e8e4da;
    margin-bottom: 2rem;
  }
  .cover-sub {
    font-size: 16px;
    color: rgba(232,228,218,0.55);
    line-height: 1.7;
    margin-bottom: 3rem;
    font-weight: 300;
  }
  .cover-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: 0.5px solid rgba(232,228,218,0.3);
    color: #e8e4da;
    padding: 10px 20px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    letter-spacing: 0.04em;
    cursor: pointer;
    border-radius: 2px;
    transition: border-color 0.2s;
  }
  .cover-cta:hover { border-color: rgba(232,228,218,0.7); }
  .cover-timeline-hint {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 3px;
  }
  .hint-tick { width: 24px; height: 3px; border-radius: 1px; }

  /* LAYOUT */
  .main-layout {
    display: flex;
    flex: 1;
    height: 100vh;
    overflow: hidden;
  }

  /* SIDEBAR — scrollea independientemente */
  .sidebar {
    width: 220px;
    flex-shrink: 0;
    height: 100vh;
    overflow-y: auto;
    padding: 2.5rem 0 2.5rem 1.5rem;
    border-right: 0.5px solid rgba(255,255,255,0.06);
    scrollbar-width: none;
    position: sticky;
    top: 0;
  }
  .sidebar::-webkit-scrollbar { display: none; }

  .eon-group { margin-bottom: 1.75rem; }
  .eon-label {
    font-size: 9px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(232,228,218,0.25);
    margin-bottom: 0.5rem;
    padding-left: 14px;
  }
  .nav-item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px 8px 5px 0;
    border-radius: 3px;
    text-align: left;
    transition: background 0.15s;
  }
  .nav-item:hover { background: rgba(255,255,255,0.04); }
  .nav-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid rgba(232,228,218,0.2);
    flex-shrink: 0;
    transition: background 0.2s, border-color 0.2s, transform 0.2s;
  }
  .nav-item.active .nav-dot {
    background: var(--ch-color);
    border-color: var(--ch-color);
    transform: scale(1.3);
  }
  .nav-text { display: flex; align-items: baseline; gap: 6px; flex: 1; min-width: 0; }
  .nav-num { font-size: 9px; color: rgba(232,228,218,0.3); min-width: 16px; }
  .nav-name {
    font-size: 12px;
    color: rgba(232,228,218,0.5);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.2s;
  }
  .nav-item.active .nav-name { color: #e8e4da; }
  .nav-age { font-size: 10px; color: rgba(232,228,218,0.2); white-space: nowrap; }

  /* CONTENT — el único elemento que hace scroll */
  .content {
    flex: 1;
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.1) transparent;
  }

  .chapter-section {
    min-height: 100vh;
    border-bottom: 0.5px solid rgba(255,255,255,0.05);
  }

  /* PLACEHOLDER */
  .placeholder { padding: 5rem 3rem 4rem; max-width: 680px; }
  .placeholder-header {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
  .ph-num {
    font-family: 'EB Garamond', serif;
    font-size: 48px;
    color: var(--ch-color);
    opacity: 0.4;
    line-height: 1;
    font-style: italic;
  }
  .ph-title {
    font-family: 'EB Garamond', serif;
    font-size: 36px;
    font-weight: 400;
    color: rgba(232,228,218,0.3);
    margin-bottom: 0.25rem;
  }
  .ph-meta { font-size: 12px; color: rgba(232,228,218,0.2); letter-spacing: 0.06em; }
  .ph-body { padding-left: calc(48px + 1.5rem); }
  .ph-line { height: 10px; background: rgba(255,255,255,0.05); border-radius: 2px; margin-bottom: 12px; }
  .ph-line.short { width: 55%; }
  .ph-line.medium { width: 75%; }
  .ph-label { font-size: 11px; color: rgba(232,228,218,0.15); letter-spacing: 0.08em; margin-top: 1.5rem; }
</style>