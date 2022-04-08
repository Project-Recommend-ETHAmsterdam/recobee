import { NewCollectNotification } from '@generated/types'
import { imagekitURL } from '@lib/imagekitURL'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link'
import React from 'react'

dayjs.extend(relativeTime)

interface Props {
  notification: NewCollectNotification
}

const CollectedContent: React.FC<Props> = ({ notification }) => {
  const postType =
    notification?.collectedPublication?.metadata?.attributes[0]?.value ??
    notification?.collectedPublication?.__typename?.toLowerCase()

  return (
    <div className="text-sm text-gray-500 line-clamp-1">
      {postType === 'community' ? (
        <Link href={`/communities/${notification?.collectedPublication?.id}`}>
          <a className="font-bold flex items-center space-x-1.5">
            <img
              src={imagekitURL(
                notification?.collectedPublication?.metadata?.cover?.original
                  ?.url
                  ? notification?.collectedPublication?.metadata?.cover
                      ?.original?.url
                  : `https://avatar.tobi.sh/${notification?.collectedPublication?.id}.png`,
                500,
                500
              )}
              className="w-4 h-4 bg-gray-200 rounded ring-2 ring-gray-50 dark:bg-gray-700 dark:ring-black"
              alt={notification?.collectedPublication?.id}
            />
            <div>{notification?.collectedPublication?.metadata?.name}</div>
          </a>
        </Link>
      ) : postType === 'crowdfund' ? (
        <Link href={`/posts/${notification?.collectedPublication?.id}`}>
          <a>{notification?.collectedPublication?.metadata?.name}</a>
        </Link>
      ) : (
        <Link href={`/posts/${notification?.collectedPublication?.id}`}>
          <a>{notification?.collectedPublication?.metadata?.content}</a>
        </Link>
      )}
    </div>
  )
}

export default CollectedContent