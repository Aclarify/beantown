import { nanoid } from 'nanoid';
import { makeRequest } from './makeRequest';

const TENANT_ID = process.env.SERVICE_TITAN_TENANT_ID;
const BOOKING_PROVIDER_ID = process.env.SERVICE_TITAN_BOOKING_PROVIDER_ID;

export type Address = {
	street: string;
	city: string;
	state: string;
	zip: string;
	country: 'USA';
};

export type Contact = {
	type: 'Phone' | 'Email';
	value: string;
};

export type CreateBookingOutboundDto = {
	source: string;
	name: string;
	summary: string;
	isFirstTimeClient: boolean;
	externalId: string;
	address?: Address;
	contacts?: Contact[];
};

export type CreateBookingInboundDto = Omit<
	CreateBookingOutboundDto,
	'source' | 'externalId'
>;

export const createBooking = (createBookingDto: CreateBookingInboundDto) => {
	return makeRequest<CreateBookingOutboundDto>({
		url: `https://api.servicetitan.io/crm/v2/tenant/${TENANT_ID}/booking-provider/${BOOKING_PROVIDER_ID}/bookings`,
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
