import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const { email } = await req.json()

    // Example: forward to your email (or store somewhere)
    await resend.emails.send({
      from: 'Arden Newsletter <onboarding@resend.dev>',
      to: 'yourpersonalemail@example.com',
      subject: 'New Newsletter Signup',
      text: `New subscriber: ${email}`,
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
