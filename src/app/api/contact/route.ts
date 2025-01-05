import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, team, phone, email, detail } = await req.json();

    const transporter = nodemailer.createTransport({
      service: process.env.NEXT_PUBLIC_EMAIL_SERVICE,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_SEND_ADDR,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const htmlContent = `
      <h2>피지컬노트 문의사항</h2>
      <p><strong>이름:</strong> ${name}</p>
      <p><strong>소속:</strong> ${team}</p>
      <p><strong>연락처:</strong> ${phone}</p>
      <p><strong>이메일:</strong> ${email}</p>
      <h3>문의내용:</h3>
      <p>${detail.replace(/\n/g, '<br>')}</p>
    `;

    const mailOptions = {
      from: `피지컬노트 문의 <${process.env.NEXT_PUBLIC_EMAIL_SEND_ADDR}>`,
      to: process.env.NEXT_PUBLIC_EMAIL_RECEIVE_ADDR,
      subject: `[피지컬노트 문의] ${name}님의 문의사항`,
      html: htmlContent,
      text: `
        피지컬노트 문의사항
        
        이름: ${name}
        소속: ${team}
        연락처: ${phone}
        이메일: ${email}
        
        문의내용:
        ${detail}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('이메일 전송 실패:', error);
    return NextResponse.json({ error: '이메일 전송에 실패했습니다.' }, { status: 500 });
  }
}
