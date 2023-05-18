import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-20 lg:py-28 flex flex-col lg:flex-row justify-between">
          <a href="#" title="Próximamente..." className='text-1xl lg:text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 text-green-600 hover:underline'>
            Unite a nuestro grupo de WhatsApp
          </a>
          <div className="flex flex-col lg:flex-row items-center">
            <a
              href="https://twitter.com/leog"
              target='_blank'
              className="mx-3 text-blue-800 hover:underline font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Creado por @leog
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
