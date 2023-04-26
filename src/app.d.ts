// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="@sveltejs/kit" />

import { TypedSupabaseClient } from '@supabase/auth-helpers-sveltekit/dist/types';
import { Session } from '@supabase/supabase-js';

declare global {
    declare namespace App {
        interface Supabase {
            Database: import('./DatabaseDefinitions').Database;
            SchemaName: 'public';
        }

        interface Locals {
            sb: TypedSupabaseClient;
            session: Session | null;
        }
        interface PageData {
            session: import('@supabase/supabase-js').Session | null;
        }
        // interface Error {}
        // interface Platform {}
    }
}

export {};
