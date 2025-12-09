import {defineArrayMember, defineField, defineType} from 'sanity'

const resumeSchema = defineType({
  type: 'document',
  name: 'resume',
  title: 'Resume',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
    }),
    defineField({
      name: 'experiences',
      title: 'Experiences',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'experience'}],
        }),
      ],
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'project'}],
        }),
      ],
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
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

export default resumeSchema
