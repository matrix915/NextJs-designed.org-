import { NhostClient } from "@nhost/nhost-js";

export const N_HOST_CLIENT = new NhostClient({
	backendUrl: process.env.NEXT_PUBLIC_NHOST_AUTH,
});