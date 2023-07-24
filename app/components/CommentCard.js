import React from 'react'
import { BsReply, BsSuitHeart } from 'react-icons/bs'

export default function CommentCard({ data }) {
  return (
      <div className="w-full p-5 border-t">
          <h3 className="font-semibold text-lg">{data.name}</h3>
          <p>{data.comment}</p>
          <div className="icons flex gap-5 mt-3">
              <BsSuitHeart className="cursor-pointer hover:opacity-70" />
              <BsReply className="cursor-pointer hover:opacity-70" />
          </div>
      </div>
  )
}
