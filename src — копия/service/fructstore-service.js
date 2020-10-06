export default class FructStoreService {
    
    data = [
        {   
            id: 1, 
            title: 'Apple',
            price: 8,
            infoDiscount: {
                discount: false,
                count: null,
                price: null,
                discription: null
            },
            coverImage: 'https://cdn.segodnya.ua/i/image_650x434/media/image/5d6/f90/530/5d6f9053031b6.jpg'},
        {   
            id: 2,
            title: 'Banana',
            price: 10,
            infoDiscount: {
                discount: false,
                count: null,
                price: null,
                discription:  null
            },
            coverImage: 'https://newsomsk.ru/images/news/fullhd/2019/04/a8e39dfc96d11254713efe1034d50247.jpg'},
        {   
            id: 3,
            title: 'Popaya',
            price: 10,
            infoDiscount: {
                discount: true,
                count: 3,
                price: 5,
                discription:'every 3 kilograms with a 50% discount'
            },
            coverImage: 'https://fitexpert.biz/wp-content/uploads/2016/11/Depositphotos_12429930_m-2015.jpg'}
        ];

    getFructs() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
                reject(new Error('Something bad happend'));
            }, 700)
        })
    }
}