import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return preview && (
    <div
      className='bg-accent-7 border-accent-7 text-white'
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
             Esta página es de previsualización.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Haz click aquí
              </a>{' '}
              para salir del modo de previsualización.
            </>
          ) : (
            <>
             
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
