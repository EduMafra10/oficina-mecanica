import { useEffect, useState } from 'react'

const ICONS = {
  wrench: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  oil: 'M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z',
  brake: 'M2 12a10 10 0 1 0 20 0a10 10 0 1 0-20 0 M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0',
  battery: 'M6 7h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z M22 11v2 M8 12h4',
  snow: 'M2 12h20 M12 2v20 M20 16l-4-4 4-4 M4 8l4 4-4 4 M16 4l-4 4-4-4 M8 20l4-4 4 4',
  gauge: 'm12 14 4-4 M3.34 19a10 10 0 1 1 17.32 0',
  zap: 'M13 2 3 14h9l-1 8 10-12h-9l1-8z',
  align: 'M12 2v4 M12 18v4 M4.93 4.93l2.83 2.83 M16.24 16.24l2.83 2.83 M2 12h4 M18 12h4 M4.93 19.07l2.83-2.83 M16.24 7.76l2.83-2.83',
  check: 'M20 6 9 17l-5-5',
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  clock: 'M2 12a10 10 0 1 0 20 0a10 10 0 1 0-20 0 M12 6v6l4 2',
  pin: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z M9 10a3 3 0 1 0 6 0a3 3 0 1 0-6 0',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4',
  menu: 'M4 6h16 M4 12h16 M4 18h16',
  close: 'M18 6 6 18 M6 6l12 12',
  chevron: 'm6 9 6 6 6-6',
  arrow: 'M5 12h14 M12 5l7 7-7 7',
}

function Icon({ name, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  )
}

const SERVICES = [
  { icon: 'oil', title: 'Troca de óleo', desc: 'Óleo e filtros conforme o manual do fabricante, com checagem de 20 itens.', price: 'R$ 149' },
  { icon: 'brake', title: 'Freios', desc: 'Pastilhas, discos, fluido e regulagem completa para frenagem segura.', price: 'R$ 189' },
  { icon: 'align', title: 'Alinhamento e balanceamento', desc: 'Equipamento 3D computadorizado para pneus durando muito mais.', price: 'R$ 99' },
  { icon: 'gauge', title: 'Diagnóstico eletrônico', desc: 'Scanner multimarcas para ler falhas da injeção e da central.', price: 'R$ 120' },
  { icon: 'wrench', title: 'Suspensão', desc: 'Amortecedores, molas, buchas e pivôs revisados e substituídos.', price: 'R$ 250' },
  { icon: 'snow', title: 'Ar-condicionado', desc: 'Higienização, recarga de gás e reparo do sistema de climatização.', price: 'R$ 180' },
  { icon: 'zap', title: 'Elétrica automotiva', desc: 'Alternador, motor de partida, chicotes, faróis e acessórios.', price: 'R$ 130' },
  { icon: 'battery', title: 'Baterias', desc: 'Teste de carga gratuito e troca na hora com garantia de fábrica.', price: 'R$ 399' },
]

const STEPS = [
  { n: '01', title: 'Agende online', desc: 'Escolha o serviço, o dia e o horário em menos de 1 minuto.' },
  { n: '02', title: 'Diagnóstico', desc: 'Avaliamos o veículo e enviamos o orçamento detalhado por WhatsApp.' },
  { n: '03', title: 'Aprovação', desc: 'Você aprova só o que quiser. Nada é feito sem sua autorização.' },
  { n: '04', title: 'Retire o carro', desc: 'Serviço concluído, lavado e com garantia de 90 dias.' },
]

const REVISIONS = {
  '10.000 km': ['Troca de óleo e filtro de óleo', 'Inspeção de freios', 'Verificação de fluidos', 'Calibragem e rodízio de pneus'],
  '20.000 km': ['Tudo da revisão de 10.000 km', 'Filtro de ar e de combustível', 'Filtro do ar-condicionado', 'Alinhamento e balanceamento'],
  '40.000 km': ['Tudo da revisão de 20.000 km', 'Velas de ignição', 'Fluido de freio', 'Limpeza dos bicos injetores'],
  '60.000 km': ['Tudo da revisão de 40.000 km', 'Correia dentada e tensor', 'Líquido de arrefecimento', 'Revisão completa da suspensão'],
}

const FAQ = [
  { q: 'Vocês atendem todas as marcas?', a: 'Sim. Trabalhamos com veículos nacionais e importados, de passeio e utilitários leves.' },
  { q: 'O orçamento é gratuito?', a: 'A avaliação visual é gratuita. O diagnóstico eletrônico com scanner tem custo, abatido se você fizer o serviço conosco.' },
  { q: 'Quanto tempo demora o serviço?', a: 'Troca de óleo e alinhamento ficam prontos no mesmo dia. Serviços maiores têm prazo informado no orçamento.' },
  { q: 'Quais formas de pagamento?', a: 'Pix, dinheiro, débito e crédito em até 6x sem juros.' },
  { q: 'Os serviços têm garantia?', a: 'Todos os serviços têm garantia de 90 dias e as peças seguem a garantia do fabricante.' },
]

