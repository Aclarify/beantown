import { Client } from '@microsoft/microsoft-graph-client';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const validFileExtensions = [
	'jpg',
	'gif',
	'png',
	'jpeg',
	'svg',
	'webp',
	'pdf',
	'doc',
	'docx',
];

export const isValidFileType = (fileName: string) => {
	return (
		fileName &&
		validFileExtensions.indexOf(fileName.split('.').pop() || '') > -1
	);
};

export const isValidFileSize = (fileSize: number) => {
	return fileSize <= MAX_FILE_SIZE;
};

// Function to upload a file to OneDrive
export const uploadFileToOneDrive = async (file: any, accessToken: string) => {
	// try {
	// 	const folderPath = '/drive/root:/job-applications/'; // Specify the correct folder path

	// 	const fileName = file.name;
	// 	const fileContent = file;

	// 	const uploadUrlResponse = await fetch(
	// 		`https://graph.microsoft.com/v1.0${folderPath}${fileName}:/createUploadSession`,
	// 		{
	// 			method: 'POST',
	// 			headers: {
	// 				Authorization: `Bearer ${accessToken}`,
	// 				'Content-Type': 'application/json',
	// 			},
	// 			body: JSON.stringify({
	// 				item: {
	// 					'@microsoft.graph.conflictBehavior': 'rename',
	// 				},
	// 			}),
	// 		}
	// 	);

	// 	const uploadUrlData = await uploadUrlResponse.json();
	// 	const uploadUrl = uploadUrlData.uploadUrl;

	// 	const uploadResponse = await fetch(uploadUrl, {
	// 		method: 'PUT',
	// 		body: fileContent,
	// 	});

	// 	if (uploadResponse.ok) {
	// 		console.log('File uploaded successfully!');
	// 	} else {
	// 		console.log('Error uploading file:', uploadResponse.statusText);
	// 	}
	// } catch (error) {
	// 	console.log('Error uploading file:', error);
	// }

	try {
		// const url = `https://graph.microsoft.com/v1.0/drive/root:/job-applications/uploads/${file.name}:/content`;
		const url = `https://graph.microsoft.com/v1.0/sites/123/drives/1/2:/{filename}:/content`;

		// const formData = new FormData();
		// formData.append('file', file);

		// fetch(url, {
		// 	method: 'PUT',
		// 	headers: {
		// 		Authorization: `Bearer ${accessToken}`,
		// 		'Content-Type': 'application/octet-stream',
		// 		// 'Content-Type': 'application/json',
		// 	},
		// 	body: formData,
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		console.log('File uploaded:', data);
		// 		// Handle successful upload
		// 	})
		// 	.catch((error) => {
		// 		console.error('Error uploading file:', error);
		// 		// Handle error
		// 	})
		// 	.finally(() => {
		// 		// setIsUploading(false);
		// 	});

		// Create a new Graph client with the access token
		const client = Client.init({
			authProvider: (done) => {
				done(null, accessToken);
			},
		});

		// Construct the destination URL for the file upload
		// const uploadUrl = '/drive/root:/job-applications/${file.name}:/content';
		const uploadUrl = `/sites/123/drives/:1/${file.name}:/content`;

		// Upload the file using the PUT request
		const rsp = await client.api(uploadUrl).put(file);
		console.log('File uploaded successfully!', rsp);
	} catch (error) {
		console.error('Error uploading file:', error);
	}
};
