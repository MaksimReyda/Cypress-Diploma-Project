export const loginData = {
    firstName: 'Maksym',
    lastName: 'Reida',
    loginName: 'MaksymR1234',
    email: 'reida.maksim@gmail.com',
    address: 'Test 1123',
    city: 'Test',
    zipCode: '00061',
    phone: '9898989898',
    password: 'Testzuum12!',

    notRegisteredEmail: 'reida.maksimaaqq222aaa@gmail.com',
    notValidEmail: 'testtest',
    notRegisteredLoginName: 'MaksymR1234qqqaa123',
    notRegisteredLastName: 'Reidaqqqqq11111'
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
            { name: 'Skinsheen Bronzer Stick', price: [{ currency: '€ Euro', value: '27.69€' }, { currency: '£ Pound Sterling', value: '£23.40' }, { currency: '$ US Dollar', value: '$29.50' }], discount: false, discountPrice: [], availableOnStock: true },
            { name: 'BeneFit Girl Meets Pearl', price: [{ currency: '€ Euro', value: '28.16€' }, { currency: '£ Pound Sterling', value: '£23.80' }, { currency: '$ US Dollar', value: '$30.00' }], discount: true, discountPrice: [{ currency: '€ Euro', value: '17.83€' }, { currency: '£ Pound Sterling', value: '£15.07' }, { currency: '$ US Dollar', value: '$19.00' }], availableOnStock: false },
            { name: 'Benefit Bella Bamba', price: [{ currency: '€ Euro', value: '26.28€' }, { currency: '£ Pound Sterling', value: '£22.21' }, { currency: '$ US Dollar', value: '$28.00' }], discount: false, discountPrice: [], availableOnStock: true },
            { name: 'Tropiques Minerale Loose Bronzer', price: [{ currency: '€ Euro', value: '36.13€' }, { currency: '£ Pound Sterling', value: '£30.54' }, { currency: '$ US Dollar', value: '$38.50' }], discount: false, discountPrice: [], availableOnStock: true }
        ]
    },
    latestProducts:{
        sectionName: 'Latest Products',
        content: [
            { name: 'Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15', price: [{ currency: '€ Euro', value: '39.42€' }, { currency: '£ Pound Sterling', value: '£33.32' }, { currency: '$ US Dollar', value: '$42.00' }], discount: false, discountPrice: [], availableOnStock: true },
            { name: 'Absolue Eye Precious Cells', price: [{ currency: '€ Euro', value: '98.54€' }, { currency: '£ Pound Sterling', value: '£83.30' }, { currency: '$ US Dollar', value: '$105.00' }], discount: true, discountPrice: [{ currency: '€ Euro', value: '83.53€' }, { currency: '£ Pound Sterling', value: '£70.60' }, { currency: '$ US Dollar', value: '$89.00' }], availableOnStock: true },
            { name: 'Total Moisture Facial Cream', price: [{ currency: '€ Euro', value: '35.66€' }, { currency: '£ Pound Sterling', value: '£30.15' }, { currency: '$ US Dollar', value: '$38.00' }], discount: false, discountPrice: [], availableOnStock: true },
            { name: 'Flash Bronzer Body Gel', price: [{ currency: '€ Euro', value: '32.38€' }, { currency: '£ Pound Sterling', value: '£27.37' }, { currency: '$ US Dollar', value: '$34.50' }], discount: true, discountPrice: [{ currency: '€ Euro', value: '27.22€' }, { currency: '£ Pound Sterling', value: '£23.01' }, { currency: '$ US Dollar', value: '$29.00' }], availableOnStock: false }
        ]
    },
    bestsellersProducts: {
        sectionName: 'Bestsellers',
        content: [
            { name: 'New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals', price: [{ currency: '€ Euro', value: '24.40€' }, { currency: '£ Pound Sterling', value: '£20.63' }, { currency: '$ US Dollar', value: '$26.00' }], discount: false, discountPrice: [], availableOnStock: true },
            { name: 'Euphoria Men Intense Eau De Toilette Spray', price: [{ currency: '€ Euro', value: '41.39€' }, { currency: '£ Pound Sterling', value: '£34.98' }, { currency: '$ US Dollar', value: '$44.10' }], discount: false, discountPrice: [], availableOnStock: true },
            { name: 'Benefit Bella Bamba', price: [{ currency: '€ Euro', value: '26.28€' }, { currency: '£ Pound Sterling', value: '£22.21' }, { currency: '$ US Dollar', value: '$28.00' }], discount: false, discountPrice: [], availableOnStock: true },
            { name: 'Tropiques Minerale Loose Bronzer', price: [{ currency: '€ Euro', value: '35.19€' }, { currency: '£ Pound Sterling', value: '£29.75' }, { currency: '$ US Dollar', value: '$37.50' }], discount: false, discountPrice: [], availableOnStock: true }
        ]
    },
    specialsProducts: {
        sectionName: 'Specials',
        content: [
            { name: 'Absolue Eye Precious Cells', price: [{ currency: '€ Euro', value: '98.54€' }, { currency: '£ Pound Sterling', value: '£83.30' }, { currency: '$ US Dollar', value: '$105.00' }], discount: true, discountPrice: [{ currency: '€ Euro', value: '83.53€' }, { currency: '£ Pound Sterling', value: '£70.60' }, { currency: '$ US Dollar', value: '$89.00' }], availableOnStock: true },
            { name: 'Acqua Di Gio Pour Homme', price: [{ currency: '€ Euro', value: '55.37€' }, { currency: '£ Pound Sterling', value: '£46.80' }, { currency: '$ US Dollar', value: '$59.00' }], discount: true, discountPrice: [{ currency: '€ Euro', value: '42.23€' }, { currency: '£ Pound Sterling', value: '£35.70' }, { currency: '$ US Dollar', value: '$45.00' }], availableOnStock: true },
            { name: 'BeneFit Girl Meets Pearl', price: [{ currency: '€ Euro', value: '28.16€' }, { currency: '£ Pound Sterling', value: '£23.80' }, { currency: '$ US Dollar', value: '$30.00' }], discount: true, discountPrice: [{ currency: '€ Euro', value: '17.83€' }, { currency: '£ Pound Sterling', value: '£15.07' }, { currency: '$ US Dollar', value: '$19.00' }], availableOnStock: false },
            { name: 'Brunette expressions Conditioner', price: [{ currency: '€ Euro', value: '25.34€' }, { currency: '£ Pound Sterling', value: '£21.42' }, { currency: '$ US Dollar', value: '$27.00' }], discount: true, discountPrice: [{ currency: '€ Euro', value: '22.52€' }, { currency: '£ Pound Sterling', value: '£19.04' }, { currency: '$ US Dollar', value: '$24.00' }], availableOnStock: true}
        ]
    } 
}