const NAV = [
  ['servicos', 'Serviços'],
  ['sobre', 'Sobre'],
  ['revisao', 'Revisão'],
  ['agendar', 'Agendar'],
  ['faq', 'Dúvidas'],
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#inicio" className="logo">
          <span className="logo-mark"><Icon name="wrench" size={20} /></span>
          TORQUE<small>auto center</small>
        </a>
        <nav className={`nav ${open ? 'open' : ''}`}>
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#agendar" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>Agendar serviço</a>
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <span className="tag">Oficina mecânica em Mogi das Cruzes</span>
          <h1>Seu carro em <span className="accent">boas mãos.</span></h1>
          <p>Mecânica completa, diagnóstico eletrônico e manutenção preventiva com transparência do orçamento à entrega.</p>
          <div className="hero-actions">
            <a href="#agendar" className="btn btn-primary">Agendar agora <Icon name="arrow" size={18} /></a>
            <a href="#servicos" className="btn btn-ghost">Ver serviços</a>
          </div>
          <div className="stats">
            <div><strong>15+</strong><span>anos de oficina</span></div>
            <div><strong>12 mil</strong><span>carros atendidos</span></div>
            <div><strong>90 dias</strong><span>de garantia</span></div>
          </div>
        </div>

        <div className="hero-card reveal">
          <div className="hc-head">
            <span className="dot" /> Acompanhamento do serviço
          </div>
          <div className="hc-car">
            <div>
              <small>Veículo</small>
              <strong>Onix 1.0 • ABC-1D23</strong>
            </div>
            <span className="badge">Em andamento</span>
          </div>
          <ul className="hc-steps">
            <li className="done"><Icon name="check" size={16} /> Recebido na oficina</li>
            <li className="done"><Icon name="check" size={16} /> Diagnóstico concluído</li>
            <li className="done"><Icon name="check" size={16} /> Orçamento aprovado</li>
            <li className="current"><span className="pulse" /> Troca de pastilhas de freio</li>
            <li>Lavagem e entrega</li>
          </ul>
          <div className="progress"><span style={{ width: '72%' }} /></div>
          <small className="muted">Previsão de entrega: hoje, 17h30</small>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="tag">O que fazemos</span>
          <h2>Serviços completos para o seu veículo</h2>
          <p>Da manutenção básica ao reparo mais complexo, tudo em um só lugar.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="service-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="service-icon"><Icon name={s.icon} size={26} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="price">a partir de <strong>{s.price}</strong></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  const items = [
    'Mecânicos certificados e em constante treinamento',
    'Orçamento detalhado antes de qualquer serviço',
    'Peças originais ou de primeira linha com nota fiscal',
    'Fotos e vídeos do serviço enviados pelo WhatsApp',
    'Sala de espera com Wi-Fi e café',
  ]
  return (
    <section id="sobre" className="section section-alt">
      <div className="container about-grid">
        <div className="about-visual reveal">
          <div className="about-box big">
            <Icon name="shield" size={48} />
            <strong>Garantia de 90 dias</strong>
            <span>em todos os serviços</span>
          </div>
          <div className="about-box"><strong>4h</strong><span>tempo médio de serviço</span></div>
          <div className="about-box"><strong>8</strong><span>boxes de atendimento</span></div>
        </div>
        <div className="reveal">
          <span className="tag">Por que a Torque</span>
          <h2>Transparência que você enxerga</h2>
          <p className="lead">Nascemos com uma ideia simples: o cliente precisa entender o que está sendo feito no próprio carro. Por isso explicamos cada etapa e você só paga pelo que aprovar.</p>
          <ul className="check-list">
            {items.map((t) => <li key={t}><Icon name="check" size={18} /> {t}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Steps() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="tag">Como funciona</span>
          <h2>Simples do começo ao fim</h2>
        </div>
        <div className="steps-grid">
          {STEPS.map((s) => (
            <div key={s.n} className="step reveal">
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Revision() {
  const [km, setKm] = useState('10.000 km')
  return (
    <section id="revisao" className="section section-alt">
      <div className="container revision">
        <div className="reveal">
          <span className="tag">Plano de revisão</span>
          <h2>O que revisar na quilometragem do seu carro?</h2>
          <p className="lead">Selecione a quilometragem e veja os itens recomendados para a revisão preventiva.</p>
          <div className="km-tabs">
            {Object.keys(REVISIONS).map((k) => (
              <button key={k} className={k === km ? 'active' : ''} onClick={() => setKm(k)}>{k}</button>
            ))}
          </div>
        </div>
        <div className="revision-card" key={km}>
          <h3>Revisão de {km}</h3>
          <ul className="check-list">
            {REVISIONS[km].map((t) => <li key={t}><Icon name="check" size={18} /> {t}</li>)}
          </ul>
          <a href="#agendar" className="btn btn-primary">Agendar esta revisão</a>
        </div>
      </div>
    </section>
  )
}

const EMPTY = { nome: '', telefone: '', veiculo: '', servico: '', data: '', mensagem: '' }

function Booking() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [protocol, setProtocol] = useState(null)
  const today = new Date().toISOString().split('T')[0]

  const change = (e) => {
    let { name, value } = e.target
    if (name === 'telefone') {
      value = value.replace(/\D/g, '').slice(0, 11)
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
    }
    setForm({ ...form, [name]: value })
    setErrors({ ...errors, [name]: '' })
  }

  const submit = (e) => {
    e.preventDefault()
    const err = {}
    if (form.nome.trim().length < 3) err.nome = 'Informe seu nome'
    if (form.telefone.replace(/\D/g, '').length < 10) err.telefone = 'Telefone inválido'
    if (!form.veiculo.trim()) err.veiculo = 'Informe o veículo'
    if (!form.servico) err.servico = 'Escolha um serviço'
    if (!form.data) err.data = 'Escolha uma data'
    setErrors(err)
    if (Object.keys(err).length) return
    setProtocol('TQ' + Math.floor(100000 + Math.random() * 900000))
  }

  const reset = () => { setForm(EMPTY); setProtocol(null) }

  return (
    <section id="agendar" className="section">
      <div className="container booking">
        <div className="booking-info reveal">
          <span className="tag">Agendamento</span>
          <h2>Agende seu serviço</h2>
          <p className="lead">Preencha o formulário e confirmamos o horário em até 30 minutos pelo WhatsApp.</p>
          <div className="info-list">
            <div><Icon name="pin" /><span>Av. Exemplo, 1000 – Centro<br />Mogi das Cruzes – SP</span></div>
            <div><Icon name="clock" /><span>Seg a Sex: 8h às 18h<br />Sábado: 8h às 13h</span></div>
            <div><Icon name="phone" /><span>(11) 4700-0000</span></div>
          </div>
        </div>

        <div className="form-card reveal">
          {protocol ? (
            <div className="success">
              <div className="success-icon"><Icon name="check" size={36} /></div>
              <h3>Agendamento enviado!</h3>
              <p>Obrigado, {form.nome.split(' ')[0]}! Seu protocolo é <strong>{protocol}</strong>.</p>
              <p className="muted">{form.servico} • {form.data.split('-').reverse().join('/')}</p>
              <button className="btn btn-ghost" onClick={reset}>Novo agendamento</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="field">
                <label>Nome completo</label>
                <input name="nome" value={form.nome} onChange={change} placeholder="Seu nome" />
                {errors.nome && <small className="error">{errors.nome}</small>}
              </div>
              <div className="row">
                <div className="field">
                  <label>WhatsApp</label>
                  <input name="telefone" value={form.telefone} onChange={change} placeholder="(11) 90000-0000" />
                  {errors.telefone && <small className="error">{errors.telefone}</small>}
                </div>
                <div className="field">
                  <label>Veículo</label>
                  <input name="veiculo" value={form.veiculo} onChange={change} placeholder="Modelo e ano" />
                  {errors.veiculo && <small className="error">{errors.veiculo}</small>}
                </div>
              </div>
              <div className="row">
                <div className="field">
                  <label>Serviço</label>
                  <select name="servico" value={form.servico} onChange={change}>
                    <option value="">Selecione</option>
                    {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                    <option>Revisão preventiva</option>
                    <option>Outro</option>
                  </select>
                  {errors.servico && <small className="error">{errors.servico}</small>}
                </div>
                <div className="field">
                  <label>Data</label>
                  <input type="date" name="data" min={today} value={form.data} onChange={change} />
                  {errors.data && <small className="error">{errors.data}</small>}
                </div>
              </div>
              <div className="field">
                <label>Descreva o problema (opcional)</label>
                <textarea name="mensagem" rows="3" value={form.mensagem} onChange={change} placeholder="Ex.: barulho ao frear" />
              </div>
              <button type="submit" className="btn btn-primary btn-full">Solicitar agendamento</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section section-alt">
      <div className="container faq">
        <div className="section-head reveal">
          <span className="tag">Dúvidas frequentes</span>
          <h2>Perguntas e respostas</h2>
        </div>
        {FAQ.map((f, i) => (
          <div key={f.q} className={`faq-item ${open === i ? 'open' : ''}`}>
            <button onClick={() => setOpen(open === i ? -1 : i)}>
              {f.q} <Icon name="chevron" size={20} />
            </button>
            <div className="faq-answer"><p>{f.a}</p></div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#inicio" className="logo">
            <span className="logo-mark"><Icon name="wrench" size={20} /></span>
            TORQUE<small>auto center</small>
          </a>
          <p className="muted">Mecânica de confiança em Mogi das Cruzes.</p>
        </div>
        <div>
          <h4>Navegação</h4>
          {NAV.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </div>
        <div className="map">
          <iframe
            title="Localização"
            src="https://www.google.com/maps?q=Mogi+das+Cruzes+SP&output=embed"
            loading="lazy"
          />
        </div>
      </div>
      <div className="container copy">
        © {new Date().getFullYear()} Torque Auto Center • Projeto acadêmico desenvolvido em React
      </div>
    </footer>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Steps />
        <Revision />
        <Booking />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
