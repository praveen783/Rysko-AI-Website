import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const email = body?.email?.trim();
    const link = body?.link?.trim();
    const plan = body?.plan?.trim();

    if (!email || !link || !plan) {
      return Response.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const { error: dbError } = await supabase.from("leads").insert([
      {
        email,
        link,
        plan,
      },
    ]);

    if (dbError) {
      return Response.json({ error: dbError.message }, { status: 500 });
    }

    const emailResult = await resend.emails.send({
      from: "Rysko AI <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to Rysko AI 🚀",
      html: `
        <div style="margin:0;padding:0;background:#050814;font-family:Inter,Arial,sans-serif;">
          <div style="max-width:680px;margin:0 auto;padding:32px 20px;">
            
            <div style="background:linear-gradient(180deg,#071024 0%, #0a1326 100%);border:1px solid rgba(255,255,255,0.08);border-radius:24px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.35);">
              
              <!-- Top glow banner -->
              <div style="padding:28px 32px;background:
                radial-gradient(circle at top left, rgba(34,211,238,0.20), transparent 28%),
                radial-gradient(circle at top right, rgba(139,92,246,0.18), transparent 24%),
                linear-gradient(135deg,#071024 0%,#0b1730 55%,#091126 100%);
                border-bottom:1px solid rgba(255,255,255,0.08);">
                
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="vertical-align:middle;">
                      <table role="presentation" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                        <tr>
                          <td style="vertical-align:middle;">
                            <div style="width:52px;height:52px;border-radius:16px;
                              background:linear-gradient(135deg,#22d3ee 0%,#3b82f6 45%,#8b5cf6 100%);
                              display:flex;align-items:center;justify-content:center;
                              box-shadow:0 0 24px rgba(34,211,238,0.22);">
                              <div style="width:28px;height:28px;border:2px solid rgba(255,255,255,0.95);border-radius:50%;position:relative;">
                                <div style="position:absolute;left:50%;top:50%;width:2px;height:12px;background:#fff;transform:translate(-50%,-100%) rotate(45deg);transform-origin:bottom center;border-radius:2px;"></div>
                                <div style="position:absolute;right:-3px;top:2px;width:0;height:0;border-left:6px solid #f97316;border-top:4px solid transparent;border-bottom:4px solid transparent;transform:rotate(20deg);"></div>
                              </div>
                            </div>
                          </td>
                          <td style="padding-left:14px;vertical-align:middle;">
                            <div style="font-size:24px;font-weight:800;line-height:1;color:#ffffff;">Rysko AI</div>
                            <div style="margin-top:6px;font-size:13px;line-height:1.5;color:rgba(255,255,255,0.68);">
                              Detect AI risks before users do
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td align="right" style="vertical-align:middle;">
                      <div style="display:inline-block;padding:8px 14px;border-radius:999px;
                        background:rgba(34,211,238,0.10);
                        border:1px solid rgba(34,211,238,0.18);
                        color:#baf7ff;font-size:12px;font-weight:700;letter-spacing:0.02em;">
                        Welcome to Rysko AI
                      </div>
                    </td>
                  </tr>
                </table>

                <div style="margin-top:26px;font-size:34px;font-weight:800;line-height:1.2;color:#ffffff;">
                  Thanks for requesting your AI risk scan 🚀
                </div>

                <div style="margin-top:12px;max-width:540px;font-size:15px;line-height:1.8;color:rgba(255,255,255,0.78);">
                  We’ve received your request and our team is now reviewing your chatbot or AI system.
                </div>
              </div>

              <!-- Main content -->
              <div style="padding:32px;">
                
                <!-- Request summary -->
                <div style="border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:20px;background:
                  linear-gradient(135deg,rgba(34,211,238,0.08),rgba(139,92,246,0.08));
                  box-shadow:inset 0 1px 0 rgba(255,255,255,0.04);">
                  
                  <div style="font-size:14px;font-weight:800;letter-spacing:0.01em;color:#ffffff;margin-bottom:14px;">
                    Your request details
                  </div>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                    <tr>
                      <td style="padding:0 0 10px 0;font-size:14px;color:rgba(255,255,255,0.82);">
                        <span style="color:#8fe8ff;font-weight:700;">Selected Plan:</span> ${plan}
                      </td>
                    </tr>
                    <tr>
                      <td style="font-size:14px;color:rgba(255,255,255,0.82);word-break:break-word;">
                        <span style="color:#8fe8ff;font-weight:700;">AI Product Link:</span> ${link}
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- What we check -->
                <div style="margin-top:22px;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:22px;background:#0b1325;">
                  <div style="font-size:14px;font-weight:800;color:#ffffff;margin-bottom:14px;">
                    What we’ll check
                  </div>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                    <tr>
                      <td style="padding:0 0 12px 0;font-size:14px;color:rgba(255,255,255,0.78);">
                        <span style="color:#22d3ee;font-weight:700;">●</span>
                        &nbsp; Hallucinations and fabricated responses
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:0 0 12px 0;font-size:14px;color:rgba(255,255,255,0.78);">
                        <span style="color:#8b5cf6;font-weight:700;">●</span>
                        &nbsp; Prompt injection vulnerabilities
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:0 0 12px 0;font-size:14px;color:rgba(255,255,255,0.78);">
                        <span style="color:#22d3ee;font-weight:700;">●</span>
                        &nbsp; Unsafe or risky behavior patterns
                      </td>
                    </tr>
                    <tr>
                      <td style="font-size:14px;color:rgba(255,255,255,0.78);">
                        <span style="color:#f97316;font-weight:700;">●</span>
                        &nbsp; High-priority issues to fix first
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- Timeline -->
                <div style="margin-top:22px;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:20px;background:
                  linear-gradient(90deg,rgba(34,211,238,0.08),rgba(139,92,246,0.08));">
                  <div style="font-size:14px;font-weight:800;color:#ffffff;margin-bottom:8px;">
                    Delivery timeline
                  </div>
                  <div style="font-size:14px;line-height:1.8;color:rgba(255,255,255,0.78);">
                    You’ll receive your detailed audit report within <strong style="color:#ffffff;">24–48 hours</strong>.
                  </div>
                </div>

                <!-- Closing -->
                <div style="margin-top:22px;font-size:15px;line-height:1.8;color:rgba(255,255,255,0.78);">
                  If we detect critical risks, we’ll highlight them clearly so you can fix the most important issues first.
                </div>

                <!-- CTA -->
                <div style="margin-top:26px;">
                  <a href="https://rysko.ai" style="display:inline-block;padding:14px 20px;border-radius:14px;
                    background:linear-gradient(90deg,#22d3ee 0%,#8b5cf6 100%);
                    color:#ffffff;text-decoration:none;font-weight:800;font-size:14px;
                    box-shadow:0 10px 24px rgba(34,211,238,0.18);">
                    Visit Rysko AI
                  </a>
                </div>

                <!-- Footer line -->
                <div style="margin-top:28px;padding-top:18px;border-top:1px solid rgba(255,255,255,0.08);
                  font-size:12px;line-height:1.8;color:rgba(255,255,255,0.48);">
                  Rysko AI • Fast AI audits • Clear insights • Better reliability
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    if (emailResult?.error) {
      return Response.json(
        { error: emailResult.error.message || "Email sending failed." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    return Response.json(
      { error: err.message || "Something went wrong." },
      { status: 500 }
    );
  }
}