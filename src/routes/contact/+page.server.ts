import type { PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

		if (!name) {
			return fail(400, { missingName: true, msg: 'O campo Nome é obrigatório' });
		}
		if (!email) {
			return fail(400, { missingEmail: true, msg: 'O campo Email é obrigatório' });
		}
		if (!message) {
			return fail(400, { missingMessage: true, msg: 'O campo Mensagem é obrigatório' });
		}

		const templateBody = `<div>
        <h1> Uma nova mensagem foi recebida</h1>
        <h2> <strong>De:</strong> ${name} - ${email}  </h2>
        <br />
        <p> ${message} </p>
        
      </div>`;

		try {
			const data = await resend.emails.send({
				from: 'contato@thiagomagano.com.br',
				to: 'othymag@gmail.com',
				subject: `${name} fez Contato pelo Site Pessoal`,
				html: templateBody
			});

			return { success: true, data: data, msg: 'Mensagem enviada com sucesso!!' };
		} catch (error) {
			return { success: false, data: error, msg: 'Houve um erro ao enviar a mensagem' };
		}
	}
};
