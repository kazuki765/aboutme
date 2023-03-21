import { MicroCMSQueries, createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
})

export const getBlogs = async (queries?: MicroCMSQueries) =>
  await client.get<BlogsResponse>({ endpoint: 'blogs', queries })

export const getBlogDetail = async (contentId: string, queries?: MicroCMSQueries) =>
  await client.getListDetail<unknown>({ endpoint: 'blogs', contentId, queries })

export type BlogsResponse = {
  contents: [
    {
      id: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      revisedAt: string
      title: string
      content: string
      eyecatch: any[]
      category: any[]
    }
  ]
  totalCount: number
  offset: number
  limit: number
}
