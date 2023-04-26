import { AuthApiError } from '@supabase/supabase-js'
import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
    login: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())
        const { error: err } = await locals.sb.auth.signInWithPassword({
            email: body.email as string,
            password: body.password as string,
        })

        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: 'Email o password inválidos',
                })
            }
            return fail(500, {
                error: 'Error en el servidor, intente más tarde.',
            })
        }

        throw redirect(303, '/')
    },

    google: async ({ locals }) => {
        const { data, error } = await locals.sb.auth.signInWithOAuth({
            provider: 'google',
        })

        if (error) {
            return fail(500, {
                error: 'Error en el servidor, intente más tarde.',
            })
        }

        throw redirect(303, data.url ?? '/')
    },
}
