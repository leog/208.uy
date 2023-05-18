import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <img src="/img/logo-white.png" className='w-20 h-auto' />
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Comunidad de propietarios de Peugeot 208 de Uruguay.
      </h4>
    </section>
  )
}
