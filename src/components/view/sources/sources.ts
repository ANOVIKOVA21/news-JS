import './sources.css';
import { EveryThingApiResponseArticlesEntitySource } from '../../controller/apiInterfaces';

class Sources {
  draw(data: EveryThingApiResponseArticlesEntitySource[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
    data.forEach((item: EveryThingApiResponseArticlesEntitySource) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
      const srcItemName = sourceClone.querySelector('.source__item-name') as HTMLSpanElement;
      const srcItem = sourceClone.querySelector('.source__item') as HTMLDivElement;

      srcItemName.textContent = item.name;
      srcItem.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    (document.querySelector('.sources') as HTMLDivElement).append(fragment);
  }
}

export default Sources;
