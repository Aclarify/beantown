import { apiClient } from '@lib/clients/services/api.client';

export async function createJobApplication(
	payload: Record<string, any>
): Promise<void> {
	await apiClient('careers/apply-job', {
		method: 'POST',
		body: payload,
	});
}
