import React, { useState } from 'react'
import Category from './Category'



const CategoryContainer = () => {
    const [names, setNames] = useState( ['Jewelry', 'Keyholders', 'Laser Cut Products'] )
    const [cards, setCards] = useState ([
      {
        "id": 1,
        "name": "Necklaces",
        "image": "https://i.ebayimg.com/images/g/3ScAAOSwURNdcXaY/s-l1600.jpg",
        "description": "Necklaces",
        "items": [
          {
            "name": "Women Fashion Boho Leaf Feather Pendant Gold Plated Tassel Long Chain Necklace",
            "id": 11,
            "description": "Necklaces: Women Fashion Boho Leaf Feather Pendant Gold Plated Tassel Long Chain Necklace",
            "images": [
              "https://i.ebayimg.com/images/g/-nkAAOSwcuZdDH-N/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/a9IAAOSwrQRdDH-P/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/tJUAAOSw9M9dDH-R/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/PJMAAOSwbrldDH-T/s-l1600.jpg"
            ],
            "rating": "4.7",
            "price": "1.89"
          },
          {
            "name": "necklace double layer heart chain hot multilayer choker pendant gold silver UK",
            "id": 12,
            "description": "Necklaces: necklace double layer heart chain hot multilayer choker pendant gold silver UK",
            "images": [
              "https://i.ebayimg.com/images/g/qhQAAOSwc1ZbsU8X/s-l1600.png",
              "https://i.ebayimg.com/images/g/THUAAOSw9NBaYk5v/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/ovsAAOSwXItcE63T/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/HWgAAOSwEm9dEO5M/s-l1600.png"
            ],
            "rating": "4.7",
            "price": "1.29"
          },
          {
            "name": "Fashion Women Full Diamond Crystal Rhinestone Choker Necklace Wedding Jewellery",
            "id": 13,
            "description": "Necklaces: Fashion Women Full Diamond Crystal Rhinestone Choker Necklace Wedding Jewellery",
            "images": [
              "https://i.ebayimg.com/images/g/4owAAOSwSlBYr6BI/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/KH0AAOSwdnZZ97Gr/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/l5gAAOSwD8ZZ97Gu/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/OtYAAOSwTm9Z97HB/s-l1600.jpg"
            ],
            "rating": "4.8",
            "price": "2.15"
          },
          {
            "name": "Circle Lake Pendant 925 Sterling Silver Chain Necklace Womens Girls Jewellery UK",
            "id": 14,
            "description": "Necklaces: Circle Lake Pendant 925 Sterling Silver Chain Necklace Womens Girls Jewellery UK",
            "images": [
              "https://i.ebayimg.com/images/g/lY0AAOSwWkFcszVq/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/zGUAAOSwXJhcszVs/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/s~QAAOSw4~1cszVp/s-l500.jpg",
              "https://i.ebayimg.com/images/g/FkgAAOSwW3xco9~6/s-l1600.jpg"
            ],
            "rating": "4.9",
            "price": "3.97"
          },
          {
            "name": "Heart Crystal Stone Pendant Necklace 925 Sterling Silver Chain Womens Jewellery",
            "id": 15,
            "description": "Necklaces: Heart Crystal Stone Pendant Necklace 925 Sterling Silver Chain Womens Jewellery",
            "images": [
              "https://i.ebayimg.com/images/g/CRIAAOSwFpNdBlaQ/s-l500.jpg",
              "https://i.ebayimg.com/images/g/TqAAAOSw0NNdBlaT/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/IRAAAOSws8NdBlaW/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/FkgAAOSwW3xco9~6/s-l1600.jpg"
            ],
            "rating": "4.7",
            "price": "3.97"
          },
          {
            "name": "Rose Gold Heart Pendant 925 Sterling Silver Chain Necklace Womens Jewellery Gift",
            "id": 16,
            "description": "Necklaces: Rose Gold Heart Pendant 925 Sterling Silver Chain Necklace Womens Jewellery Gift",
            "images": [
              "https://i.ebayimg.com/images/g/pswAAOSwip5cC-V5/s-l500.jpg",
              "https://i.ebayimg.com/images/g/lTgAAOSwvcFcC-V7/s-l500.jpg",
              "https://i.ebayimg.com/images/g/pswAAOSwip5cC-V5/s-l500.jpg",
              "https://i.ebayimg.com/images/g/lTgAAOSwvcFcC-V7/s-l500.jpg"
            ],
            "rating": "4.7",
            "price": "3.79"
          },
          {
            "name": "Women Shell Necklace Tie Choker Natural Boho Jewelry Gypsy Bohemian Ethnic V",
            "id": 17,
            "description": "Necklaces: Women Shell Necklace Tie Choker Natural Boho Jewelry Gypsy Bohemian Ethnic V",
            "images": [
              "https://i.ebayimg.com/images/g/QlsAAOSwB8xdXlD~/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/R~8AAOSwY~NdXlEE/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/j2QAAOSwsLRdXlEK/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/-PIAAOSwcUhdXlEM/s-l1600.jpg"
            ],
            "rating": "4.6",
            "price": "2.69"
          },
          {
            "name": "Heart Charm Pendant 925 Sterling Silver Chain Necklace Womens Jewellery Gifts UK",
            "id": 18,
            "description": "Necklaces: Heart Charm Pendant 925 Sterling Silver Chain Necklace Womens Jewellery Gifts UK",
            "images": [
              "https://i.ebayimg.com/images/g/tw8AAOSwCahc5mvv/s-l500.jpg",
              "https://i.ebayimg.com/images/g/SFAAAOSw8R9cD~oG/s-l500.jpg",
              "https://i.ebayimg.com/images/g/HfoAAOSwTO9c9XKG/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/98EAAOSwmvBc9XKH/s-l1600.jpg"
            ],
            "rating": "4.9",
            "price": "3.39"
          }
        ]
      },
      {
        "id": 2,
        "name": "Earrings",
        "image": "https://i.ebayimg.com/images/g/ZEgAAOSwVWxc5OPl/s-l1600.jpg",
        "description": "Earrings",
        "items": [
          {
            "name": "50 Pairs of Clear Plastic Earrings Transparent Invisible Retainer Studs New",
            "id": 21,
            "description": "Earrings: 50 Pairs of Clear Plastic Earrings Transparent Invisible Retainer Studs New",
            "images": [
              "https://i.ebayimg.com/images/g/ZEgAAOSwVWxc5OPl/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/doUAAOSwYFdc5OPn/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/accAAOSwTiBc5OPq/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/3ZAAAOSwedNc5OPu/s-l1600.jpg"
            ],
            "rating": "5.0",
            "price": "1.59"
          },
    
          {
            "name": "Charm Crystal 925 Sterling Silver Stud Hoop Earrings Fashion Women UK Jewelry",
            "id": 22,
            "description": "Earrings: Charm Crystal 925 Sterling Silver Stud Hoop Earrings Fashion Women UK Jewelry",
            "images": [
              "https://i.ebayimg.com/images/g/1D8AAOSwZM9apxn6/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/kwgAAOSw44BYdZMR/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/zPQAAOSw5cNYi2lb/s-l500.jpg",
              "https://i.ebayimg.com/images/g/mMoAAOSwol5Y1Rbh/s-l1600.jpg"
            ],
            "rating": "4.9",
            "price": "1.95"
          },
    
          {
            "name": "Fashion Elegant Gold Silver Rose Circle Crystal Stud Charm Earrings Jewelry UK",
            "id": 23,
            "description": "Earrings: Fashion Elegant Gold Silver Rose Circle Crystal Stud Charm Earrings Jewelry UK",
            "images": [
              "https://i.ebayimg.com/images/g/h1kAAOSwNEVdXQUn/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/lY4AAOSw3-xdUrpo/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/QoAAAOSwIhhc1J~P/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/trsAAOSwFwFdXQVF/s-l1600.jpg"
            ],
            "rating": "4.4",
            "price": "2.95"
          },
    
          {
            "name": "Fashion Punk Jewelry Geometric Dangle Drop Earrings Metal Statement Big Gold",
            "id": 24,
            "description": "Earrings: Fashion Punk Jewelry Geometric Dangle Drop Earrings Metal Statement Big Gold",
            "images": [
              "https://i.ebayimg.com/images/g/IDsAAOSwHWJc2dor/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/PYkAAOSwe0hc2dot/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/t8wAAOSwVJFc2dou/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/qfUAAOSwnfFc2dpH/s-l1600.jpg"
            ],
            "rating": "4.2",
            "price": "2.95"
          },
    
          {
            "name": "Wholesale A Set Of 20 Pairs Clear Crystal Ear Studs Earrings Allergy Free UK",
            "id": 25,
            "description": "Earrings: Wholesale A Set Of 20 Pairs Clear Crystal Ear Studs Earrings Allergy Free UK",
            "images": [
              "https://i.ebayimg.com/images/g/eMwAAOSwbtNaNneA/s-l500.jpg",
              "https://i.ebayimg.com/images/g/XckAAOSwJtdaNoYY/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/XckAAOSwJtdaNoYY/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/XckAAOSwJtdaNoYY/s-l1600.jpg"
            ],
            "rating": "4.8",
            "price": "2.25"
          },
    
          {
            "name": "Women's Girl's 925 Sterling Silver Plated Wedding Bridesmaid Ear Stud Earrings",
            "id": 26,
            "description": "Earrings: Women's Girl's 925 Sterling Silver Plated Wedding Bridesmaid Ear Stud Earrings",
            "images": [
              "https://i.ebayimg.com/images/g/aocAAOSwwSJb-yNJ/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/UowAAOSw0xtb-yNM/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/ktUAAOSwXMxb-yNe/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/81YAAOSwf1xb-yNo/s-l500.jpg"
            ],
            "rating": "3.9",
            "price": "2.99"
          },
    
          {
            "name": "EAR PIERCING STUDS EARRINGS STUD CERTIFIED STERILE GOLD SILVER COLOUR 3mm",
            "id": 27,
            "description": "Earrings: EAR PIERCING STUDS EARRINGS STUD CERTIFIED STERILE GOLD SILVER COLOUR 3mm",
            "images": [
              "https://i.ebayimg.com/images/g/MPoAAOSwA3dYmzaU/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/V64AAOSwopRYmzad/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/y58AAOSw241Ymzam/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/IO4AAOSwjDZYmzal/s-l1600.jpg"
            ],
            "rating": "4.0",
            "price": "1.69"
          },
    
          {
            "name": "NEW PAIR OF BIG GOLD PLATED HOOP EARRINGS LARGE CIRCLE CREOLE CHIC HOOPS GIFT UK",
            "id": 28,
            "description": "Earrings: NEW PAIR OF BIG GOLD PLATED HOOP EARRINGS LARGE CIRCLE CREOLE CHIC HOOPS GIFT UK",
            "images": [
              "https://i.ebayimg.com/images/g/jK4AAOSwDDxa3f0Y/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/kYMAAOSwiUpa3f0p/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/OZUAAOSwHola3f0s/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/ik0AAOSwkVxa3f0t/s-l1600.jpg"
            ],
            "rating": "4.9",
            "price": "1.99"
          }
        ]
      },
      {
        "id": 3,
        "name": "Rings",
        "image": "https://i.ebayimg.com/images/g/fqgAAOSwgNRV8qUv/s-l1600.jpg",
        "description": "Rings",
        "items": [
          {
            "name": "925 Sterling Silver plated Adjustable Ring Teardrop Thumb Finger Band Ring UK",
            "id": 31,
            "description": "Rings: 925 Sterling Silver plated Adjustable Ring Teardrop Thumb Finger Band Ring UK",
            "images": [
              "https://i.ebayimg.com/images/g/fqgAAOSwgNRV8qUv/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/W5kAAOSwQTVV8qmb/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/-qwAAOSwHjNV8qmg/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/If8AAOSwQPlV8qmj/s-l1600.jpg"
            ],
            "rating": "4.6",
            "price": "2.85"
          },
          {
            "name": "Women 925 Sterling Silver Ring Crystal Heart Shaped Rings Ladies Engagement Gift",
            "id": 32,
            "description": "Rings: Women 925 Sterling Silver Ring Crystal Heart Shaped Rings Ladies Engagement Gift",
            "images": [
              "https://i.ebayimg.com/images/g/C-4AAOSwU~Bc32tS/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/XJMAAOSwqMBc32tT/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/E3EAAOSwNyhc32tU/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/VUAAAOSwt-dc32tV/s-l1600.jpg"
            ],
            "rating": "4.7",
            "price": "3.45"
          },
    
          {
            "name": "925 Sterling Silver Adjustable Ring Band Weave Thumb Finger Rings Gift UK",
            "id": 33,
            "description": "Rings: 925 Sterling Silver Adjustable Ring Band Weave Thumb Finger Rings Gift UK",
            "images": [
              "https://i.ebayimg.com/images/g/bJwAAOSwu4BV5G0V/s-l500.jpg",
              "https://i.ebayimg.com/images/g/rWIAAOSwLVZV5HST/s-l500.jpg",
              "https://i.ebayimg.com/images/g/xW4AAOSw3ydV5HSV/s-l500.jpg",
              "https://i.ebayimg.com/images/g/bB0AAOSwu4BV5HSX/s-l500.jpg"
            ],
            "rating": "4.7",
            "price": "2.99"
          },
    
          {
            "name": "925 Silver Plt Crystal Heart Ring Adjustable Ladies Gift UK Stock",
            "id": 34,
            "description": "Rings: 925 Silver Plt Crystal Heart Ring Adjustable Ladies Gift UK Stock",
            "images": [
              "https://i.ebayimg.com/images/g/nx4AAOSwLh9a7Guc/s-l500.jpg",
              "https://i.ebayimg.com/images/g/9R8AAOSwn1ta7Gkx/s-l500.jpg",
              "https://i.ebayimg.com/images/g/VqMAAOSwvtla7Gky/s-l500.jpg",
              "https://i.ebayimg.com/images/g/kpYAAOSwEqJa7Gkz/s-l500.jpg"
            ],
            "rating": "4.5",
            "price": "3.49"
          },
    
          {
            "name": "ARGYLE 1.01ct!! PINK DIAMOND 100% UNTREATED +ARGYLE LASER INSCRIPTION +GIA CERT",
            "id": 35,
            "description": "Rings: ARGYLE 1.01ct!! PINK DIAMOND 100% UNTREATED +ARGYLE LASER INSCRIPTION +GIA CERT",
            "images": [
              "https://i.ebayimg.com/images/g/RVgAAOSw51xbU-Rd/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/w5sAAOxyUylTTiEk/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/PBcAAOSw9N1VzVYU/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/PBcAAOSw9N1VzVYU/s-l1600.jpg"
            ],
            "rating": "5",
            "price": "280,910.31"
          },
    
          {
            "name": "10.42 carat Round Cut GIA Certified Fancy Intense Yellow Diamond Three Band P",
            "id": 36,
            "description": "Rings: 10.42 carat Round Cut GIA Certified Fancy Intense Yellow Diamond Three Band P",
            "images": [
              "https://i.ebayimg.com/images/g/~zQAAOSwlV9a-fEF/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/ZUMAAOSwEA9a-fEH/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/fcAAAOSwOhda-fEK/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/4aQAAOSwF25a-fEO/s-l1600.jpg"
            ],
            "rating": "5",
            "price": "250,108.01"
          },
    
          {
            "name": "Vintage Split Shank Three Stone Diamond Engagement Ring 7.88 ct Emerald Cut P",
            "id": 37,
            "description": "Rings: Vintage Split Shank Three Stone Diamond Engagement Ring 7.88 ct Emerald Cut P",
            "images": [
              "https://i.ebayimg.com/images/g/GWsAAOSwpHpa-fIV/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/l-MAAOSw3UZa-fIX/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/YlcAAOSwnGha-fIZ/s-l500.jpg",
              "https://i.ebayimg.com/images/g/x4AAAOSwAAFa-fIb/s-l1600.jpg"
            ],
            "rating": "5",
            "price": "233,434.16"
          },
    
          {
            "name": "Gorgeous 5.00 Ct Cushion Cut Diamond Platinum Engagement Ring Set H,VS2 GIA",
            "id": 38,
            "description": "Rings: Gorgeous 5.00 Ct Cushion Cut Diamond Platinum Engagement Ring Set H,VS2 GIA",
            "images": [
              "https://i.ebayimg.com/images/g/9csAAOSwal5YEPQb/s-l500.jpg",
              "https://i.ebayimg.com/images/g/9csAAOSwal5YEPQb/s-l500.jpg",
              "https://i.ebayimg.com/images/g/9csAAOSwal5YEPQb/s-l500.jpg",
              "https://i.ebayimg.com/images/g/S5kAAOSwImRYEPQh/s-l500.jpg"
            ],
            "rating": "5",
            "price": "38,206.30"
          }
        ]
      },
      {
        "id": 4,
        "name": "Teddy Bears",
        "image": "https://i.ebayimg.com/images/g/LosAAOSw~cldSBSw/s-l1600.jpg",
        "description": "Teddy Bears",
        "items": [
          {
            "name": "Peek A Boo Teddy Bear Toddler Kid Children Play Soft Toy Plush Blanket Warm Gift",
            "id": 41,
            "description": "Teddy Bears: Peek A Boo Teddy Bear Toddler Kid Children Play Soft Toy Plush Blanket Warm Gift",
            "images": [
              "https://i.ebayimg.com/images/g/LosAAOSw~cldSBSw/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/q0MAAOSw2PhdSBSx/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/8GEAAOSwIMxdSBSw/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/pUEAAOSwrENdSBSy/s-l1600.png"
            ],
            "rating": "5",
            "price": "10.99"
          },
          {
            "name": "New Large Teddy Bear XXL Giant Teddy Bears Big Soft Plush Toys Kids ",
            "id": 42,
            "description": "Teddy Bears: New Large Teddy Bear XXL Giant Teddy Bears Big Soft Plush Toys Kids ",
            "images": [
              "https://i.ebayimg.com/images/g/4KIAAOSwyApcDhl-/s-l500.jpg",
              "https://i.ebayimg.com/images/g/LTEAAOSwM8RcDhnu/s-l500.png",
              "https://i.ebayimg.com/images/g/DCIAAOSwiOxcDhn1/s-l500.png",
              "https://i.ebayimg.com/images/g/bB4AAOSwcttcDhn-/s-l500.png"
            ],
            "rating": "4.7",
            "price": "22.98"
          },
          {
            "name": "Traditional Teddy Bear Soft Classic Bow Plush Cuddly Bedtime Toy Kids Gift Xmas",
            "id": 43,
            "description": "Teddy Bears: Traditional Teddy Bear Soft Classic Bow Plush Cuddly Bedtime Toy Kids Gift Xmas",
            "images": [
              "https://i.ebayimg.com/images/g/EugAAOSw0YlcF7xB/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/p4UAAOSweX5cF7xR/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/1-EAAOSwfvtcF7y5/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/al0AAOSw91JcF7zx/s-l1600.jpg"
            ],
            "rating": "4.6",
            "price": "6.99"
          },
          {
            "name": "200cm Giant Skin Bearskin Teddy Bear Big Unfilled Plush Toy DIY For Gift UK",
            "id": 44,
            "description": "Teddy Bears: 200cm Giant Skin Bearskin Teddy Bear Big Unfilled Plush Toy DIY For Gift UK",
            "images": [
              "https://i.ebayimg.com/images/g/l4IAAOSwiNBcrFsl/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/IFcAAOSwey5crFsj/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/i94AAOSwoutcrFsn/s-l500.jpg",
              "https://i.ebayimg.com/images/g/F68AAOSwvxtcrFsn/s-l500.jpg"
            ],
            "rating": "4.6",
            "price": "29.96"
          },
          {
            "name": "39'' Large Giant Teddy Bear Soft Plush 100% Cotton Toys Doll Kids Birthdays Gift",
            "id": 45,
            "description": "Teddy Bears: 39'' Large Giant Teddy Bear Soft Plush 100% Cotton Toys Doll Kids Birthdays Gift",
            "images": [
              "https://i.ebayimg.com/images/g/H48AAOSwflBcvtDJ/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/7tgAAOSwR69cvtDn/s-l500.png",
              "https://i.ebayimg.com/images/g/-L8AAOSwSt5cvtDg/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/CmAAAOSwCuRcvtDv/s-l500.png"
            ],
            "rating": "4.5",
            "price": "12.99"
          },
          {
            "name": "20cm Mini Plush Soft Teddy Bear Cuddly Toy Kids Baby Girl Boy Gift With Ribbon",
            "id": 46,
            "description": "Teddy Bears: 20cm Mini Plush Soft Teddy Bear Cuddly Toy Kids Baby Girl Boy Gift With Ribbon",
            "images": [
              "https://i.ebayimg.com/images/g/8goAAOSwshVcxCJE/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/8goAAOSwshVcxCJE/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/8goAAOSwshVcxCJE/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/8goAAOSwshVcxCJE/s-l1600.jpg"
            ],
            "rating": "4.5",
            "price": "6.99"
          },
          {
            "name": "NEW Plush Super Soft Large Teddy Bear - Big 50cm Cuddly Toy - Traditional Gift",
            "id": 47,
            "description": "Teddy Bears: NEW Plush Super Soft Large Teddy Bear - Big 50cm Cuddly Toy - Traditional Gift",
            "images": [
              "https://i.ebayimg.com/images/g/ZgUAAOSwK9lbt1rs/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/Zi0AAOSwK9lbt1r9/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/DswAAOSwu7xbt1sT/s-l1600.jpg",
              "https://i.ebayimg.com/images/g/3IEAAOSwZl1bt1se/s-l1600.jpg"
            ],
            "rating": "4.4",
            "price": "10.79"
          },
          {
            "name": "Small Mini Teddy Bear Stuffed Animal Doll Plush Soft Toy Children Kids Trend",
            "id": 48,
            "description": "Teddy Bears: Small Mini Teddy Bear Stuffed Animal Doll Plush Soft Toy Children Kids Trend",
            "images": [
              "https://i.ebayimg.com/images/g/pOkAAOSwq2xcJF~7/s-l500.jpg",
              "https://i.ebayimg.com/images/g/HBUAAOSwW9NcJGAA/s-l500.jpg",
              "https://i.ebayimg.com/images/g/dEMAAOSwJ7RcJF~-/s-l500.jpg",
              "https://i.ebayimg.com/images/g/IVsAAOSwqLRcJGAS/s-l1600.jpg"
            ],
            "rating": "4.4",
            "price": "2.72"
          }
        ]
      }
    ]
    )
    return (
        <section className="section-b">
            <Category names={names} cards={cards} />
        </section>
    )
}

export default CategoryContainer
