interface SourcesApiResponse {
  status: string;
  sources?: SourcesApiResponseEntity[] | null;
}

interface SourcesApiResponseEntity {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

interface EveryThingApiResponse {
  status: string;
  totalResults: number;
  articles?: EveryThingApiResponseArticlesEntity[] | null;
}

interface EveryThingApiResponseArticlesEntity {
  source: EveryThingApiResponseArticlesEntitySource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
interface EveryThingApiResponseArticlesEntitySource {
  id: string;
  name: string;
}

export {
  SourcesApiResponse,
  EveryThingApiResponse,
  EveryThingApiResponseArticlesEntity,
  EveryThingApiResponseArticlesEntitySource,
};
