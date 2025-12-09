import {defineField, defineType} from 'sanity'

const skillSchema = defineType({
  type: 'document',
  name: 'skill',
  title: 'Skill',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Additional', value: 'ADDITIONAL'},
          {title: 'Database', value: 'DATABASE'},
          {title: 'Frontend technology', value: 'FRONTEND_TECHNOLOGY'},
          {title: 'Programming language', value: 'PROGRAMMING_LANGUAGE'},
          {title: 'Backend technology', value: 'BACKEND_TECHNOLOGY'},
          {title: 'Language', value: 'LANGUAGE'},
        ],
        layout: 'radio',
      },
    }),
  ],
})

export default skillSchema
