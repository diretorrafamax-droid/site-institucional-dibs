import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

export interface ContactData {
  nome: string
  empresa: string
  email: string
  telefone?: string
  servico_interesse: string
  mensagem: string
  origem?: string
}

function isSmtpConfigured(): boolean {
  const user = process.env.SMTP_USER
  return !!user && !user.includes('seu-email') && !user.includes('placeholder')
}

function buildEmailHtml(data: ContactData): string {
  return `
    <h2>Novo contato via site institucional</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold">Nome</td><td style="padding:8px;border-bottom:1px solid #ddd">${data.nome}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold">Empresa</td><td style="padding:8px;border-bottom:1px solid #ddd">${data.empresa}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold">E-mail</td><td style="padding:8px;border-bottom:1px solid #ddd">${data.email}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold">Telefone</td><td style="padding:8px;border-bottom:1px solid #ddd">${data.telefone || '—'}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold">Serviço</td><td style="padding:8px;border-bottom:1px solid #ddd">${data.servico_interesse}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold">Origem</td><td style="padding:8px;border-bottom:1px solid #ddd">${data.origem || 'formulario'}</td></tr>
    </table>
    <h3>Mensagem</h3>
    <p style="background:#f5f5f5;padding:16px;border-radius:8px">${data.mensagem.replace(/\n/g, '<br>')}</p>
    <hr>
    <p style="font-size:12px;color:#666">Enviado via dibs.solutions/contato</p>
  `
}

function saveContactLocally(data: ContactData): void {
  const dir = path.join(process.cwd(), '..', 'backend', 'leads')
  fs.mkdirSync(dir, { recursive: true })
  const filename = `lead-${Date.now()}.json`
  const filepath = path.join(dir, filename)
  fs.writeFileSync(filepath, JSON.stringify({ ...data, received_at: new Date().toISOString() }, null, 2))
  console.log(`[Lead salvo localmente] ${filepath}`)
}

export async function sendContactEmail(data: ContactData): Promise<void> {
  if (!isSmtpConfigured()) {
    saveContactLocally(data)
    return
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const to = process.env.CONTACT_EMAIL || 'hello@dibs.solutions'

  await transporter.sendMail({
    from: `"${data.nome}" <${process.env.SMTP_USER}>`,
    replyTo: data.email,
    to,
    subject: `[Dibs Solutions] Novo contato de ${data.nome} — ${data.empresa}`,
    html: buildEmailHtml(data),
  })
}
