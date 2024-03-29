import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    register: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData());

        const { error: err } = await locals.sb.auth.signUp({
            email: body.email as string,
            password: body.password as string,
        });

        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: 'Email o password inválidos',
                });
            }
            return fail(400, {
                error: 'Error del servidor. Intenta más tarde.',
            });
        }
        throw redirect(303, '/confirm-email');
    },
};
