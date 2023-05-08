import { apiClient } from '@lib/clients/services/api.client';

export async function getAuthToken(): Promise<string | null> {
	return await apiClient('auth/get-auth-token', {
		method: 'GET',
	});
}
