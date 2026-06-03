import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'
import type { ContactData } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body: ContactData = await request.json()

    const required = ['nome', 'empresa', 'email', 'servico_interesse', 'mensagem'] as const
    for (const field of required) {
      if (!body[field] || typeof body[field] !== 'string' || !body[field].trim()) {
        return NextResponse.json({ error: `Campo obrigatório: ${field}` }, { status: 400 })
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: 'E-mail inválido' }, { status: 400 })
    }

    await sendContactEmail(body)

    return NextResponse.json({ message: 'Mensagem enviada com sucesso!' })
  } catch (err) {
    console.error('Erro ao processar contato:', err)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}
