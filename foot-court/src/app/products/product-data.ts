import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

    createDb() {
        const products: Product[] = [
            {
                id: 1,
                productName: 'PUMA RS-X WINTERIZED',
                productCode: 'GDN-0011',
                description: 'With natural earth tones and signature RS cushioning technology, these shoes are as fresh as the first day of winter.',
                starRating: 3.2
            },
            {
                id: 2,
                productName: 'JORDAN MARS 270',
                productCode: 'GDN-0023',
                description: 'Drawing inspiration from four classic Air Jordans, the Jordan Mars 270 is a modern-day remix.',
                starRating: 4.2
            },
            {
                id: 5,
                productName: 'NIKE AIR FORCE 1 WTR GTX',
                productCode: 'TBX-0048',
                description: 'The AF1 WTR GTX — which stands for Winterized and GORE-TEX respectively — appears in a seasonal colorway.',
                starRating: 4.8
            },
            {
                id: 8,
                productName: 'NIKE AF1 SHELL',
                productCode: 'TBX-0022',
                description: 'Inspired by seasonal outerwear, the Nike Air Force 1 Shell has a water-repellent upper and adjustable collar to help keep you dry when the weather turns.',
                starRating: 3.7
            },
            {
                id: 10,
                productName: 'NIKE AIR FLIGHT 89 LE',
                productCode: 'GMG-0042',
                description: 'A cult classic in modern colors.',
                starRating: 4.6
            }
        ];
        return { products };
    }
}
