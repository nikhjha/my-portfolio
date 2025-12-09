import {defineArrayMember, defineField, defineType} from 'sanity'

const projectSchema = defineType({
  type: 'document',
  name: 'project',
  title: 'Project',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'boolean',
      name: 'haveEnded',
      title: 'Finished',
    }),
    defineField({
      type: 'boolean',
      name: 'hasTimeline',
      title: 'Timeline',
      description: 'Does it contains timeline for the project?',
    }),
    defineField({
      name: 'summarizedDescription',
      title: 'Summarized Description',
      type: 'array',
      of: [{type: 'string'}],
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

export default projectSchema
