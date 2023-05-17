export async function createJobApplication(
	payload: Record<string, any>
): Promise<void> {
	await fetch('/api/careers/apply-job', {
		method: 'POST',
		body: payload as any,
	});
}
