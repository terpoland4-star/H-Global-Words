import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);
    
    if (body.honeypot) {
      return NextResponse.json({ message: 'Spam rejeté' }, { status: 400 });
    }
    
    const { error } = await resend.emails.send({
      from: 'Contact HAM GLOBAL WORDS <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'contact@hamglobalwords.com'],
      subject: `Nouveau message de ${validated.name}`,
      html: `
        <h1>Message de contact</h1>
        <p><strong>Nom :</strong> ${validated.name}</p>
        <p><strong>Email :</strong> ${validated.email}</p>
        <p><strong>Tél :</strong> ${validated.phone || 'Non fourni'}</p>
        <p><strong>Message :</strong></p>
        <p>${validated.message.replace(/\n/g, '<br />')}</p>
      `,
    });
    
    if (error) throw error;
    
    return NextResponse.json({ message: 'Message envoyé avec succès' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
  }
}
