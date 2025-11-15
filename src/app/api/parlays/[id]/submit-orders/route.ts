import { NextResponse } from 'next/server'

// DEMO endpoint: в этой версии мы не отправляем реальные ордера в Polymarket.
// Просто возвращаем фиктивный ответ, чтобы Next смог собрать проект.
export async function POST() {
  return NextResponse.json({
    status: 'demo',
    message: 'Order submission is disabled in demo mode.',
  })
}
