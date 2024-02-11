export type PostType = {
  title: string,
  body: string,
  id: number,
  userId: number,
}

export type PostListType = PostType[]

export type ResponseDataType = PostListType

export type ResponseType = {
  data: ResponseDataType,
  status: number,
  statusText: string,
}
