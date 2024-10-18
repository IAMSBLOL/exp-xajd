import { Marquee, cn } from '@/components/ui'

const reviews = [
  {
    name: 'Monia',
    username: '@Monia',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://cn-imile-static.oss-accelerate.aliyuncs.com/work-order/attachment/default/2024/10/202410081267547248905089025.png'
  },
  {
    name: 'Monia',
    username: '@Monia',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://cn-imile-static.oss-accelerate.aliyuncs.com/work-order/attachment/default/2024/10/202410081267547370795757569.png'
  },
  {
    name: 'Monia',
    username: '@Monia',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://cn-imile-static.oss-accelerate.aliyuncs.com/work-order/attachment/default/2024/10/202410081267547438051422208.png'
  },
  {
    name: 'Monia',
    username: '@Monia',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://cn-imile-static.oss-accelerate.aliyuncs.com/work-order/attachment/default/2024/10/202410081267547506028507137.png'
  },
  {
    name: 'Monia',
    username: '@Monia',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://cn-imile-static.oss-accelerate.aliyuncs.com/work-order/attachment/default/2024/10/202410081267547585162440704.png'
  },
  {
    name: 'Monia',
    username: '@Monia',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://cn-imile-static.oss-accelerate.aliyuncs.com/work-order/attachment/default/2024/10/202410081267547654980825089.png'
  }
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={
        cn(
          'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
          // light styles
          'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
          // dark styles
          'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
        )
      }
    >
      <div
        className="flex flex-row items-center gap-2"
      >
        <img
          alt=""
          className="rounded-full"
          height="32"
          src={img}
          width="32"
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
            {' '}
            {username}
            {' '}
          </p>
        </div>
      </div>

      <blockquote
        className="mt-2 text-sm"
      >
        {' '}
        {body}
        {' '}
      </blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div
      className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background"
    >
      <Marquee
        pauseOnHover
        className="[--duration:20s]"
      >
        {
          firstRow.map((review) => (
            <ReviewCard
              key={review.username}
              {...review}
            />
          ))
        }
      </Marquee>

      <Marquee
        pauseOnHover
        reverse
        className="[--duration:20s]"
      >
        {
          secondRow.map((review) => (
            <ReviewCard
              key={review.username}
              {...review}
            />
          ))
        }
      </Marquee>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
      > </div>

      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
      > </div>
    </div>
  )
}
