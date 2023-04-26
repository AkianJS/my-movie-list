import { error, redirect, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ locals }) => {
    const res = await locals.sb.auth.signOut();
    if (res.error)
        throw error(500, 'Algo salió mal al intentar cerrar sessión');

    throw redirect(303, '/');
};
