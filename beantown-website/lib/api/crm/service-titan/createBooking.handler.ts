import { nanoid } from 'nanoid';
import { makeRequest } from './makeRequest';

export type CreateBookingOutboundDto = {
	source: string;
	name: string;
	summary: string;
	isFirstTimeClient: boolean;
	externalId: string;
	address?: {
		street: string;
		city: string;
		state: string;
		zip: string;
		country: 'USA';
	};
	contacts?: {
		type: 'Phone' | 'Email';
		value: string;
	}[];
};

export type CreateBookingInboundDto = Omit<
	CreateBookingOutboundDto,
	'source' | 'externalId'
>;

export const createBooking = (createBookingDto: CreateBookingInboundDto) => {
	return makeRequest<CreateBookingOutboundDto>({
		url: `https://api.servicetitan.io/crm/v2/tenant/853167916/booking-provider/68291019/bookings`,
		method: 'POST',
		body: {
			...createBookingDto,
			source: 'Website',
			// Arbitrary external ID
			// As we have no other Single Source of Truth
			// For storing bookings
			externalId: nanoid(),
		},
	});
};