export const guestCheckoutPageData = {
    firstName: 'Maksym',
    firstName2characters: 'Ma',
    firstName33characters: 'MmmmmmmmmmMmmmmmmmmmMmmmmmmmmmAAA',


    lastName: 'Guest',
    lastName2characters: 'gu',
    lastName33characters: 'GuestGuestGuestGuestGuestGuestWWWv',

    invalidEmail: 'testydyx.',

    phoneNumber: '9898989777',
    faxNumber: '5551234567',
    company: 'Stark industries',

    address1: 'Test address 1231',
    address1_2characters: 'te',
    address1_129characters: 'qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuio',

    address2: '333',

    city: 'Test City',
    city2characters: 'qq',
    city129characters: 'qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuio',

    zipCode: '00061',
    zipCode2characters: '69',
    zipCode11characters: '12345678909',

    fieldsValidationMessages:{
        firstName: 'First Name must be greater than 3 and less than 32 characters!',
        lastName: 'Last Name must be greater than 3 and less than 32 characters!',
        email: 'E-Mail Address does not appear to be valid!',
        address1: 'Address 1 must be greater than 3 and less than 128 characters!',
        city: 'City must be greater than 3 and less than 128 characters!',
        state: 'Please select a region / state!',
        zipCode: 'Zip/postal code must be between 3 and 10 characters!'
    }
}

export const newUserData = {
    firstName: 'Maksym',
    firstName2characters: 'Ma',
    firstName33characters: 'MmmmmmmmmmMmmmmmmmmmMmmmmmmmmmAAA',

    lastName: 'Reida',
    lastName2characters: 're',
    lastName33characters: 'GuestGuestGuestGuestGuestGuestWWWv',

    invalidEmail: 'testt.a',

    phoneNumber: '9898989898',
    faxNumber: '3434353',

    companyName: 'Test company name',

    address1: 'Address 1',
    address1_2characters: 'te',
    address1_129characters: 'qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuio',

    address2: '1234',

    city: 'Test city',
    city2characters: 'qq',
    city129characters: 'qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuio',

    zipCode: '69061',
    zipCode2characters: '69',
    zipCode11characters: '12345678909',

    loginName: 'Maksym',
    loginName4characters: 'qaws',
    loginName65characters: 'qwertqwertqwertqwertqwertqwertqwertqwertqwertqwertqwertqwertqwert',

    password: 'Testzuum12!',
    password3characters: '123',
    password21characters: '123456789012345678901', 

    diffPassword: 'Testzuum',

    fieldsValidationMessages: {
        firstName: 'First Name must be between 1 and 32 characters!',
        lastName: 'Last Name must be between 1 and 32 characters!',
        email: 'Email Address does not appear to be valid!',
        address1: 'Address 1 must be between 3 and 128 characters!',
        city: 'City must be between 3 and 128 characters!',
        state: 'Please select a region / state!',
        zipCode: 'Zip/postal code must be between 3 and 10 characters!',
        loginName: 'Login name must be alphanumeric only and between 5 and 64 characters!',
        password: 'Password must be between 4 and 20 characters!',
        wrongConfirmationPassword: 'Password confirmation does not match password!'
    }
}


export const checkoutConfirmationData = {
    checkBreadcrumbs: ['Home', 'Basket', 'Guest Checkout - Step 1', 'Guest Checkout - Step 2', 'Confirm']
}

export const forgotPasswordPageData = {
    mainTitle: 'Forgot Your Password?',
    helpText: 'Enter the login name and e-mail address associated with your account. Click submit to request password reset',
    successMessage: 'Success: Password reset link has been sent to your e-mail address',
    emailError: 'Error: The Email address was not provided or not found in our records, please try again!',
    loginNameError: 'Error: The Login name was not provided or not found in our records, please try again!',
    noRecorsdError: 'Error: No records found matching information your provided, please check your information and try again!'
}

export const forgotLoginPageData = {
    successMessage: 'Success: Your login name reminder has been sent to your e-mail address.',
    emailError: 'Error: The Email address was not provided or not found in our records, please try again!',
    lastNameError: 'Error: The Last name was not provided or not found in our records, please try again!',
    noRecorsdError: 'Error: No records found matching information your provided, please check your information and try again!',
    mainTitle: 'Forgot Your Login Name?',
    helpText: 'Enter the last name and e-mail address associated with your account. Click submit to have your login name emailed to you'
}

export const checkYourOrderDetailsData = {
    orderIdError: 'Order ID is required field!',
    emailError: 'E-Mail Address does not appear to be valid!'
}