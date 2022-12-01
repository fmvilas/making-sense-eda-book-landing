import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'

export function FreeChapters() {
  return (
    <section
      id="free-chapters"
      aria-label="Free preview"
      className="scroll-mt-14 bg-blue-600 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute -top-32 left-0 w-full sm:left-3/4 sm:-top-5 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Get the free sample chapters
            </h2>
            <p className="mt-4 text-lg tracking-tight text-blue-200">
              Enter your email address and I’ll send you a sample from the book
              containing two of my favorite chapters.
            </p>
          </div>
          <form className="lg:pl-16">
            <h3 className="text-base font-medium tracking-tight text-white">
              Get two free chapters straight to your inbox{' '}
              <span aria-hidden="true">&rarr;</span>
            </h3>
          </form>
        </Container>
      </div>
    </section>
  )
}
