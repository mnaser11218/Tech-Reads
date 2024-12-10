import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, cleanCode, codeInterview2, coreJava2, coreJavaBook, coreJavaBooksvg, crackingCodeInterview, customer1, customer2, customer_1, customer_2, github, introToJs, introToPython, introToSql, learningSpringBoot, masteringCode, masteringReact, programmingC, programmingInJava, reactReady, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" }
];

// export const shoes = [
//     {
//         thumbnail: thumbnailShoe1,
//         bigShoe: bigShoe1,
//     },
//     {
//         thumbnail: thumbnailShoe2,
//         bigShoe: bigShoe2,
//     },
//     {
//         thumbnail: thumbnailShoe3,
//         bigShoe: bigShoe3,
//     },
// ];

export const shoes = [
    {
        thumbnail: introToSql,
        bigShoe: introToSql,
    },
    {
        thumbnail: introToJs,
        bigShoe: introToJs,
    },
    {
        thumbnail: github,
        bigShoe: github,
    },
];
export const books = [
    {
        thumbnail: coreJavaBook,
        bigShoe: coreJavaBook,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },

]

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: codeInterview2,
        name: "Cracking the Coding Interview",
        price: "$19.99",
    },
    {
        imgURL: programmingInJava,
        name: "Programming in Java",
        price: "$17.99",
    },
    {
        imgURL: reactReady,
        name: "React Ready",
        price: "$22.99",
    },
    {
        imgURL: introToPython,
        name: "Intro to Python Programming",
        price: "$23.99",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer_1,
        customerName: 'Brian Andrew',
        rating: 4.5,
        feedback: "The quality of books and fair prices far exceeded my expectations! I highly recommend Tech-Reads!!"
    },
    {
        imgURL: customer_2,
        customerName: 'Larry bird',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Topics",
        links: [
            { name: "Frontend", link: "/" },
            { name: "Backend", link: "/" },
            { name: "Cloud computing", link: "/" },
            { name: "Database", link: "/" },
            { name: "Frameworks", link: "/" },
            { name: "Web hosting", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@techreads.com", link: "mailto:customer@techreads.com" },
            { name: "Mohammed Naser", link: "tel:+123456789" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];