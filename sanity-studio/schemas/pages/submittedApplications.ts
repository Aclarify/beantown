import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'submittedApplications',
  title: 'Submitted Job Applications',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'address1',
      title: 'Address Line 1',
      type: 'string',
    }),
    defineField({
      name: 'address2',
      title: 'Address Line 2',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
    }),
    defineField({
      name: 'zipCode',
      title: 'Zip Code',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Mail Address',
      type: 'string',
    }),
    defineField({
      name: 'jobPosition',
      title: 'Position Applied For',
      type: 'string',
    }),
    defineField({
      name: 'employmentDesired',
      title: 'Employment Desired',
      type: 'string',
    }),
    defineField({
      name: 'resume',
      title: 'Resume URL',
      type: 'string',
    }),
    defineField({
      name: 'aboutApplicant',
      title: 'About The Applicant',
      type: 'string',
    }),
  ],
})
