export default {
  name: 'article',
  type: 'document',
  title: 'Articles',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroImg',
      type: 'image',
      title: "Image d'en tête",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      type: 'string',
      title: 'Auteur',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Contenu',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Titre 2', value: 'h2'},
            {title: 'Titre 3', value: 'h3'},
            {title: 'Titre 4', value: 'h4'},
            {title: 'Titre 5', value: 'h5'},
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [{title: 'Emphasis', value: 'em'}],
          },
        },
        {
          type: 'image',
        },
      ],
    },
  ],
}
