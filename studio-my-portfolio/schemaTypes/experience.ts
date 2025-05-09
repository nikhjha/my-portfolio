import {defineArrayMember, defineField, defineType} from 'sanity'

const experienceSchema = defineType({
  type: 'document',
  name: 'experience',
  title: 'Experience',
  fields: [
    defineField({
      type: 'date',
      name: 'startDate',
      title: 'Start Date',
    }),
    defineField({
      type: 'date',
      name: 'endDate',
      title: 'End Date',
      hidden: ({document}) => !document?.haveEnded,
    }),
    defineField({
      type: 'boolean',
      name: 'haveEnded',
      title: 'Finished',
    }),
    defineField({
      name: 'summarizedDescription',
      title: 'Summarized Description',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
    }),
    defineField({
      name: 'place',
      title: 'Place',
      type: 'string',
    }),
    defineField({
      name: 'institute',
      title: 'Institute',
      type: 'string',
    }),
    defineField({
      name: 'skillsUsed',
      title: 'Skills Used',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'skill'}],
        }),
      ],
    }),
  ],
})

export default experienceSchema
