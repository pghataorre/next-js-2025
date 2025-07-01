import { IBlogPosts } from "./types"

const sortByLikes = (data: IBlogPosts) => {
    return data?.posts?.sort((a, b) => b.reactions.likes - a.reactions.likes)
  }

export default sortByLikes