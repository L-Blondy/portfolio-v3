import { META } from 'src/config'
import { Landing } from 'src/views/Landing'
import { Navbar } from 'src/views/Navbar'
import { Projects } from 'src/views/Projects'
import { DefaultSeo } from 'next-seo';
import { Resume } from 'src/views/Resume';
import { Triangles } from 'src/components/icons/Triangles';
import { Skills } from 'src/views/Skills';
import { Contact } from 'src/views/Contact';


export default function Home() {
  return (
    <div className='outer-div'>

      <DefaultSeo
        title={META.TITLE}
        description={META.DESCRIPTION}
        canonical={META.URL}
        openGraph={{
          url: META.URL,
          site_name: META.TITLE,
          locale: META.OG.LOCALE,
          description: META.DESCRIPTION,
          title: META.TITLE,
          type: 'website',
          images: [ META.OG.IMAGE ],
          article: {
            publishedTime: '2021-07-20T11:08:32.879Z',
            modifiedTime: new Date().toISOString(),
            section: META.TITLE,
            authors: [ 'Laurent Blondy' ],
            tags: META.OG.TAGS,
          },
          profile: {
            firstName: 'Laurent',
            lastName: 'Blondy',
          }
        }}
        additionalMetaTags={[ {
          property: 'dc:creator',
          content: 'Laurent Blondy'
        }, {
          name: 'application-name',
          content: META.TITLE
        }, {
          name: 'application-decription',
          content: META.DESCRIPTION
        }, {
          httpEquiv: 'x-ua-compatible',
          content: 'IE=edge; chrome=1'
        } ]}
        additionalLinkTags={[ META.ICON, META.APPLE_TOUCH_IMAGE ]}
      />

      <Navbar />
      <Landing />
      <Projects />
      <Skills />
      <Resume />
      <Contact />

      <header>
        <h2 className='text-indigo-600'>header</h2>
      </header>

      <main className='main'>
        <h2>Main</h2>
      </main>

      <footer className={'footer'}>
        <h2>Footer</h2>
      </footer>
    </div>
  )
}
