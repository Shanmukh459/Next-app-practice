import React from "react"

interface Props {
  params: { id: number; photoId: number }
}

const PhotosDetailPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      PhotosDetailPage {id} {photoId}
    </div>
  )
}

export default PhotosDetailPage
