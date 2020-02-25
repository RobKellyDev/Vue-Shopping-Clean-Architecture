import {Observable, of} from "rxjs";

import {injectable} from "inversify";
import {Product} from "@/domain/entity";
import {delay, map} from "rxjs/operators";

@injectable()
export default class ProductRepositoryImpl {
  readonly _products: Product[];

  constructor() {
    const _images = [
      "https://www.dropbox.com/s/swg9bdr0ejcbtrl/img9.jpg?raw=1",
      "https://www.dropbox.com/s/78fot6w894stu3n/img3.jpg?raw=1",
      "https://www.dropbox.com/s/rjj1vtdx79xptu0/img6.jpeg?raw=1",
      "https://www.dropbox.com/s/miym588nx2lscqt/img7.jpg?raw=1",
    ]
    this._products = (Array.from(Array(20).keys())).map((i) => {
      return {
        id: `${i + 1}`,
        name: `Product ${i + 1}`,
        price: 2200,
        thumbnailUrl: _images[Math.floor(Math.random() * (_images.length - 1))],
        description: "3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs..."
      } as Product;
    });
  }

  public getAll(): Observable<Product[]> {
    return of(null).pipe(
      map(() => this._products)
    )
  }
}
