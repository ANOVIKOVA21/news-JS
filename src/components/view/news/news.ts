import './news.css';
import { EveryThingApiResponseArticlesEntity } from '../../controller/apiInterfaces';

class News {
  draw(data: EveryThingApiResponseArticlesEntity[]) {
    const news = data.length >= 10 ? data.filter((_item, idx: number) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item, idx: number) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
      const newsItem = newsClone.querySelector('.news__item') as HTMLDivElement;
      const newsPhoto = newsClone.querySelector('.news__meta-photo') as HTMLDivElement;
      const newsAuthor = newsClone.querySelector('.news__meta-author') as HTMLLIElement;
      const newsDate = newsClone.querySelector('.news__meta-date') as HTMLLIElement;
      const descriptionTitle = newsClone.querySelector('.news__description-title') as HTMLHeadingElement;
      const descriptionSrc = newsClone.querySelector('.news__description-source') as HTMLHeadingElement;
      const descriptionContent = newsClone.querySelector('.news__description-content') as HTMLParagraphElement;
      const newsLink = newsClone.querySelector('.news__read-more a') as HTMLAnchorElement;

      if (idx % 2) newsItem.classList.add('alt');

      const urlToImage =
        item.urlToImage == null || item.urlToImage == 'null' ? './src/img/news_placeholder.jpg' : item.urlToImage;

      newsPhoto.style.backgroundImage = `url(${urlToImage})`;
      newsAuthor.textContent = item.author || item.source.name;
      newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

      descriptionTitle.textContent = item.title;
      descriptionSrc.textContent = item.source.name;
      descriptionContent.textContent = item.description;
      newsLink.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    (document.querySelector('.news') as HTMLDivElement).innerHTML = '';
    (document.querySelector('.news') as HTMLDivElement).appendChild(fragment);
  }
}

export default News;
