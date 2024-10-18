import { cn } from '@/components/ui'
const ReviewCard = ({
  img,
  name,
  username
}: {
  img: string;
  name: string;
  username: string;
  body?: string;
}) => {
  return (
    <figure
      className={
        cn(
          'relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4',
          // light styles
          'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
          // dark styles
          'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
        )
      }
    >
      <div
        className="flex flex-col items-center gap-2"
      >
        <img
          alt=""
          className="rounded w-full h-auto"
          src={img}

        />

        <div
          className="flex flex-col"
        >
          <figcaption
            className="text-sm font-medium dark:text-white"
          >
            {name}
          </figcaption>

          <p
            className="text-xs font-medium dark:text-white/40"
          >
            {username}
          </p>
        </div>
      </div>

    </figure>
  )
}

export default ReviewCard
