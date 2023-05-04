import { CreateJobApplicationInboundDto } from '@lib/api/careers/jobApplication.handler';
import { apiClient } from '@lib/clients/services/api.client';

export async function createJobApplication(
	payload: CreateJobApplicationInboundDto
): Promise<void> {
	await apiClient('careers/apply-job', {
		method: 'POST',
		body: payload,
	});
}
