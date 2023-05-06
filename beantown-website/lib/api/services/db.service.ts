import { MongoClient, ObjectId } from 'mongodb';
import { CreateJobApplicationInboundDto } from '../careers/jobApplication.handler';

const { MONGODB_URI, MONGODB_DB } = process.env;

// if (!MONGODB_URI) {
// 	throw new Error(
// 		'Please define the MONGODB_URI environment variable inside .env.local'
// 	);
// }

// if (!MONGODB_DB) {
// 	throw new Error(
// 		'Please define the MONGODB_DB environment variable inside .env.local'
// 	);
// }

// const client = new MongoClient(MONGODB_URI || '');
// const db = client.db(MONGODB_DB);

// Initialize connection once
// (async () => {
// 	// Use connect method to connect to the server
// 	try {
// 		await client.connect();
// 		console.log('Connected successfully to server');
// 	} catch (error) {
// 		console.log(error);
// 	}
// })();

export const insertJobApplicationToMongo = async (
	jobApplication: CreateJobApplicationInboundDto
): Promise<ObjectId> => {
	return new ObjectId();
	// const collection = await db.collection('JobApplication');
	// const doc = await collection.insertOne(jobApplication);
	// if (!doc) throw new Error('Failed to insert document');
	// return doc.insertedId;
};
