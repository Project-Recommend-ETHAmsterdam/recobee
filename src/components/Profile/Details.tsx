import 'linkify-plugin-mention'
import 'linkify-plugin-hashtag'

import { gql, useQuery } from '@apollo/client'
import AppContext from '@components/utils/AppContext'
import { Profile } from '@generated/types'
import consoleLog from '@lib/consoleLog'
import getAvatar from '@lib/getAvatar'
import React, { FC, useContext, useState } from 'react'

import Followerings from './Followerings'

export const DOES_FOLLOW_QUERY = gql`
  query DoesFollow($request: DoesFollowRequest!) {
    doesFollow(request: $request) {
      follows
    }
  }
`

interface Props {
  profile: Profile
}

const Details: FC<Props> = ({ profile }) => {
  const [following, setFollowing] = useState<boolean>(false)
  const { currentUser } = useContext(AppContext)
  const { data: followData, loading: followLoading } = useQuery(
    DOES_FOLLOW_QUERY,
    {
      variables: {
        request: {
          followInfos: [
            {
              // Am I following them
              followerAddress: profile?.ownedBy,
              profileId: currentUser?.id
            },
            {
              // Do they follow me
              followerAddress: currentUser?.ownedBy,
              profileId: profile?.id
            }
          ]
        }
      },
      skip: !profile || !currentUser,
      onCompleted(data) {
        setFollowing(data?.doesFollow[1]?.follows)
        consoleLog(
          'Query',
          '#8b5cf6',
          `Fetched has followed check Profile:${profile?.id} Following:${following}`
        )
      }
    }
  )

  return (
    <div className="px-5 mb-4 space-y-5 sm:px-0 items-center">
      <div className="flex flex-col items-center">
        <div className="flex font-bold m-10 items-center">
          <p>Welcome </p>
          <div className="pl-3">{currentUser?.handle}</div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={getAvatar(profile)}
            className="w-24 h-24 bg-gray-200 rounded-xl ring-8 ring-gray-50 sm:w-24 sm:h-24 dark:bg-gray-700 dark:ring-black"
            alt={profile?.handle}
          />
          <Followerings profile={profile} />
          <div className="p-3">
            <div>Total Likes: 30</div>
            <div>Total liked: 1</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
