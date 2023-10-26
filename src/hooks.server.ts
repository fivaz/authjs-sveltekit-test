import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import { PrismaAdapter } from '@auth/prisma-adapter';
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private"
import prisma from '$lib/prisma';

export const handle = SvelteKitAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
})
