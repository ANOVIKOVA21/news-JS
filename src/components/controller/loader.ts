class Loader {
  baseLink: string;

  options: LoaderOptions;

  constructor(baseLink: string, options: LoaderOptions) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp<T>(
    { endpoint, options }: GetRespOptions,
    callback: (data: T) => void = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load<T>('GET', endpoint, callback, options);
  }

  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: GetRespOptionOptions, endpoint: string): RequestInfo {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key: string) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load<T>(method: string, endpoint: string, callback: (data: T) => void, options: GetRespOptionOptions = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res: Response) => res.json())
      .then((data: T) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

interface LoaderOptions {
  apiKey: string;
}

interface GetRespOptions {
  endpoint: string;
  options?: GetRespOptionOptions;
}

interface GetRespOptionOptions {
  sources?: string;
}

export default Loader;
