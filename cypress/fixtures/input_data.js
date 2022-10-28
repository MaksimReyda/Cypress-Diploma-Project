export const loginData = {
    firstName: 'Maksym',
    lastName: 'Reida',
    loginName: 'MaksymR1234',
    email: 'reida.maksim@gmail.com',
    address: 'Test 1123',
    city: 'Test',
    zipCode: '00061',
    phone: '9898989898',
    password: 'Testzuum12!'
}


export const mainPageData = {
    categories: [
        { name: 'Apparel & accessories', subcategories: [{ name: 'Shoes'}, { name: 'T-shirts'}] },
        { name: 'Makeup', subcategories: [{ name: 'Cheeks'}, { name: 'Eyes'}, { name: 'Face'}, { name: 'Lips'}, { name: 'Nails'}, { name: 'Value Sets'}] },
        { name: 'Skincare', subcategories: [{ name: 'Eyes' }, { name: 'Face' }, { name: 'Gift Ideas & Sets' }, { name: 'Hands & Nails'}, { name: 'Sun'} ] },
        { name: 'Fragrance', subcategories: [{ name: 'Men' }, { name: 'Women' }] },
        { name: 'Men', subcategories: [{ name: 'Body & Shower' }, { name: 'Fragrance Sets' }, { name: 'Pre-Shave & Shaving' }, { name: 'Skincare' }] },
        { name: 'Hair Care', subcategories: [{ name: 'Conditioner' }, { name: 'Shampoo' }] },
        { name: 'Books', subcategories: [{ name: 'Audio CD' }, { name: 'Paperback' }] }
    ],
    banner: {
        slide1: 'Learn Automation Testing the right way Realistic Online Store!',
        slide2: "Allowing students to \nmaster their skills \nusing websites similarto what you'd face in the real world!",
        slide3: 'Become familiar with \nAutomation Testing \n70% faster than manual testing. Wider test coverage of application features. Reliable in results. Ensures consistency. Saves time and cost. Improves accuracy. Human Intervention is not required during execution. Increases Efficiency.The advantages are endless!'
    },
    promoSection: {
        content: [
            { title: 'Fast shipping', description: 'For every order placed!' },
            { title: 'Easy Payments', description: 'Check out as guest!' },
            { title: 'Shipping Options', description: 'Get items faster!' },
            { title: 'Large Variety', description: 'Many different products available' }
        ]
    },
    featuredProducts: {
        sectionName: 'Featured',
        content: [
            { name: 'Skinsheen Bronzer Stick', price: [{ currency: 'Euro', value: '27.69€' }, { currency: 'Sterling', value: '£23.40' }, { currency: 'Dollar', value: '$29.50' }], discount: false, discountPrice: [], availableOnStock: true },
            { name: 'BeneFit Girl Meets Pearl', price: [{ currency: 'Euro', value: '28.16€' }, { currency: 'Sterling', value: '£23.80' }, { currency: 'Dollar', value: '$30.00' }], discount: true, discountPrice: [{ currency: 'Euro', value: '17.83€' }, { currency: 'Sterling', value: '£15.07' }, { currency: 'Dollar', value: '$19.00' }], availableOnStock: false },
            { name: 'Benefit Bella Bamba', price: [{ currency: 'Euro', value: '26.28€' }, { currency: 'Sterling', value: '£22.21' }, { currency: 'Dollar', value: '$28.00' }], discount: false, discountPrice: [], availableOnStock: true },
            { name: 'Tropiques Minerale Loose Bronzer', price: [{ currency: 'Euro', value: '36.13€' }, { currency: 'Sterling', value: '£30.54' }, { currency: 'Dollar', value: '$38.50' }], discount: false, discountPrice: [], availableOnStock: true }
        ]
    },
    latestProducts:{
        sectionName: 'Latest Products',
        content: [
            { name: 'Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15', price: '42.00', discount: false, discountPrice: '', availableOnStock: true },
            { name: 'Absolue Eye Precious Cells', price: '105.00', discount: true, discountPrice: '89.00', availableOnStock: true },
            { name: 'Total Moisture Facial Cream', price: '38.00', discount: false, discountPrice: '', availableOnStock: true },
            { name: 'Flash Bronzer Body Gel', price: '34.50', discount: true, discountPrice: '29.00', availableOnStock: false }
        ]
    },
    bestsellersProducts: {
        sectionName: 'Bestsellers',
        content: [
            { name: 'New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals', price: '26.00', discount: false, discountPrice: '', availableOnStock: true },
            { name: 'Euphoria Men Intense Eau De Toilette Spray', price: '44.10', discount: false, discountPrice: '', availableOnStock: true },
            { name: 'Benefit Bella Bamba', price: '28.00', discount: false, discountPrice: '', availableOnStock: true },
            { name: 'Tropiques Minerale Loose Bronzer', price: '88.00', discount: false, discountPrice: '', availableOnStock: true }
        ]
    },
    specialsProducts: {
        sectionName: 'Specials',
        content: [
            { name: 'Absolue Eye Precious Cells', price: '105.00', discount: true, discountPrice: '89.00', availableOnStock: true },
            { name: 'Acqua Di Gio Pour Homme', price: '59.00', discount: true, discountPrice: '45.00', availableOnStock: true },
            { name: 'BeneFit Girl Meets Pearl', price: '30', discount: true, discountPrice: '19.00', availableOnStock: false },
            { name: 'Brunette expressions Conditioner', price: '27.00', discount: true, discountPrice: '24.00', availableOnStock: false}
        ]
    } 
}