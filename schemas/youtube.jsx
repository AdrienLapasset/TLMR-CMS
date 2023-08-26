import getYouTubeId from 'get-youtube-id'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Preview = (props) => {
  const {url, renderDefault} = props
  const id = getYouTubeId(url)
  return (
    <div>
      {renderDefault({...props, title: url})}
      <LiteYouTubeEmbed id={id} />
    </div>
  )
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'Vidéo Youtube',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL de la vidéo Youtube',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: Preview,
  },
}
