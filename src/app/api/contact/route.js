export async function POST(req) {
  try {
    const formData = await req.formData()

    // Convert FormData to URL-encoded for FormSubmit
    const body = new URLSearchParams()
    for (const [key, value] of formData.entries()) {
      body.append(key, value)
    }

    // Send to FormSubmit (server-side, no CORS issue)
    const res = await fetch("https://formsubmit.co/el/lahopi", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    })

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to send message" }),
        { status: 500 }
      )
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    )
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    )
  }
}
