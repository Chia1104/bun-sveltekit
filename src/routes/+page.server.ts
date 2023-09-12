import type { PageServerLoad } from './$types';

export const load = (() => {
    const getServerRuntime = () => {
        try {
            return Bun.env.RUNTIME_ENV
        } catch (e: any) {
            return `node (ERROR: ${e.message})`
        }
    }
	return {
		serverRuntime: getServerRuntime()
	};
}) satisfies PageServerLoad;
