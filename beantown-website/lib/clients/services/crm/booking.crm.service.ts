import { CreateBookingInboundDto } from '@lib/api/crm/service-titan/createBooking.handler';
import { apiClient } from '@lib/clients/services/api.client';

export async function createBooking(
	payload: CreateBookingInboundDto
): Promise<void> {
	await apiClient('crm/create-booking', {
		method: 'POST',
		body: payload,
	});
}
