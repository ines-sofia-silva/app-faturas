import './App.css'

const summaryCards = [
  { label: 'Total emitidas', value: '128', change: '+12% vs mês anterior' },
  { label: 'Pendentes', value: '17', change: '5 a vencer esta semana' },
  { label: 'Pagas', value: '94', change: '86% do total' },
  { label: 'Duplicadas', value: '3', change: '2 precisam revisão' },
]

const invoices = [
  { ref: 'FT-2025-0142', supplier: 'Lojas do Vale', date: '12 Jun 2025', status: 'Pendente', amount: '€1.280,00' },
  { ref: 'FT-2025-0140', supplier: 'NorteTech', date: '10 Jun 2025', status: 'Paga', amount: '€890,50' },
  { ref: 'FT-2025-0138', supplier: 'AquaPro', date: '08 Jun 2025', status: 'Em revisão', amount: '€640,20' },
  { ref: 'FT-2025-0136', supplier: 'MobiForm', date: '05 Jun 2025', status: 'Duplicada', amount: '€430,00' },
]

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">F</div>
          <div>
            <p className="eyebrow">Gestão</p>
            <h1>Faturas+</h1>
          </div>
        </div>

        <nav className="nav" aria-label="Navegação principal">
          <button type="button" className="nav-item active">Dashboard</button>
          <button type="button" className="nav-item">Faturas</button>
          <button type="button" className="nav-item">Fornecedores</button>
          <button type="button" className="nav-item">Pagamentos</button>
          <button type="button" className="nav-item">Relatórios</button>
        </nav>

        <div className="sidebar-card">
          <p className="card-label">Status</p>
          <strong>Operação normal</strong>
          <span>Sincronização Google Drive ativa</span>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Visão geral</p>
            <h2>Controlo de faturação</h2>
          </div>

          <div className="topbar-actions">
            <button type="button" className="secondary-button">Exportar</button>
            <button type="button" className="primary-button">Nova fatura</button>
          </div>
        </header>

        <section className="summary-grid" aria-label="Resumo financeiro">
          {summaryCards.map((card) => (
            <article key={card.label} className="summary-card">
              <span>{card.label}</span>
              <strong>{card.value}</strong>
              <small>{card.change}</small>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="panel panel-large">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Últimas entradas</p>
                <h3>Faturas recentes</h3>
              </div>
              <button type="button" className="link-button">Ver todas</button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Referência</th>
                  <th>Fornecedor</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.ref}>
                    <td>{invoice.ref}</td>
                    <td>{invoice.supplier}</td>
                    <td>{invoice.date}</td>
                    <td>
                      <span className={`status-badge ${invoice.status.toLowerCase().replace(/\s+/g, '-')}`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td>{invoice.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="panel panel-side">
            <div className="panel-header compact">
              <div>
                <p className="eyebrow">Ações rápidas</p>
                <h3>Fluxo do dia</h3>
              </div>
            </div>

            <ul className="task-list">
              <li>
                <span className="task-dot green" />
                Validar faturas pendentes
              </li>
              <li>
                <span className="task-dot amber" />
                Confirmar pagamentos programados
              </li>
              <li>
                <span className="task-dot red" />
                Revisar duplicados encontrados
              </li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
