import AppLoader from './appLoader';
import { SourcesApiResponse, EveryThingApiResponse } from './apiInterfaces';

class AppController extends AppLoader {
  getSources(callback: (data: SourcesApiResponse) => void) {
    super.getResp<SourcesApiResponse>(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: (data: EveryThingApiResponse) => void) {
    let target = e.target as HTMLDivElement;
    const newsContainer = e.currentTarget as HTMLDivElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id') as string;
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp<EveryThingApiResponse>(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLDivElement;
    }
  }
}

export default AppController;
