export default {
  name: 'article',
  type: 'document',
  title: 'Articles',
  orderings: [
    {
      title: 'most recent',
      name: 'dateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
    {
      title: 'oldest',
      name: 'dateAsc',
      by: [{field: 'date', direction: 'asc'}],
    },
  ],
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
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
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
      placeholder: new Date().toLocaleDateString('fr-FR'),
      options: {
        dateFormat: 'DD/MM/YYYY',
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
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [{title: 'Emphasis', value: 'em'}],
          },
        },
        {
          type: 'image',
          fields: [
            {
              name: 'link',
              type: 'url',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
