import { Button } from '@components/UI/Button'
import { Card, CardBody } from '@components/UI/Card'
import { LensterPost } from '@generated/lenstertypes'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React, { FC } from 'react'

dayjs.extend(relativeTime)

interface Props {
  post: LensterPost
  hideType?: boolean
  index: number
}

const mockData = [
  {
    version: '1.0.0',
    metadata_id: '1',
    name: 'Casino',
    description:
      'There’s even a casino in Decentraland! Trust the gambler to find it, wink-wink. But in the Tominoya Casino, you’ll find various casino games waiting for you to bet on with your MANA. Perhaps this is some sort of future in crypto gambling. If so, it’s worth taking a trip to Decentraland to have a look.',
    attributes: [
      {
        trait_type: 'Platform',
        value: 'Decentraland'
      },
      {
        trait_type: 'Venue Type',
        value: 'Entertainment'
      },
      {
        trait_type: 'likes',
        value: '10'
      },
      {
        trait_type: 'avgRating',
        value: '3'
      }
    ],
    image:
      'https://bitcoincasinokings.com/wp-content/uploads/2021/03/Screenshot_2.jpg',
    external_url: 'https://play.decentraland.org/'
  },
  {
    version: '1.0.0',
    metadata_id: '2',
    name: '6529 Museum of Art',
    description:
      'The 6529 Museum of Art has one of the largest and most valuable NFT collections in the world across all major NFT categories. The 6529 Museum has a particular focus on generative art where it has one of the top horizontal generative art collections in the world.',
    attributes: [
      {
        trait_type: 'Platform',
        value: '6529 Museum of Art'
      },
      {
        trait_type: 'Venue Type',
        value: 'Culture'
      },
      {
        trait_type: 'likes',
        value: '69'
      },
      {
        trait_type: 'avgRating',
        value: '7.5'
      }
    ],
    image: 'https://6529.io/wp-content/uploads/2022/04/6529-Museum-Aerial.jpg',
    external_url: 'https://oncyber.io/6529om'
  },
  {
    version: '1.0.0',
    metadata_id: '4',
    name: 'Absolut Land',
    description:
      'Fashion and music festivals go hand in hand and nowhere more so than at Coachella. Following Metaverse Fashion Week in Decentraland, Absolut Vodka has launched Absolut.Land, a Coachella inspired pop-up experience in the same virtual world. The launch coincides with the first weekend of the California music festival and headline act is a festival appropriate collection of digital fashion wearables.',
    attributes: [
      {
        trait_type: 'Platform',
        value: 'Decentraland'
      },
      {
        trait_type: 'Venue Type',
        value: 'Entertainment'
      },
      {
        trait_type: 'likes',
        value: '42'
      },
      {
        trait_type: 'avgRating',
        value: '11'
      }
    ],
    image:
      'https://nyc3.digitaloceanspaces.com/archeio/sdk/absolut-land-2022/img/hero.png',
    external_url: 'https://www.absolut.com/us/absolutland/'
  }
]

const SinglePost: FC<Props> = ({ post, hideType = false, index }) => {
  // const postType = post?.metadata?.attributes[0]?.value

  return (
    <div className="flex">
      <Card>
        <CardBody>
          <img
            src={mockData[index].image}
            className="venueBackgroundImage w-32 h-32"
            alt="venue image"
          />
          <div className="flex flex-col">{mockData[index].name}</div>
          <div className="flex justify-between">
            <div className="text-gray-400 text-xs">
              {mockData[index].attributes[0].value}
            </div>
            <div className="text-gray-400 text-xs">
              {mockData[index].attributes[1].value}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col font-thin">
              <div className="mt-10">
                Liked By: {mockData[index].attributes[2].value}{' '}
              </div>
              <div className="font-bold"> </div>{' '}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">
              Avg Rating: {mockData[index].attributes[3].value}
            </div>
            <div className="mt-10 gap-3 justify-between">
              <Button className="ml-auto mr-3">Visit</Button>
              <Button className="ml-auto">Like</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default SinglePost
