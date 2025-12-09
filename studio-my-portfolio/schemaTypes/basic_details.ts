import {defineArrayMember, defineField, defineType} from 'sanity'

const basicDetails_Schema = defineType({
  type: 'document',
  name: 'basicDetails',
  title: 'Basic Details',
  fields: [
    defineField({
      type: 'string',
      name: 'fullName',
      title: 'Name',
      description: 'First Name and last name (Full name)',
    }),
    defineField({
      type: 'string',
      name: 'email',
      title: 'Email',
    }),
    defineField({
      type: 'string',
      name: 'contact',
      title: 'Mobile No.',
    }),
    defineField({
      type: 'string',
      name: 'shortAddress',
      title: 'Address',
      description: 'Keep it brief',
    }),
    defineField({
      type: 'file',
      name: 'fallbackResume',
      title: 'Default Resume',
      description: 'Rollback resume in case of error',
    }),
    defineField({
      name: 'websites',
      title: 'Website references',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Website',
          name: 'website',
          fields: [
            defineField({
              type: 'string',
              name: 'title',
              title: 'Title',
            }),
            defineField({
              type: 'string',
              name: 'href',
              title: 'URL',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'educations',
      title: 'Educational Details',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Education Detail',
          name: 'education',
          fields: [
            defineField({
              type: 'string',
              name: 'degree',
              title: 'Degree',
            }),
            defineField({
              type: 'string',
              name: 'institute',
              title: 'Institute',
            }),
            defineField({
              type: 'string',
              name: 'place',
              title: 'Place',
            }),
            defineField({
              type: 'date',
              name: 'startDate',
              title: 'Start Date',
            }),
            defineField({
              type: 'date',
              name: 'endDate',
              title: 'End Date',
            }),
            defineField({
              type: 'object',
              title: 'Result',
              name: 'result',
              fields: [
                defineField({
                  type: 'string',
                  name: 'type',
                  title: 'Type',
                  description: 'Type of result i.e, percentage / CGPA etc.',
                }),
                defineField({
                  type: 'string',
                  name: 'value',
                  title: 'Value',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})

export default basicDetails_Schema
